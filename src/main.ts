import {
  provideClientHydration,
  BrowserModule,
  bootstrapApplication,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { ROOT_REDUCERS, ALL_EFFECTS } from './app/store/app.state';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule, AppRoutingModule), provideClientHydration()],
}).catch(err => console.error(err));
