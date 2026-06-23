import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ServerModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
