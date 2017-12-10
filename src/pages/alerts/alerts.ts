import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Logger} from '../../services/logger.service';

@Component({
    selector: 'page-alerts',
    templateUrl: 'alerts.html'
})
export class AlertsPage {

    constructor(private navCtrl: NavController,
                private logger: Logger) {
    }

    public onAdd(): void {
        this.logger.alert('Coming Soon', 'This feature will come in a future update!', ['OK']);
    }
}
