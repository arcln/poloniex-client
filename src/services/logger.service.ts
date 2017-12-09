import {Injectable} from '@angular/core';

@Injectable()
export class Logger {

    public static log(...args: any[]) {
        for (let i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    public static error(...args: any[]) {
        for (let i = 0; i < arguments.length; i++) {
            console.error(arguments[i]);
        }
    }
}