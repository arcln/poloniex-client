webpackJsonp([0],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(navCtrl, logger, storage) {
        this.navCtrl = navCtrl;
        this.logger = logger;
        this.storage = storage;
    }
    SettingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('apiKey').then(function (apiKey) { return _this.apiKey = apiKey; });
        this.storage.get('apiSecret').then(function (apiSecret) { return _this.apiSecret = apiSecret; });
        this.storage.get('refreshDelay').then(function (refreshDelay) { return _this.refreshDelay = refreshDelay; });
    };
    SettingsPage.prototype.onApiKeyChange = function () {
        this.storage.set('apiKey', this.apiKey);
    };
    SettingsPage.prototype.onApiSecretChange = function () {
        this.storage.set('apiSecret', this.apiSecret);
    };
    SettingsPage.prototype.onRefreshDelayChange = function () {
        this.storage.set('refreshDelay', this.refreshDelay);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Settings\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div>\n        <ion-list no-border>\n            <ion-list-header>\n                API Authentication\n            </ion-list-header>\n            <ion-item>\n                <ion-label color="primary" fixed>API Key</ion-label>\n                <ion-input [(ngModel)]="apiKey" (ngModelChange)="onApiKeyChange($event)" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" fixed>API Secret</ion-label>\n                <ion-input [(ngModel)]="apiSecret" (ngModelChange)="onApiSecretChange($event)" type="password"></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-border style="margin-top: 42px">\n            <ion-list-header>\n                App settings\n            </ion-list-header>\n            <ion-item>\n                <ion-label color="primary">Refresh delay (ms)</ion-label>\n                <ion-input [(ngModel)]="refreshDelay" (ngModelChange)="onRefreshDelayChange($event)" type="number" placeholder="5000"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utils_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trade_trade__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ExchangePage = (function () {
    function ExchangePage(navCtrl, navParams, logger, poloniex, utils, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.logger = logger;
        this.poloniex = poloniex;
        this.utils = utils;
        this.storage = storage;
        this.loading = true;
        this.balanceLoading = true;
        this.pageTitle = 'Exchange';
        this.coin = this.navParams.get('coin');
        this.coinBalance = 0;
        this.coinEstimation = 0;
        this.chartData = [];
        this.chartLabels = [];
        this.period = '24h';
        this.resolution = '30m';
        this.graphLoaded = false;
        this.refreshDelay = 5000;
    }
    ExchangePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        var __this = this;
        this.poloniex.$refreshState.subscribe(function (event) {
            if (event)
                _this.tickerUpdate.bind(__this).call();
        });
        this.pageTitle = this.navParams.get('coin').key.split('_')[1];
        this.tickerUpdate();
        this.loadGraph();
        __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"].defaults.global.maintainAspectRatio = false;
        this.storage.get('refreshDelay').then(function (rd) {
            if (rd) {
                _this.refreshDelay = rd;
            }
            else {
                _this.storage.set('refreshDelay', 5000);
            }
        });
    };
    ExchangePage.prototype.tickerUpdate = function () {
        this.loadGraph();
        this.poloniex.api('returnTicker').subscribe(function (ticker) {
            this.coin = ticker[this.navParams.get('coin').key];
            this.poloniex.api('returnCompleteBalances').subscribe(function (balances) {
                if (balances && !balances.error && balances[this.navParams.get('coin').key.split('_')[1]]) {
                    this.coinBalance = balances[this.navParams.get('coin').key.split('_')[1]].available;
                    var btcValue = ticker[this.navParams.get('coin').key.split('_')[0] + '_BTC'];
                    if (btcValue) {
                        btcValue = btcValue.last;
                    }
                    else {
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
    };
    ExchangePage.prototype.loadGraph = function () {
        this.poloniex.api('returnChartData', [
            this.navParams.get('coin').key.split('_')[0],
            this.navParams.get('coin').key.split('_')[1],
            this.getGraphPeriod(),
            this.getGraphStart(),
            Date.now(),
        ]).subscribe(function (data) {
            var _this = this;
            this.loading = true;
            this.chartData = [];
            this.chartLabels = [];
            data.forEach(function (point) {
                _this.chartLabels.push(_this.formatDate(point.date));
                _this.chartData.push({
                    x: point.date,
                    y: point.low
                });
            });
            if (this.graphLoaded) {
                __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"].defaults.global.animation.duration = 0;
            }
            else {
                this.graphLoaded = true;
            }
            this.chart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.graph.nativeElement, {
                type: 'line',
                data: {
                    labels: this.chartLabels,
                    datasets: [{
                            data: this.chartData,
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
    };
    ExchangePage.prototype.getGraphPeriod = function () {
        switch (this.resolution) {
            case '5m': return 300;
            case '15m': return 900;
            case '30m': return 1800;
            case '2h': return 7200;
            case '4h': return 14400;
            case '24h': return 86400;
            default: return 1800;
        }
    };
    ExchangePage.prototype.getGraphStart = function () {
        var now = Date.now() / 1000 | 0;
        switch (this.period) {
            case '6h': return now - 6 * 3600;
            case '24h': return now - 24 * 3600;
            case '2d': return now - 48 * 3600;
            case '4d': return now - 96 * 3600;
            case '1w': return now - 7 * 24 * 3600;
            case '2w': return now - 14 * 24 * 3600;
            case '1m': return now - 31 * 24 * 3600;
            case 'all': return 0;
            default: return now - 24 * 3600;
        }
    };
    ExchangePage.prototype.formatDate = function (ts) {
        var date = new Date(ts * 1000);
        switch (this.period) {
            case '6h': return date.getHours() + ":" + date.getMinutes() + (date.getMinutes() == 0 ? '0' : '');
            case '24h': return date.getHours() + ":" + date.getMinutes() + (date.getMinutes() == 0 ? '0' : '');
            case '2d': return date.getHours() + ":" + date.getMinutes() + (date.getMinutes() == 0 ? '0' : '');
            default: return date.getDate() + "/" + (date.getMonth() + 1) + " " + date.getHours() + "h";
        }
    };
    ExchangePage.prototype.onGraphSettingsChange = function () {
        this.loadGraph.bind(this).call();
    };
    ExchangePage.prototype.trade = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__trade_trade__["a" /* TradePage */], {
            coin: this.coin,
            key: this.navParams.get('coin').key
        });
    };
    ExchangePage.prototype.toggleRefresh = function (refresher) {
        this.poloniex.toggleRefresh(refresher);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('graph'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], ExchangePage.prototype, "graph", void 0);
    ExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/exchange/exchange.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            {{pageTitle}}\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button (click)="trade($event)">\n                Trade\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="toggleRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div>\n        <ion-list no-border>\n            <ion-item>\n                Last price\n                <ion-note item-end>\n                    {{coin?.last}} {{navParams.get(\'coin\').key.split(\'_\')[0]}}\n                </ion-note>\n            </ion-item>\n            <ion-item>\n                Variation\n                <ion-note item-end [style.color]="coin?.percentChange > 0 ? \'green\' : \'red\'">\n                    <span *ngIf="coin?.percentChange > 0">+</span>\n                    {{utils.formatNb(coin?.percentChange, 4)}}%\n                </ion-note>\n            </ion-item>\n        </ion-list>\n\n        <ion-spinner *ngIf="loading" style="margin-top: 20vh; z-index: 42"></ion-spinner>\n        <canvas #graph class="graph-card"></canvas>\n\n        <div padding (click)="onGraphSettingsChange($event)">\n            <ion-segment [(ngModel)]="period">\n                <ion-segment-button value="6h">\n                    6h\n                </ion-segment-button>\n                <ion-segment-button value="24h">\n                    24h\n                </ion-segment-button>\n                <ion-segment-button value="2d">\n                    2d\n                </ion-segment-button>\n                <ion-segment-button value="4d">\n                    4d\n                </ion-segment-button>\n                <ion-segment-button value="1w">\n                    1w\n                </ion-segment-button>\n                <ion-segment-button value="2w">\n                    2w\n                </ion-segment-button>\n                <ion-segment-button value="1m">\n                    1m\n                </ion-segment-button>\n                <ion-segment-button value="all">\n                    All\n                </ion-segment-button>\n            </ion-segment>\n            <br>\n            <ion-segment [(ngModel)]="resolution">\n                <ion-segment-button value="5m">\n                    5 min\n                </ion-segment-button>\n                <ion-segment-button value="15m">\n                    15 min\n                </ion-segment-button>\n                <ion-segment-button value="30m">\n                    30 min\n                </ion-segment-button>\n                <ion-segment-button value="2h">\n                    2h\n                </ion-segment-button>\n                <ion-segment-button value="4h">\n                    4h\n                </ion-segment-button>\n                <ion-segment-button value="24h">\n                    24h\n                </ion-segment-button>\n            </ion-segment>\n        </div>\n\n        <ion-list no-border>\n            <ion-item>\n                My balance\n                <ion-note item-end>\n                    <ion-spinner style="margin-right: 10px" *ngIf="balanceLoading"></ion-spinner>\n                    <span *ngIf="!balanceLoading">{{coinBalance}} {{navParams.get(\'coin\').key.split(\'_\')[1]}}</span>\n                </ion-note>\n            </ion-item>\n            <ion-item>\n                Market value estimation\n                <ion-note item-end>\n                    <ion-spinner style="margin-right: 10px" *ngIf="balanceLoading"></ion-spinner>\n                    <span *ngIf="!balanceLoading">{{coinEstimation}} {{navParams.get(\'coin\').key.split(\'_\')[0]}}</span>\n                </ion-note>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/exchange/exchange.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_utils_service__["a" /* UtilsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], ExchangePage);
    return ExchangePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=exchange.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markets_markets__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alerts_alerts__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__markets_markets__["a" /* MarketsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__alerts_alerts__["a" /* AlertsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Markets" tabIcon="logo-bitcoin"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Account" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Alerts" tabIcon="alarm"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exchange_exchange__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketsPage = (function () {
    function MarketsPage(navCtrl, poloniex, utils, storage) {
        this.navCtrl = navCtrl;
        this.poloniex = poloniex;
        this.utils = utils;
        this.storage = storage;
        this.loading = true;
        this.tab = 'USDT';
        this.market = [];
        this.fullMarket = [];
        this.refreshDelay = 5000;
    }
    MarketsPage.prototype.ngOnInit = function () {
        var _this = this;
        var __this = this;
        this.poloniex.subscribeToNavEvents(this.navCtrl);
        this.poloniex.$refreshState.subscribe(function (event) {
            if (event)
                _this.tickerUpdate.bind(__this).call();
        });
        this.storage.get('refreshDelay').then(function (rd) {
            if (rd) {
                _this.refreshDelay = rd;
            }
            else {
                _this.storage.set('refreshDelay', 5000);
            }
        });
        this.tickerUpdate();
    };
    MarketsPage.prototype.tickerUpdate = function () {
        console.log('UPDATE');
        this.poloniex.api('returnTicker').subscribe(function (ticker) {
            this.fullMarket = this.utils.toArray(ticker);
            this.onMarketChange();
            if (this.poloniex.refreshState) {
                setTimeout(this.tickerUpdate.bind(this), this.refreshDelay);
            }
        }.bind(this));
    };
    MarketsPage.prototype.onMarketChange = function () {
        var _this = this;
        var previousMarket = this.market;
        this.market = this.fullMarket.filter(function (coin) { return coin.key.split('_')[0] === _this.tab; });
        if (this.market.length === previousMarket.length) {
            this.market.forEach(function (coin, idx) {
                var newCoinValue = parseFloat(coin.last);
                var oldCoinValue = parseFloat(previousMarket[idx].last);
                if (newCoinValue !== oldCoinValue) {
                    coin.changeResult = newCoinValue - oldCoinValue;
                }
            });
        }
        this.loading = false;
    };
    MarketsPage.prototype.coinClicked = function (event, coin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exchange_exchange__["a" /* ExchangePage */], {
            coin: coin
        });
    };
    MarketsPage.prototype.toggleRefresh = function (refresher) {
        this.poloniex.toggleRefresh(refresher);
    };
    MarketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-market',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/markets/markets.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <ion-title>\n            Markets\n        </ion-title>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-segment padding [(ngModel)]="tab" (click)="onMarketChange($event)">\n            <ion-segment-button value="BTC">\n                BTC\n            </ion-segment-button>\n            <ion-segment-button value="ETH">\n                ETH\n            </ion-segment-button>\n            <ion-segment-button value="XMR">\n                XMR\n            </ion-segment-button>\n            <ion-segment-button value="USDT">\n                USDT\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="toggleRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-spinner *ngIf="loading"></ion-spinner>\n    <div *ngIf="!loading">\n        <ion-grid>\n            <ion-row>\n                <ion-col col-3>\n                    Coin\n                </ion-col>\n                <ion-col col-5 offset-1>\n                    Last price\n                </ion-col>\n                <ion-col col-3>\n                    Last change\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n        <ion-list no-border>\n            <button ion-item *ngFor="let coin of market" (click)="coinClicked($event, coin)">\n                <ion-row style="font-size: 14px">\n                    <ion-col col-3>\n                        <b>{{coin.key.split(\'_\')[1]}}</b>\n                    </ion-col>\n                    <ion-col col-5 offset-1>\n                        {{coin.last}}\n                    </ion-col>\n                    <ion-col col-3 class="right-text" [style.color]="coin.percentChange < 0 ? \'red\' : \'green\'">\n                        <span *ngIf="coin.percentChange > 0">+</span>{{utils.formatNb(coin.percentChange, 4)}}%\n                    </ion-col>\n                </ion-row>\n            </button>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/markets/markets.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], MarketsPage);
    return MarketsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=markets.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_poloniex_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TradePage = (function () {
    function TradePage(navCtrl, loadingCtrl, navParams, logger, utils, poloniex) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.logger = logger;
        this.utils = utils;
        this.poloniex = poloniex;
        this.loading = true;
        this.pageTitle = '';
        this.market = '';
    }
    TradePage.prototype.ngOnInit = function () {
        this.market = this.navParams.get('key').split('_')[0];
        this.pageTitle = this.navParams.get('key').split('_')[1];
        this.sellPrice = this.navParams.get('coin').highestBid;
        this.buyPrice = this.navParams.get('coin').lowestAsk;
        this.poloniex.api('returnCompleteBalances').subscribe(function (balances) {
            if (balances) {
                this.sellQuantity = balances[this.pageTitle].available;
                this.onSellQuantityChange();
                this.loading = false;
            }
        }.bind(this));
    };
    TradePage.prototype.sell = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */].log("Sell " + this.sellQuantity + " @" + this.sellPrice + ". Total : " + this.sellTotal);
        var loading = this.loadingCtrl.create();
        loading.present();
        this.poloniex.api('sell', [
            this.market,
            this.pageTitle,
            this.sellPrice,
            this.sellQuantity
        ]).subscribe(function (order) {
            _this.logger.alert('Success', "Order #" + order.orderNumber + " placed.", ['OK']);
            loading.dismiss();
        });
    };
    TradePage.prototype.buy = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */].log("Buy " + this.buyQuantity + " @" + this.buyPrice + ". Total : " + this.buyTotal);
        var loading = this.loadingCtrl.create();
        loading.present();
        this.poloniex.api('buy', [
            this.market,
            this.pageTitle,
            this.buyPrice,
            this.buyQuantity
        ]).subscribe(function (order) {
            _this.logger.alert('Success', "Order #" + order.orderNumber + " placed.", ['OK']);
            loading.dismiss();
        });
    };
    TradePage.prototype.onSellClick = function () {
        var message = "You're about to sell " + this.utils.formatNb(this.sellQuantity) + " " + this.pageTitle + " for " + this.utils.formatNb(this.sellTotal) + " " + this.market + ". Are you sure?";
        this.logger.alert('Confirm Exchange', message, [
            'Cancel',
            {
                text: 'OK',
                handler: this.sell.bind(this)
            },
        ]);
    };
    TradePage.prototype.onBuyClick = function () {
        var message = "You're about to buy " + this.utils.formatNb(this.buyQuantity) + " " + this.pageTitle + " for " + this.utils.formatNb(this.buyTotal) + " " + this.market + ". Are you sure?";
        this.logger.alert('Confirm Exchange', message, [
            'Cancel',
            {
                text: 'OK',
                handler: this.buy.bind(this)
            },
        ]);
    };
    TradePage.prototype.onSellPriceChange = function (event) {
        this.sellTotal = this.sellPrice * this.sellQuantity;
    };
    TradePage.prototype.onSellQuantityChange = function (event) {
        this.sellTotal = this.sellPrice * this.sellQuantity;
    };
    TradePage.prototype.onSellTotalChange = function (event) {
        this.sellQuantity = this.sellTotal / this.sellPrice;
    };
    TradePage.prototype.onBuyPriceChange = function (event) {
        this.buyTotal = this.buyPrice * this.buyQuantity;
    };
    TradePage.prototype.onBuyQuantityChange = function (event) {
        this.buyTotal = this.buyPrice * this.buyQuantity;
    };
    TradePage.prototype.onBuyTotalChange = function (event) {
        this.buyQuantity = this.buyTotal / this.buyPrice;
    };
    TradePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-trade',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/trade/trade.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Trade {{pageTitle}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-spinner *ngIf="loading"></ion-spinner>\n    <div *ngIf="!loading">\n        <ion-list no-border>\n            <ion-list-header>\n                Buy {{pageTitle}}\n            </ion-list-header>\n            <ion-item>\n                <ion-label color="primary" fixed>Price</ion-label>\n                <ion-input [(ngModel)]="buyPrice" (ngModelChange)="onBuyPriceChange($event)" type="number"\n                           placeholder="{{market}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" fixed>Quantity</ion-label>\n                <ion-input [(ngModel)]="buyQuantity" (ngModelChange)="onBuyQuantityChange($event)" type="number"\n                           placeholder="{{pageTitle}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" fixed>Total</ion-label>\n                <ion-input [(ngModel)]="buyTotal" (ngModelChange)="onBuyTotalChange($event)" type="number"\n                           placeholder="{{market}}"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button ion-button full outline style="margin-top: -20px" (click)="onBuyClick()"\n                [disabled]="!buyPrice || !buyQuantity || !buyTotal">Buy\n        </button>\n\n        <ion-list no-border style="margin-top: 42px">\n            <ion-list-header>\n                Sell {{pageTitle}}\n            </ion-list-header>\n            <ion-item>\n                <ion-label color="primary" fixed>Price</ion-label>\n                <ion-input [(ngModel)]="sellPrice" (ngModelChange)="onSellPriceChange($event)" type="number"\n                           placeholder="{{market}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" fixed>Quantity</ion-label>\n                <ion-input [(ngModel)]="sellQuantity" (ngModelChange)="onSellQuantityChange($event)" type="number"\n                           placeholder="{{pageTitle}}"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label color="primary" fixed>Total</ion-label>\n                <ion-input [(ngModel)]="sellTotal" (ngModelChange)="onSellTotalChange($event)" type="number"\n                           placeholder="{{market}}"></ion-input>\n            </ion-item>\n        </ion-list>\n        <button no-padding ion-button full outline style="margin-top: -20px" (click)="onSellClick()"\n                [disabled]="!sellPrice || !sellQuantity || !sellTotal">Sell\n        </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/trade/trade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */],
            __WEBPACK_IMPORTED_MODULE_3__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_poloniex_service__["a" /* PoloniexService */]])
    ], TradePage);
    return TradePage;
}());

