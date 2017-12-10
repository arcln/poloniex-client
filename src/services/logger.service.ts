import {Injectable} from '@angular/core';
import {AlertController, Toast, ToastController} from 'ionic-angular';

@Injectable()
export class Logger {

    constructor(private alertCtrl: AlertController,
                private toastCtrl: ToastController) {
    }

    public static log(...args: any[]) {
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    public static warn(...args: any[]) {
        for (let i = 0; i < arguments.length; i++) {
            console.warn(arguments[i]);
        }
    }

    public static error(...args: any[]) {
        for (let i = 0; i < arguments.length; i++) {
            console.error(arguments[i]);
        }
    }

    public alert(title: string, message: string, buttons: Array<any>) {
        this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: buttons
        }).present();
    }

    public toast(message: string, buttonOrDuration: any) {
        let toast: Toast;

        if (typeof buttonOrDuration === 'string') {
            toast = this.toastCtrl.create({
                message: message,
                showCloseButton: true,
                closeButtonText: buttonOrDuration
            });
        } else if (typeof buttonOrDuration === 'number') {
            toast = this.toastCtrl.create({
                message: message,
                duration: buttonOrDuration
            });
        } else {
            toast = this.toastCtrl.create({
                message: message,
                duration: 3000
            });
        }

        toast.present();
    }
}