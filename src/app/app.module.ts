import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideErrorTailorConfig } from '@ngneat/error-tailor/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ErrorTailorModule } from "@ngneat/error-tailor";
import { ControlErrorComponent } from './pages/login/components/control-error/control-error.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    provideErrorTailorConfig({
      errors: {
        useValue: {
          email: 'Enter an email address',
        },
      },
      controlErrorComponent: ControlErrorComponent,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
