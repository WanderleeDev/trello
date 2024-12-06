import { NgModule, isDevMode } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { provideErrorTailorConfig } from '@ngneat/error-tailor/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
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
=======
import { StoreModule } from '@ngrx/store';
import { ALL_EFFECTS, ROOT_REDUCERS } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(ALL_EFFECTS),
  ],
  providers: [provideClientHydration(), CookieService],
>>>>>>> b488a22 (feat board)
  bootstrap: [AppComponent],
})
export class AppModule {}
