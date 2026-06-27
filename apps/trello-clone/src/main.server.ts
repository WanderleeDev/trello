import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

const mergedConfig = mergeApplicationConfig(appConfig, serverConfig);

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(AppComponent, mergedConfig, context);
}
