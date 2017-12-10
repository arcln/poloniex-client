import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import {Logger} from './logger.service';

@Injectable()
export class PoloniexService {
    private apiKey: string = 'I1QWXF64-KCASDOVD-B20N6DOX-CXRO9A4H';
    private apiSecret: string = '5ee550091c3493dac780202dad3e0cbc02c761eb4ad7c64295bf330a6f2d66fb279456151dd095745fa2dea00c16d69df808932bb89651f6b1de4e2666c24a29';
    private apiUrl = 'https://api.arthurchaloin.com/poloniex';
    // private apiUrl = 'http://localhost:4210';

    constructor(private logger: Logger,
                private http: HttpClient) {
    }

    public api(command: string, params?: object): Observable<any> {
        return this.http.post(this.apiUrl, {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            command: command,
            params: params
        }).map(this.errorHandler);
    }

    private errorHandler: (data: Array<any>) => Array<any> = function(data) {
        // Please try again in a few seconds. If this errors occurs again, consider refreshing you API key
        if (data.error) {
            if (data.error.substr(0, 5) === 'Nonce') {
                this.logger.toast('Nonce is no more synchronized with the server. Retrying in a few seconds...');
                return this.api();
            } else {
                this.logger.alert("Request Failed", data.error || 'Please try refreshing.', ['OK']);
                throw data.error;
            }
        }

        return data;
    }.bind(this);
}