import {Component, OnInit} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {Logger} from '../../services/logger.service';
import {UtilsService} from '../../services/utils.service';
import {PoloniexService} from '../../services/poloniex.service';

@Component({
    selector: 'page-trade',
    templateUrl: 'trade.html'
})
export class TradePage implements OnInit {

    public loading = true;
    public pageTitle: string = '';
    public market: string = '';

    public sellPrice: number;
    public sellQuantity: number;
    public sellTotal: number;

    public buyPrice: number;
    public buyQuantity: number;
    public buyTotal: number;

    constructor(private navCtrl: NavController,
                private loadingCtrl: LoadingController,
                private navParams: NavParams,
                private logger: Logger,
                private utils: UtilsService,
                private poloniex: PoloniexService) {
    }

    public ngOnInit(): void {
        this.market = this.navParams.get('key').split('_')[0];
        this.pageTitle = this.navParams.get('key').split('_')[1];
        this.sellPrice = this.navParams.get('coin').highestBid;
        this.buyPrice = this.navParams.get('coin').lowestAsk;

        this.poloniex.api('returnCompleteBalances').subscribe(function(balances) {
            if (balances) {
                this.sellQuantity = balances[this.pageTitle].available;
                this.onSellQuantityChange();
                this.loading = false;
            }
        }.bind(this));
    }

    private sell(): void {
        Logger.log(`Sell ${this.sellQuantity} @${this.sellPrice}. Total : ${this.sellTotal}`);

        const loading = this.loadingCtrl.create();
        loading.present();

        this.poloniex.api('sell', [
            this.market,
            this.pageTitle,
            this.sellPrice,
            this.sellQuantity
        ]).subscribe(order => {
            this.logger.alert('Success', `Order #${order.orderNumber} placed.`, ['OK']);
            loading.dismiss();
        });
    }

    private buy(): void {
        Logger.log(`Buy ${this.buyQuantity} @${this.buyPrice}. Total : ${this.buyTotal}`);

        const loading = this.loadingCtrl.create();
        loading.present();

        this.poloniex.api('buy', [
            this.market,
            this.pageTitle,
            this.buyPrice,
            this.buyQuantity
        ]).subscribe(order => {
            this.logger.alert('Success', `Order #${order.orderNumber} placed.`, ['OK']);
            loading.dismiss();
        });
    }

    public onSellClick(): void {
        const message = `You're about to sell ${this.utils.formatNb(this.sellQuantity)} ${this.pageTitle} for ${this.utils.formatNb(this.sellTotal)} ${this.market}. Are you sure?`;
        this.logger.alert('Confirm Exchange', message, [
            'Cancel',
            {
                text: 'OK',
                handler: this.sell.bind(this)
            },
        ]);
    }

    public onBuyClick(): void {
        const message = `You're about to buy ${this.utils.formatNb(this.buyQuantity)} ${this.pageTitle} for ${this.utils.formatNb(this.buyTotal)} ${this.market}. Are you sure?`;
        this.logger.alert('Confirm Exchange', message, [
            'Cancel',
            {
                text: 'OK',
                handler: this.buy.bind(this)
            },
        ]);
    }

    public onSellPriceChange(event: any): void {
        this.sellTotal = this.sellPrice * this.sellQuantity;
    }

    public onSellQuantityChange(event: any): void {
        this.sellTotal = this.sellPrice * this.sellQuantity;
    }

    public onSellTotalChange(event: any): void {
        this.sellQuantity = this.sellTotal / this.sellPrice;
    }

    public onBuyPriceChange(event: any): void {
        this.buyTotal = this.buyPrice * this.buyQuantity;
    }

    public onBuyQuantityChange(event: any): void {
        this.buyTotal = this.buyPrice * this.buyQuantity;
    }

    public onBuyTotalChange(event: any): void {
        this.buyQuantity = this.buyTotal / this.buyPrice;
    }
}
