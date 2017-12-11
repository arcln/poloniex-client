import {Injectable} from '@angular/core';
import {AlertController, Toast, ToastController} from 'ionic-angular';

@Injectable()
export class UtilsService {

    public toArray(obj: object): Array<any> {
        const arr: Array<any> = [];

        Object.keys(obj).forEach(key => {
            arr.push(obj[key]);
            arr[arr.length - 1].key = key;
        });

        return arr;
    }

    public formatNb(nb: number, pres?: number): string {
        const floatPrecision = pres || 4;

        if (typeof nb === 'string') {
            nb = parseFloat(nb);
        }

        if (typeof nb !== 'number') {
            return '0';
        }

        return nb.toFixed(floatPrecision);
    }

}