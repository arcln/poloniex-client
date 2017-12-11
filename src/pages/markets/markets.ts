import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PoloniexService} from '../../services/poloniex.service';
import {UtilsService} from '../../services/utils.service';
import {ExchangePage} from '../exchange/exchange';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-market',
    templateUrl: 'markets.html'
})
export class MarketsPage implements OnInit {

    public loading: boolean = true;
    public tab: string = 'USDT';

    private market: Array<any> = [];
    private fullMarket: Array<any> = [];
    private refreshDelay: number = 5000;

    constructor(private navCtrl: NavController,
                private poloniex: PoloniexService,
                private utils: UtilsService,
                private storage: Storage) {

    }

    public ngOnInit(): void {
        this.poloniex.subscribeToNavEvents(this.navCtrl);
        this.storage.get('refreshDelay').then(rd => {
            if (rd) {
                this.refreshDelay = rd;
            } else {
                this.storage.set('refreshDelay', 5000);
            }
        });
        this.tickerUpdate();
    }

    public tickerUpdate(): void {
        this.poloniex.api('returnTicker').subscribe(function(ticker) {
            this.fullMarket = this.utils.toArray(ticker);
            this.onMarketChange();
            setTimeout(this.tickerUpdate.bind(this), this.refreshDelay);
        }.bind(this));
    }

    public onMarketChange(): void {
        const previousMarket = this.market;
        this.market = this.fullMarket.filter(coin => coin.key.split('_')[0] === this.tab);
        if (this.market.length === previousMarket.length) {
            this.market.forEach((coin, idx) => {
                const newCoinValue = parseFloat(coin.last);
                const oldCoinValue = parseFloat(previousMarket[idx].last);
                if (newCoinValue !== oldCoinValue) {
                    coin.changeResult = newCoinValue - oldCoinValue;
                }
            });
        }
        this.loading = false;
    }

    public coinClicked(event: any, coin: any): void {
        this.navCtrl.push(ExchangePage, {
            coin: coin
        });
    }

}
