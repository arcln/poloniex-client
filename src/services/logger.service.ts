import {Injectable} from '@angular/core';
import {AlertController, Toast, ToastController} from 'ionic-angular';

@Injectable()
export class Logger {

    private alertIsOpen: boolean = false;

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
        if (!this.alertIsOpen) {
            this.alertIsOpen = true;
            this.alertCtrl.create({
                title: title,
                subTitle: message,
                enableBackdropDismiss: false,
                buttons: buttons.map(button => {
                    if (typeof button === 'object') {
                        const baseHandler = button.handler;
                        button.handler = function() {
                            this.alertIsOpen = false;
                            baseHandler();
                        }.bind(this);
                        return button;
                    } else {
                        return {
                            text: button,
                            handler: function() {
                                this.alertIsOpen = false;
                            }.bind(this)
                        };
                    }
                })
            }).present();
        } else {
            Logger.warn('Alert was blocked: ', title, message);
        }
    }

    public toast(message: string, buttonOrDuration?: any) {
        let toast: Toast;

        if (typeof buttonOrDuration === 'string') {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                showCloseButton: true,
                closeButtonText: buttonOrDuration
            });
        } else if (typeof buttonOrDuration === 'number') {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                duration: buttonOrDuration
            });
        } else {
            toast = this.toastCtrl.create({
                message: message,
                position: 'top',
                duration: 3000
            });
        }

        toast.present();
    }
}