//# sourceMappingURL=trade.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_utils_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__exchange_exchange__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AccountPage = (function () {
    function AccountPage(navCtrl, poloniex, utils, storage) {
        this.navCtrl = navCtrl;
        this.poloniex = poloniex;
        this.utils = utils;
        this.storage = storage;
        this.loading = true;
        this.tab = 'balances';
        this.refreshDelay = 5000;
        this.balances = [];
        this.usdtBalance = { available: 0 };
        this.holdings = '0';
        this.btcPrice = 0;
        this.trades = [];
        this.orders = [];
    }
    AccountPage.prototype.ngOnInit = function () {
        var _this = this;
        var __this = this;
        this.storage.get('refreshDelay').then(function (rd) {
            if (rd) {
                _this.refreshDelay = rd;
            }
            else {
                _this.storage.set('refreshDelay', 5000);
            }
        });
        this.poloniex.subscribeToNavEvents(this.navCtrl);
        this.poloniex.$refreshState.subscribe(function (event) {
            if (event)
                _this.refresh.bind(__this).call();
        });
        this.refresh.bind(__this).call();
    };
    AccountPage.prototype.computeBalances = function (ticker, balances) {
        var _this = this;
        this.btcPrice = ticker.USDT_BTC.last;
        var filteredBalances = [];
        Object.keys(balances).forEach(function (key) {
            if (parseFloat(balances[key].available) != 0 && key !== 'USDT') {
                filteredBalances.push(balances[key]);
                filteredBalances[filteredBalances.length - 1].coin = key;
            }
        });
        filteredBalances = filteredBalances.map(function (balance) {
            balance.usdtValue = _this.utils.formatNb(parseFloat(balance.btcValue) * _this.btcPrice);
            return balance;
        });
        this.balances = filteredBalances.sort(function (a, b) { return a.usdtValue < b.usdtValue ? -1 : 1; });
        this.usdtBalance = balances.USDT;
        var valueSum = this.balances.length ? (this.balances.length > 1 ? this.balances.reduce(function (a, b) { return parseFloat(a.usdtValue) + parseFloat(b.usdtValue); }) : parseFloat(this.balances[0].usdtValue)) : 0;
        this.holdings = this.utils.formatNb(valueSum + parseFloat(this.usdtBalance.available));
    };
    AccountPage.prototype.computeTrades = function (trades) {
        var _this = this;
        this.trades = [];
        Object.keys(trades).forEach(function (key) {
            _this.trades.push({
                market: key.split('_')[0] + ' <-> ' + key.split('_')[1],
                data: trades[key]
            });
        });
    };
    AccountPage.prototype.computeOrders = function (orders) {
        var _this = this;
        this.orders = [];
        Object.keys(orders).forEach(function (key) {
            if (orders[key].length) {
                _this.orders.push({
                    market: key.split('_')[0] + ' <-> ' + key.split('_')[1],
                    data: orders[key]
                });
            }
        });
    };
    AccountPage.prototype.refresh = function () {
        var _this = this;
        var __this = this;
        try {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].forkJoin([
                this.poloniex.api('returnTicker'),
                this.poloniex.api('returnCompleteBalances'),
                this.poloniex.api('returnTradeHistory', ['all', null]),
                this.poloniex.api('returnOpenOrders', ['all', null]),
            ]).subscribe(function (data) {
                data.forEach(function (req) {
                    if (!_this.poloniex.refreshState && req === '__nonce_failure') {
                        _this.refresh.bind(__this).call();
                        return;
                    }
                });
                try {
                    _this.computeBalances(data[0], data[1]);
                    _this.computeTrades(data[2]);
                    _this.computeOrders(data[3]);
                    _this.loading = false;
                }
                catch (e) {
                    _this.loading = false;
                    __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */].error(e);
                }
                if (_this.poloniex.refreshState) {
                    setTimeout(_this.refresh.bind(__this), _this.refreshDelay);
                }
            });
        }
        catch (e) {
            __WEBPACK_IMPORTED_MODULE_5__services_logger_service__["a" /* Logger */].error(e);
        }
    };
    AccountPage.prototype.onCoinClick = function (balance) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__exchange_exchange__["a" /* ExchangePage */], {
            coin: {
                key: 'USDT_' + balance.coin
            }
        });
    };
    AccountPage.prototype.onSettingsClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    AccountPage.prototype.toggleRefresh = function (refresher) {
        this.poloniex.toggleRefresh(refresher);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/account/account.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <ion-title>\n            Account\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onSettingsClick($event)">\n                <ion-icon ios="ios-cog-outline" md="md-cog"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="tab">\n            <ion-segment-button value="balances">\n                Balances\n            </ion-segment-button>\n            <ion-segment-button value="trades">\n                Trades\n            </ion-segment-button>\n            <ion-segment-button value="offers">\n                Orders\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-refresher (ionRefresh)="toggleRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <ion-spinner *ngIf="loading"></ion-spinner>\n    <div *ngIf="!loading">\n        <div [ngSwitch]="tab">\n            <div *ngSwitchCase="\'balances\'">\n                <ion-list no-border>\n                    <ion-item>\n                        <b>USDT</b>\n                        <ion-note item-end>\n                            ${{usdtBalance?.available}}\n                        </ion-note>\n                    </ion-item>\n                    <ion-item>\n                        <b>Estimated value of holdings</b>\n                        <ion-note item-end>\n                            ${{holdings}}\n                        </ion-note>\n                    </ion-item>\n                </ion-list>\n\n                <ion-grid *ngIf="balances?.length">\n                    <ion-row>\n                        <ion-col col-3>\n                            Coin\n                        </ion-col>\n                        <ion-col col-5>\n                            Available\n                        </ion-col>\n                        <ion-col col-4 class="right-text">\n                            US$ Estimation\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n                <ion-list no-border *ngIf="balances?.length">\n                    <button ion-item *ngFor="let balance of balances" (click)="onCoinClick(balance)">\n                        <ion-row style="font-size: 14px;">\n                            <ion-col col-2>\n                                <b>{{balance.coin}}</b>\n                            </ion-col>\n                            <ion-col col-4 offset-1>\n                                {{balance.available}}\n                            </ion-col>\n                            <ion-col col-3 offset-2 style="text-align: right">\n                                ${{balance.usdtValue}}\n                            </ion-col>\n                        </ion-row>\n                    </button>\n                </ion-list>\n\n                <div class="center" *ngIf="!balances?.length">\n                    You don\'t have any crypto currencies.\n                </div>\n            </div>\n\n            <div *ngSwitchCase="\'trades\'">\n                <ion-list no-border *ngFor="let market of trades">\n                    <ion-list-header>\n                        {{market.market}}\n                    </ion-list-header>\n                    <ion-item *ngFor="let trade of market.data">\n                        <ion-row style="font-size: 14px;">\n                            <ion-col col-2>\n                                <span *ngIf="trade.type === \'buy\'" style="color: red">Buy</span>\n                                <span *ngIf="trade.type === \'sell\'" style="color: green">Sell</span>\n                            </ion-col>\n                            <ion-col col-4 offset-1>\n                                {{trade.amount}}\n                            </ion-col>\n                            <ion-col col-3>\n                                @{{utils.formatNb(trade.rate)}} {{market.market.split(\' \')[0]}}\n                            </ion-col>\n                        </ion-row>\n                    </ion-item>\n                </ion-list>\n            </div>\n\n            <div *ngSwitchCase="\'offers\'">\n                <div padding class="center" *ngIf="!orders?.length">\n                    You don\'t have any open orders.\n                </div>\n\n                <div *ngIf="orders?.length">\n                    <ion-list no-border *ngFor="let market of orders">\n                        <ion-list-header>\n                            {{market.market}}\n                        </ion-list-header>\n                        <ion-item *ngFor="let trade of market.data">\n                            <ion-row style="font-size: 14px;">\n                                <ion-col col-2>\n                                    <span *ngIf="trade.type === \'buy\'" style="color: red">Buy</span>\n                                    <span *ngIf="trade.type === \'sell\'" style="color: green">Sell</span>\n                                </ion-col>\n                                <ion-col col-4 offset-1>\n                                    {{trade.amount}}\n                                </ion-col>\n                                <ion-col col-3>\n                                    @{{trade.rate}}\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__["a" /* PoloniexService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_poloniex_service__["a" /* PoloniexService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_utils_service__["a" /* UtilsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], AccountPage);
    return AccountPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_logger_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertsPage = (function () {
    function AlertsPage(navCtrl, logger) {
        this.navCtrl = navCtrl;
        this.logger = logger;
    }
    AlertsPage.prototype.onAdd = function () {
        this.logger.alert('Coming Soon', 'This feature will come in a future update!', ['OK']);
    };
    AlertsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alerts',template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/alerts/alerts.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Alerts\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="onAdd($event)">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div padding class="center">\n        You don\'t have any alerts.\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/pages/alerts/alerts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_logger_service__["a" /* Logger */]])
    ], AlertsPage);
    return AlertsPage;
}());

