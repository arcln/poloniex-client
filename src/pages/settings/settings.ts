import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Logger} from '../../services/logger.service';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html'
})
export class SettingsPage implements OnInit {

    public apiKey: string;
    public apiSecret: string;
    public refreshDelay: number;

    constructor(private navCtrl: NavController,
                private logger: Logger,
                private storage: Storage) {
    }

    public ngOnInit(): void {
        this.storage.get('apiKey').then(apiKey => this.apiKey = apiKey);
        this.storage.get('apiSecret').then(apiSecret => this.apiSecret = apiSecret);
        this.storage.get('refreshDelay').then(refreshDelay => this.refreshDelay = refreshDelay);
    }

    public onApiKeyChange(): void {
        this.storage.set('apiKey', this.apiKey);
    }

    public onApiSecretChange(): void {
        this.storage.set('apiSecret', this.apiSecret);
    }

    public onRefreshDelayChange(): void {
        this.storage.set('refreshDelay', this.refreshDelay);
    }
}
