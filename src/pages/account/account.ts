import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PoloniexService} from '../../services/poloniex.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {Logger} from '../../services/logger.service';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage implements OnInit {
    public loading = true;
    public tab: string = 'balances';

    public balances: Array<any> = [];
    public usdtBalance: any = null;
    public holdings: string = '0';
    private btcPrice: number = 0;

    public trades: Array<any> = [];
    public orders: Array<any> = [];

    constructor(private navCtrl: NavController,
                private poloniex: PoloniexService) {
    }

    public ngOnInit(): void {
        this.refresh();
    }

    public formatNb(nb: number): string {
        const floatPrecision = 4;
        return nb.toFixed(floatPrecision);
    }

    public computeBalances(ticker: any, balances: any): void {
        this.btcPrice = ticker.USDT_BTC.last;
        let filteredBalances: Array<any> = [];

        Object.keys(balances).forEach(key => {
            if (parseFloat(balances[key].available) != 0 && key !== 'USDT') {
                filteredBalances.push(balances[key]);
                filteredBalances[filteredBalances.length - 1].coin = key;
            }
        });

        filteredBalances = filteredBalances.map(balance => {
            balance.usdtValue = this.formatNb(parseFloat(balance.btcValue) * this.btcPrice);
            return balance;
        });

        this.balances = filteredBalances.sort((a, b) => a.usdtValue < b.usdtValue ? -1 : 1);
        this.usdtBalance = balances.USDT;
        const valueSum = this.balances.length ? (this.balances.length > 1 ? this.balances.reduce((a, b) => parseFloat(a.usdtValue) + parseFloat(b.usdtValue)) : parseFloat(this.balances[0].usdtValue)) : 0;
        this.holdings = this.formatNb(valueSum + parseFloat(this.usdtBalance.available));
    }

    public computeTrades(trades: any): void {
        this.trades = [];
        Object.keys(trades).forEach(key => {
            this.trades.push({
                market: key.split('_')[0] + ' <-> ' + key.split('_')[1],
                data: trades[key]
            });
        });
    }

    public computeOrders(orders: any): void {
        this.orders = [];
        Object.keys(orders).forEach(key => {
            if (orders[key].length) {
                this.orders.push({
                    market: key.split('_')[0] + ' <-> ' + key.split('_')[1],
                    data: orders[key]
                });
            }
        });
    }

    public refresh(refresher?: any): void {
        try {
            Observable.forkJoin([
                this.poloniex.api('returnTicker'),
                this.poloniex.api('returnCompleteBalances'),
                this.poloniex.api('returnTradeHistory', ['all', null]),
                this.poloniex.api('returnOpenOrders', ['all', null]),
            ]).subscribe(data => {
                console.log(data);

                try {
                    this.computeBalances(data[0], data[1]);
                    this.computeTrades(data[2]);
                    this.computeOrders(data[3]);

                    this.loading = false;
                    if (refresher) {
                        refresher.complete();
                    }
                } catch (e) {
                    Logger.error(e);
                    this.refresh(refresher);
                }
            });
        } catch (e) {
            Logger.error(e);
        }
    }
}
