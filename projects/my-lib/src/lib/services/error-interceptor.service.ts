import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CONFIG_TOKEN } from './config.token';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private dialog: MatDialog,
        @Inject(CONFIG_TOKEN) private config,
    ) {

    }
    intercept(req, next) {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            if (err.status === 404 || err.status === 500 || err.status === 400) {
                this.dialog.open(this.config.component, { data: this.config.errors.find(e => e.code === err.status).data })
            }
            return throwError(err);
        }));
    }
}