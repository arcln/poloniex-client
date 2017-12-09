import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PoloniexService} from '../../services/poloniex.service';

@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage implements OnInit {

    private btcPrice: number = 0;

    public tab: string = 'balances';
    public balances: Array<any> = [];

    constructor(public navCtrl: NavController,
                public api: PoloniexService) {
    }

    public ngOnInit() {
        this.api.getTicker(ticker => {
            this.btcPrice = ticker.USDT_BTC.last;
            this.api.getBalances(balances => {
                Object.keys(balances).forEach(key => {
                    if (parseInt(balances[key].available) != 0) {
                        this.balances.push(balances[key]);
                        this.balances[this.balances.length - 1].coin = key;
                    }
                });
                this.balances = this.balances.map(balance => {
                    balance.usdtValue = balance.btcValue * this.btcPrice;
                    return balance;
                });
            });
        });
    }

}
