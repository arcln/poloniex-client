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

import {PoloniexService} from '../services/poloniex.service';
import {HttpClientModule} from '@angular/common/http';
import {Logger} from '../services/logger.service';
import {UtilsService} from '../services/utils.service';
import {ExchangePage} from '../pages/exchange/exchange';
import {TradePage} from '../pages/trade/trade';
import {IonicStorageModule} from '@ionic/storage';
import {SettingsPage} from '../pages/settings/settings';

@NgModule({
    declarations: [
        App,
        AccountPage,
        AlertsPage,
        MarketsPage,
        ExchangePage,
        TradePage,
        SettingsPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(App),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        App,
        AccountPage,
        AlertsPage,
        MarketsPage,
        ExchangePage,
        TabsPage,
        SettingsPage,
        TradePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        PoloniexService,
        Logger,
        UtilsService
    ]
})
export class AppModule {
}
