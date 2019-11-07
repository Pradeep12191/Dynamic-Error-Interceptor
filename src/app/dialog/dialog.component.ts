import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class ErrorDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) private data
    ) {
        // console.log('data', data);
    }
}