import { Component } from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'transloco-test-issue-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(private transloco: TranslocoService) {
  }

  translateViaService(key: string): string {
    return this.transloco.translate(key);
  }
}
