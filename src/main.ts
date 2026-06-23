import {
  provideClientHydration,
  BrowserModule,
  bootstrapApplication,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, ALL_EFFECTS } from './app/store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode, importProvidersFrom } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      StoreModule.forRoot(ROOT_REDUCERS),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
      EffectsModule.forRoot(ALL_EFFECTS),
    ),
    provideClientHydration(),
  ],
}).catch(err => console.error(err));
