import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {App} from './app.component';

import {AlertsPage} from '../pages/alerts/alerts';
import {AccountPage} from '../pages/account/account';
import {MarketsPage} from '../pages/markets/markets';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import Highcharts from 'highcharts';
// import {ChartModule} from 'angular2-highcharts';
import {PoloniexService} from '../services/poloniex.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        App,
        AccountPage,
        AlertsPage,
        MarketsPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(App),
        // ChartModule.forRoot(Highcharts)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App,
        AccountPage,
        AlertsPage,
        MarketsPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PoloniexService
    ]
})
export class AppModule {
}
