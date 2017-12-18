import {AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController, NavParams, Refresher} from 'ionic-angular';
import {Logger} from '../../services/logger.service';
import {PoloniexService} from '../../services/poloniex.service';
import {UtilsService} from '../../services/utils.service';
import {Chart} from 'chart.js';
import {TradePage} from '../trade/trade';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-exchange',
    templateUrl: 'exchange.html'
})
export class ExchangePage implements AfterViewInit {

    public loading: boolean = true;
    public balanceLoading: boolean = true;
    public pageTitle: string = 'Exchange';
    public coin: any = this.navParams.get('coin');
    public coinBalance: number = 0;
    public coinEstimation: number = 0;

    private chart: any;
    private chartDataLow: Array<any> = [];
    private chartDataHigh: Array<any> = [];
    private chartLabels: Array<any> = [];
    private period: string = '24h';
    private resolution: string = '30m';
    private graphLoaded: boolean = false;
    private refreshDelay: number = 5000;

    @ViewChild('graph') public graph: ElementRef;

    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private logger: Logger,
                private poloniex: PoloniexService,
                private utils: UtilsService,
                private storage: Storage) {
    }

    public ngAfterViewInit(): void {
        const __this = this;

        this.poloniex.$refreshState.subscribe(event => {
            if (event) this.tickerUpdate.bind(__this).call();
        });

        this.pageTitle = this.navParams.get('coin').key.split('_')[1];
        this.tickerUpdate();
        this.loadGraph();
        Chart.defaults.global.maintainAspectRatio = false;

        this.storage.get('refreshDelay').then(rd => {
            if (rd) {
                this.refreshDelay = rd;
            } else {
                this.storage.set('refreshDelay', 5000);
            }
        });
    }

    private tickerUpdate(): void {
        this.loadGraph();
        this.poloniex.api('returnTicker').subscribe(function (ticker) {
            this.coin = ticker[this.navParams.get('coin').key];
            this.poloniex.api('returnCompleteBalances').subscribe(function (balances) {
                if (balances && !balances.error && balances[this.navParams.get('coin').key.split('_')[1]]) {
                    this.coinBalance = balances[this.navParams.get('coin').key.split('_')[1]].available;
                    let btcValue = ticker[this.navParams.get('coin').key.split('_')[0] + '_BTC'];
                    if (btcValue) {
                        btcValue = btcValue.last;
                    } else {
                        btcValue = 1;
                    }
                    this.coinEstimation = this.utils.formatNb(balances[this.navParams.get('coin').key.split('_')[1]].btcValue * btcValue);
                    this.balanceLoading = false;
                }

                if (this.poloniex.refreshState) {
                    setTimeout(this.tickerUpdate.bind(this), this.refreshDelay);
                }
            }.bind(this));
        }.bind(this));
    }

    private loadGraph(): void {
        this.poloniex.api('returnChartData', [
            this.navParams.get('coin').key.split('_')[0],
            this.navParams.get('coin').key.split('_')[1],
            this.getGraphPeriod(),
            this.getGraphStart(),
            Date.now(),
        ]).subscribe(function (data) {
            this.loading = true;
            this.chartDataLow = [];
            this.chartDataHigh = [];
            this.chartLabels = [];

            data.forEach(point => {
                this.chartLabels.push(this.formatDate(point.date));
                // this.chartDataLow.push({
                //     x: point.date,
                //     y: point.open
                // });
                // console.log(point);
                this.chartDataHigh.push({
                    x: point.date,
                    y: point.close
                });
            });

            if (this.graphLoaded) {
                Chart.defaults.global.animation.duration = 0;
            } else {
                this.graphLoaded = true;
            }

            this.chart = new Chart(this.graph.nativeElement, {
                type: 'line',
                data: {
                    labels: this.chartLabels,
                    datasets: [{
                        data: this.chartDataHigh,
                        lineTension: 0,
                        backgroundColor: 'rgba(55,166,119,.2)',
                        borderColor: 'rgb(55,166,119)',
                        pointRadius: 0,
                        pointHitRadius: 10
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            position: 'bottom'
                        }]
                    }
                }
            });

            this.loading = false;
        }.bind(this));
    }

    private getGraphPeriod(): number {
        switch (this.resolution) {
            case '5m':
                return 300;
            case '15m':
                return 900;
            case '30m':
                return 1800;
            case '2h':
                return 7200;
            case '4h':
                return 14400;
            case '24h':
                return 86400;
            default:
                return 1800;
        }
    }

    private getGraphStart(): number {
        const now = Date.now() / 1000 | 0;
        switch (this.period) {
            case '6h':
                return now - 6 * 3600;
            case '24h':
                return now - 24 * 3600;
            case '2d':
                return now - 48 * 3600;
            case '4d':
                return now - 96 * 3600;
            case '1w':
                return now - 7 * 24 * 3600;
            case '2w':
                return now - 14 * 24 * 3600;
            case '1m':
                return now - 31 * 24 * 3600;
            case 'all':
                return 0;
            default:
                return now - 24 * 3600;
        }
    }

    private formatDate(ts: number): string {
        const date = new Date(ts * 1000);

        switch (this.period) {
            case '6h':
                return `${date.getHours()}:${date.getMinutes()}${date.getMinutes() == 0 ? '0' : ''}`;
            case '24h':
                return `${date.getHours()}:${date.getMinutes()}${date.getMinutes() == 0 ? '0' : ''}`;
            case '2d':
                return `${date.getHours()}:${date.getMinutes()}${date.getMinutes() == 0 ? '0' : ''}`;
            default:
                return `${date.getDate()}/${date.getMonth() + 1} ${date.getHours()}h`;
        }
    }

    public onGraphSettingsChange(): void {
        this.loadGraph.bind(this).call();
    }

    public trade(): void {
        this.navCtrl.push(TradePage, {
            coin: this.coin,
            key: this.navParams.get('coin').key
        });
    }

    public toggleRefresh(refresher: Refresher): void {
        this.poloniex.toggleRefresh(refresher);
    }
}
