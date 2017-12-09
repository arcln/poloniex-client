import {Injectable} from '@angular/core';
import {Logger} from './logger.service';
import * as PoloniexClient from 'poloniex.js';

@Injectable()
export class PoloniexService {
    private apiKey: string = 'I1QWXF64-KCASDOVD-B20N6DOX-CXRO9A4H';
    private apiSecret: string = '5ee550091c3493dac780202dad3e0cbc02c761eb4ad7c64295bf330a6f2d66fb279456151dd095745fa2dea00c16d69df808932bb89651f6b1de4e2666c24a29';

    private poloniex: any;

    constructor() {
        PoloniexClient.STRICT_SSL = false;
        this.poloniex = new PoloniexClient(this.apiKey, this.apiSecret);
    }

    private requestAPI(method: string, callback: Function, errCallback?: Function, params?: object): void {
        this.poloniex[method](function (err, res) {
            if (err) {
                if (typeof errCallback === 'function') {
                    errCallback(err);
                } else {
                    throw err;
                }
            } else {
                if (typeof callback === 'function') {
                    callback(res);
                } else {
                    Logger.error('No callback defined for API call <' + method + '>');
                }
            }
        }, params);
    }

    public getTicker(callback: Function, errCallback?: Function): void {
        this.requestAPI('returnTicker', callback, errCallback);
    }

    public getBalances(callback: Function, errCallback?: Function): void {
        this.requestAPI('returnCompleteBalances', callback, errCallback);
    }
}