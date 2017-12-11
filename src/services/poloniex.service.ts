import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import {Logger} from './logger.service';
import * as Autobahn from 'autobahn';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/catch';
import {SettingsPage} from '../pages/settings/settings';
import {NavController} from 'ionic-angular';

@Injectable()
export class PoloniexService {
    private apiKey: string;
    private apiSecret: string;
    private wsUrl = 'wss://api.poloniex.com';
    private apiUrl = 'https://api.arthurchaloin.com/poloniex';
    // private apiKey: string = 'I1QWXF64-KCASDOVD-B20N6DOX-CXRO9A4H';
    // private apiSecret: string = '5ee550091c3493dac780202dad3e0cbc02c761eb4ad7c64295bf330a6f2d66fb279456151dd095745fa2dea00c16d69df808932bb89651f6b1de4e2666c24a29';
    // private apiUrl = 'http://localhost:4210';
    private nonceErrorTimer: any;
    private nonceErrorCount: number = 0;
    private $openSettings: EventEmitter<any> = new EventEmitter<any>();

    constructor(private logger: Logger,
                private http: HttpClient,
                private storage: Storage) {
    }

    public api(command: string, params?: object): Observable<any> {
        this.updateKeys();
        return this.http.post(this.apiUrl, {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            command: command,
            params: params
        }).map(this.errorHandler);
    }

    public stream(callback: Function) {
        const connection = new Autobahn.Connection({
            url: this.wsUrl,
            realm: 'realm1'
        });

        connection.onopen = (session) => {
            console.log('Connection is up.');
            session.subscribe('ticker', callback);
        };

        connection.onclose = () => {
            console.log('Connection is down.');
            this.logger.alert('Web Socket Disconnected', 'The WS stream has been closed. This means that marketplace is no longer real-time updated.', ['OK']);
        };

        connection.open();
    }

    public errorHandler: (data: any) => any = function (data) {
        if (data.error) {
            Logger.error(data.error);
            if (data.error.substr(0, 5) === 'Nonce') {
                this.nonceErrorCount += 1;
                if (this.nonceErrorCount >= 3) {
                    this.logger.alert('Request Failure', 'Nonce isn\'t synchronized with the server anymore. Please try again in a few seconds. If this errors occurs again, consider refreshing your API key.', ['OK']);
                    this.nonceErrorCount = 0;
                }
                clearTimeout(this.nonceErrorTimer);
                setTimeout(() => this.nonceErrorCount = 0, 1000);
                return '__nonce_failure';
            } else if (data.error.includes('Poloniex: Error. API key and secret required') || data.error.includes('Invalid API key/secret pair.')) {
                this.logger.alert('Missing/Invalid API Key', 'Your API Key/API Secret pair is neither missing or invalid. Would you like to update them now?', [
                    'Later',
                    {
                        text: 'Update',
                        handler: () => {
                            this.$openSettings.emit();
                        }
                    }
                ]);
                return null;
            } else {
                this.logger.alert('Error', data.error || 'Please try refreshing.', ['OK']);
                return null;
            }
        }

        return data;
    }.bind(this);

    public subscribeToNavEvents(navCtrl: NavController): void {
        this.$openSettings.subscribe(event => navCtrl.push(SettingsPage));
    }

    private updateKeys(): void {
        this.storage.get('apiKey').then(key => this.apiKey = key);
        this.storage.get('apiSecret').then(key => this.apiSecret = key);
    }
}