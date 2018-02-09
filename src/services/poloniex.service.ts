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
import {NavController, Refresher} from 'ionic-angular';

@Injectable()
export class PoloniexService {
    public refreshState: boolean = true;
    public $refreshState: EventEmitter<any> = new EventEmitter<any>();

    private apiKey: string;
    private apiSecret: string;
    private wsUrl = 'wss://api.poloniex.com';
    private apiUrl = 'https://api.arthurchaloin.com/poloniex';
    private nonceErrorTimer: any;
    private nonceErrorCount: number = 0;
    private $openSettings: EventEmitter<any> = new EventEmitter<any>();

    constructor(private logger: Logger,
                private http: HttpClient,
                private storage: Storage) {
    }

    private updateKeys(): void {
        this.storage.get('apiKey').then(key => this.apiKey = key);
        this.storage.get('apiSecret').then(key => this.apiSecret = key);
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

    private errorHandler: (data: any) => any = function (data) {
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

    public toggleRefresh(refresher: Refresher): void {
        refresher.complete();
        this.refreshState = !this.refreshState;

        if (this.refreshState) {
            this.$refreshState.emit(true);
            this.logger.toast('Live refresh enabled', 1000);
        } else {
            this.logger.toast('Live refresh disabled', 1000);
        }
    }
}
