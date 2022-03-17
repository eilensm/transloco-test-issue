import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BModule} from "./b/b.module";
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, TranslocoRootModule, BModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
