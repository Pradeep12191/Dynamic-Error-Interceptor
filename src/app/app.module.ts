import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule, CONFIG_TOKEN } from 'my-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';

const errors = [
  { code: 404, data: { message: 'Service Not Found' } },
  { code: 500, data: { message: 'Internal Server Error' } },
  { code: 400, data: { message: 'Bad request' } },
]

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MyLibModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: CONFIG_TOKEN, useValue: {
        component: ErrorDialogComponent,
        errors
      }
    }
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
