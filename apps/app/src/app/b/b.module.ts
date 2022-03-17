import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import { BComponent } from './b/b.component';

import de from "./assets/i18n/de.json";
import en from "./assets/i18n/en.json";
export const loader = {
  de: () => Promise.resolve(de),
  en: () => Promise.resolve(en)
};

@NgModule({
  declarations: [
    BComponent
  ],
  exports: [
    BComponent
  ],
  imports: [
    CommonModule, TranslocoModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: "b",
        loader
      }
    }
  ]
})
export class BModule { }