//# sourceMappingURL=alerts.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(431);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logger; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Logger = (function () {
    function Logger(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.alertIsOpen = false;
    }
    Logger_1 = Logger;
    Logger.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    };
    Logger.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < arguments.length; i++) {
            console.warn(arguments[i]);
        }
    };
    Logger.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var i = 0; i < arguments.length; i++) {
            console.error(arguments[i]);
        }
    };
    Logger.prototype.alert = function (title, message, buttons) {
        var _this = this;
        if (!this.alertIsOpen) {
            this.alertIsOpen = true;
            this.alertCtrl.create({
                title: title,
                subTitle: message,
                enableBackdropDismiss: false,
                buttons: buttons.map(function (button) {
                    if (typeof button === 'object') {
                        var baseHandler_1 = button.handler;
                        button.handler = function () {
                            this.alertIsOpen = false;
                            baseHandler_1();
                        }.bind(_this);
                        return button;
                    }
                    else {
                        return {
                            text: button,
                            handler: function () {
                                this.alertIsOpen = false;
                            }.bind(_this)
                        };
                    }
                })
            }).present();
        }
        else {
            Logger_1.warn('Alert was blocked: ', title, message);
        }
    };
    Logger.prototype.toast = function (message, buttonOrDuration) {
        var toast;
        if (typeof buttonOrDuration === 'string') {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                showCloseButton: true,
                closeButtonText: buttonOrDuration
            });
        }
        else if (typeof buttonOrDuration === 'number') {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                duration: buttonOrDuration
            });
        }
        else {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                duration: 3000
            });
        }
        toast.present();
    };
    Logger = Logger_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]) === "function" && _b || Object])
    ], Logger);
    return Logger;
    var Logger_1, _a, _b;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_alerts_alerts__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_markets_markets__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_poloniex_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_utils_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_exchange_exchange__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_trade_trade__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_markets_markets__["a" /* MarketsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trade_trade__["a" /* TradePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* App */],
                __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_alerts_alerts__["a" /* AlertsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_markets_markets__["a" /* MarketsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_exchange_exchange__["a" /* ExchangePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_trade_trade__["a" /* TradePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__services_poloniex_service__["a" /* PoloniexService */],
                __WEBPACK_IMPORTED_MODULE_12__services_logger_service__["a" /* Logger */],
                __WEBPACK_IMPORTED_MODULE_13__services_utils_service__["a" /* UtilsService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var App = (function () {
    function App(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    App = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/arthur/Documents/Dev/poloniex-client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/arthur/Documents/Dev/poloniex-client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], App);
    return App;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 291,
	"./af.js": 291,
	"./ar": 292,
	"./ar-dz": 293,
	"./ar-dz.js": 293,
	"./ar-kw": 294,
	"./ar-kw.js": 294,
	"./ar-ly": 295,
	"./ar-ly.js": 295,
	"./ar-ma": 296,
	"./ar-ma.js": 296,
	"./ar-sa": 297,
	"./ar-sa.js": 297,
	"./ar-tn": 298,
	"./ar-tn.js": 298,
	"./ar.js": 292,
	"./az": 299,
	"./az.js": 299,
	"./be": 300,
	"./be.js": 300,
	"./bg": 301,
	"./bg.js": 301,
	"./bn": 302,
	"./bn.js": 302,
	"./bo": 303,
	"./bo.js": 303,
	"./br": 304,
	"./br.js": 304,
	"./bs": 305,
	"./bs.js": 305,
	"./ca": 306,
	"./ca.js": 306,
	"./cs": 307,
	"./cs.js": 307,
	"./cv": 308,
	"./cv.js": 308,
	"./cy": 309,
	"./cy.js": 309,
	"./da": 310,
	"./da.js": 310,
	"./de": 311,
	"./de-at": 312,
	"./de-at.js": 312,
	"./de-ch": 313,
	"./de-ch.js": 313,
	"./de.js": 311,
	"./dv": 314,
	"./dv.js": 314,
	"./el": 315,
	"./el.js": 315,
	"./en-au": 316,
	"./en-au.js": 316,
	"./en-ca": 317,
	"./en-ca.js": 317,
	"./en-gb": 318,
	"./en-gb.js": 318,
	"./en-ie": 319,
	"./en-ie.js": 319,
	"./en-nz": 320,
	"./en-nz.js": 320,
	"./eo": 321,
	"./eo.js": 321,
	"./es": 322,
	"./es-do": 323,
	"./es-do.js": 323,
	"./es.js": 322,
	"./et": 324,
	"./et.js": 324,
	"./eu": 325,
	"./eu.js": 325,
	"./fa": 326,
	"./fa.js": 326,
	"./fi": 327,
	"./fi.js": 327,
	"./fo": 328,
	"./fo.js": 328,
	"./fr": 329,
	"./fr-ca": 330,
	"./fr-ca.js": 330,
	"./fr-ch": 331,
	"./fr-ch.js": 331,
	"./fr.js": 329,
	"./fy": 332,
	"./fy.js": 332,
	"./gd": 333,
	"./gd.js": 333,
	"./gl": 334,
	"./gl.js": 334,
	"./gom-latn": 335,
	"./gom-latn.js": 335,
	"./he": 336,
	"./he.js": 336,
	"./hi": 337,
	"./hi.js": 337,
	"./hr": 338,
	"./hr.js": 338,
	"./hu": 339,
	"./hu.js": 339,
	"./hy-am": 340,
	"./hy-am.js": 340,
	"./id": 341,
	"./id.js": 341,
	"./is": 342,
	"./is.js": 342,
	"./it": 343,
	"./it.js": 343,
	"./ja": 344,
	"./ja.js": 344,
	"./jv": 345,
	"./jv.js": 345,
	"./ka": 346,
	"./ka.js": 346,
	"./kk": 347,
	"./kk.js": 347,
	"./km": 348,
	"./km.js": 348,
	"./kn": 349,
	"./kn.js": 349,
	"./ko": 350,
	"./ko.js": 350,
	"./ky": 351,
	"./ky.js": 351,
	"./lb": 352,
	"./lb.js": 352,
	"./lo": 353,
	"./lo.js": 353,
	"./lt": 354,
	"./lt.js": 354,
	"./lv": 355,
	"./lv.js": 355,
	"./me": 356,
	"./me.js": 356,
	"./mi": 357,
	"./mi.js": 357,
	"./mk": 358,
	"./mk.js": 358,
	"./ml": 359,
	"./ml.js": 359,
	"./mr": 360,
	"./mr.js": 360,
	"./ms": 361,
	"./ms-my": 362,
	"./ms-my.js": 362,
	"./ms.js": 361,
	"./my": 363,
	"./my.js": 363,
	"./nb": 364,
	"./nb.js": 364,
	"./ne": 365,
	"./ne.js": 365,
	"./nl": 366,
	"./nl-be": 367,
	"./nl-be.js": 367,
	"./nl.js": 366,
	"./nn": 368,
	"./nn.js": 368,
	"./pa-in": 369,
	"./pa-in.js": 369,
	"./pl": 370,
	"./pl.js": 370,
	"./pt": 371,
	"./pt-br": 372,
	"./pt-br.js": 372,
	"./pt.js": 371,
	"./ro": 373,
	"./ro.js": 373,
	"./ru": 374,
	"./ru.js": 374,
	"./sd": 375,
	"./sd.js": 375,
	"./se": 376,
	"./se.js": 376,
	"./si": 377,
	"./si.js": 377,
	"./sk": 378,
	"./sk.js": 378,
	"./sl": 379,
	"./sl.js": 379,
	"./sq": 380,
	"./sq.js": 380,
	"./sr": 381,
	"./sr-cyrl": 382,
	"./sr-cyrl.js": 382,
	"./sr.js": 381,
	"./ss": 383,
	"./ss.js": 383,
	"./sv": 384,
	"./sv.js": 384,
	"./sw": 385,
	"./sw.js": 385,
	"./ta": 386,
	"./ta.js": 386,
	"./te": 387,
	"./te.js": 387,
	"./tet": 388,
	"./tet.js": 388,
	"./th": 389,
	"./th.js": 389,
	"./tl-ph": 390,
	"./tl-ph.js": 390,
	"./tlh": 391,
	"./tlh.js": 391,
	"./tr": 392,
	"./tr.js": 392,
	"./tzl": 393,
	"./tzl.js": 393,
	"./tzm": 394,
	"./tzm-latn": 395,
	"./tzm-latn.js": 395,
	"./tzm.js": 394,
	"./uk": 396,
	"./uk.js": 396,
	"./ur": 397,
	"./ur.js": 397,
	"./uz": 398,
	"./uz-latn": 399,
	"./uz-latn.js": 399,
	"./uz.js": 398,
	"./vi": 400,
	"./vi.js": 400,
	"./x-pseudo": 401,
	"./x-pseudo.js": 401,
	"./yo": 402,
	"./yo.js": 402,
	"./zh-cn": 403,
	"./zh-cn.js": 403,
	"./zh-hk": 404,
	"./zh-hk.js": 404,
	"./zh-tw": 405,
	"./zh-tw.js": 405
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 620;

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoloniexService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobahn__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_autobahn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_autobahn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PoloniexService = (function () {
    // private apiKey: string = 'I1QWXF64-KCASDOVD-B20N6DOX-CXRO9A4H';
    // private apiSecret: string = '5ee550091c3493dac780202dad3e0cbc02c761eb4ad7c64295bf330a6f2d66fb279456151dd095745fa2dea00c16d69df808932bb89651f6b1de4e2666c24a29a';
    // private apiUrl = 'http://localhost:4210';
    function PoloniexService(logger, http, storage) {
        this.logger = logger;
        this.http = http;
        this.storage = storage;
        this.refreshState = true;
        this.$refreshState = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.wsUrl = 'wss://api.poloniex.com';
        this.apiUrl = 'https://api.arthurchaloin.com/poloniex';
        this.nonceErrorCount = 0;
        this.$openSettings = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.errorHandler = function (data) {
            var _this = this;
            if (data.error) {
                __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* Logger */].error(data.error);
                if (data.error.substr(0, 5) === 'Nonce') {
                    this.nonceErrorCount += 1;
                    if (this.nonceErrorCount >= 3) {
                        this.logger.alert('Request Failure', 'Nonce isn\'t synchronized with the server anymore. Please try again in a few seconds. If this errors occurs again, consider refreshing your API key.', ['OK']);
                        this.nonceErrorCount = 0;
                    }
                    clearTimeout(this.nonceErrorTimer);
                    setTimeout(function () { return _this.nonceErrorCount = 0; }, 1000);
                    return '__nonce_failure';
                }
                else if (data.error.includes('Poloniex: Error. API key and secret required') || data.error.includes('Invalid API key/secret pair.')) {
                    this.logger.alert('Missing/Invalid API Key', 'Your API Key/API Secret pair is neither missing or invalid. Would you like to update them now?', [
                        'Later',
                        {
                            text: 'Update',
                            handler: function () {
                                _this.$openSettings.emit();
                            }
                        }
                    ]);
                    return null;
                }
                else {
                    this.logger.alert('Error', data.error || 'Please try refreshing.', ['OK']);
                    return null;
                }
            }
            return data;
        }.bind(this);
    }
    PoloniexService.prototype.updateKeys = function () {
        var _this = this;
        this.storage.get('apiKey').then(function (key) { return _this.apiKey = key; });
        this.storage.get('apiSecret').then(function (key) { return _this.apiSecret = key; });
    };
    PoloniexService.prototype.api = function (command, params) {
        this.updateKeys();
        return this.http.post(this.apiUrl, {
            apiKey: this.apiKey,
            apiSecret: this.apiSecret,
            command: command,
            params: params
        }).map(this.errorHandler);
    };
    PoloniexService.prototype.stream = function (callback) {
        var _this = this;
        var connection = new __WEBPACK_IMPORTED_MODULE_5_autobahn__["Connection"]({
            url: this.wsUrl,
            realm: 'realm1'
        });
        connection.onopen = function (session) {
            console.log('Connection is up.');
            session.subscribe('ticker', callback);
        };
        connection.onclose = function () {
            console.log('Connection is down.');
            _this.logger.alert('Web Socket Disconnected', 'The WS stream has been closed. This means that marketplace is no longer real-time updated.', ['OK']);
        };
        connection.open();
    };
    PoloniexService.prototype.subscribeToNavEvents = function (navCtrl) {
        this.$openSettings.subscribe(function (event) { return navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]); });
    };
    PoloniexService.prototype.toggleRefresh = function (refresher) {
        refresher.complete();
        this.refreshState = !this.refreshState;
        if (this.refreshState) {
            this.$refreshState.emit(true);
            this.logger.toast('Live refresh enabled', 1000);
        }
        else {
            this.logger.toast('Live refresh disabled', 1000);
        }
    };
    PoloniexService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* Logger */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__logger_service__["a" /* Logger */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _c || Object])
    ], PoloniexService);
    return PoloniexService;
    var _a, _b, _c;
}());

//# sourceMappingURL=poloniex.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.toArray = function (obj) {
        var arr = [];
        Object.keys(obj).forEach(function (key) {
            arr.push(obj[key]);
            arr[arr.length - 1].key = key;
        });
        return arr;
    };
    UtilsService.prototype.formatNb = function (nb, pres) {
        var floatPrecision = pres || 4;
        if (typeof nb === 'string') {
            nb = parseFloat(nb);
        }
        if (typeof nb !== 'number') {
            return '0';
        }
        return nb.toFixed(floatPrecision);
    };
    UtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilsService);
    return UtilsService;
}());

//# sourceMappingURL=utils.service.js.map

/***/ })

},[409]);
//# sourceMappingURL=main.js.map