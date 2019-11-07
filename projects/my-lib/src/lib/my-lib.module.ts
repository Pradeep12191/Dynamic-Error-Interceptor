import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './services/error-interceptor.service';

@NgModule({
  declarations: [MyLibComponent],
  imports: [
    MatDialogModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
