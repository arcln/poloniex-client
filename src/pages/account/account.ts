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

    public balances: any = null;
    public usdtBalance: any = null;
    public holdings: string = '0';
    private btcPrice: number = 0;

    constructor(public navCtrl: NavController,
                public poloniex: PoloniexService) {
    }

    public ngOnInit(): void {
        this.refreshBalances();
    }

    public formatNb(nb: number): string {
        const floatPrecision = 4;
        return nb.toFixed(floatPrecision);
    }

    public refreshBalances(refresher?: any): void {
        Observable.forkJoin([
            this.poloniex.api('returnTicker'),
            this.poloniex.api('returnCompleteBalances')
        ]).subscribe(data => {
            console.log(data);
            const ticker = data[0];
            const balances = data[1];

            this.btcPrice = ticker.USDT_BTC.last;
            let filteredBalances: Array<any> = [];

            Object.keys(balances).forEach(key => {
                if (parseInt(balances[key].available) != 0 && key !== 'USDT') {
                    filteredBalances.push(balances[key]);
                    filteredBalances[filteredBalances.length - 1].coin = key;
                }
            });
            filteredBalances = filteredBalances.map(balance => {
                balance.usdtValue = this.formatNb(parseFloat(balance.btcValue) * this.btcPrice);
                return balance;
            });
            this.balances = filteredBalances.sort((a, b) => a.usdtValue < b.usdtValue ? 1 : -1);
            this.usdtBalance = balances.USDT;
            const valueSum = this.balances.length > 1 ? this.balances.reduce((a, b) => parseFloat(a.usdtValue) + parseFloat(b.usdtValue)) : parseFloat(this.balances[0].usdtValue);
            this.holdings = this.formatNb(valueSum + parseFloat(this.usdtBalance.available));
            this.loading = false;
            if (refresher) {
                refresher.complete();
            }
        }, err => {
            if (err) {
                Logger.error(err);
            }
        });
    }
}
