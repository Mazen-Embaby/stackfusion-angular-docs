import { Component, signal } from '@angular/core';
import { ToggleDarkModeComponent } from '../../layout/toggle-dark-mode/toggle-dark-mode.component';

@Component({
  selector: 'app-doc-demo-displayer',
  imports: [ToggleDarkModeComponent],
  templateUrl: './doc-demo-displayer.component.html',
  styles: `
    ng-doc-demo {
      margin: 0px;
    }
  `,
})
export class DocDemoComponent {
  public themeMode = signal<string>('light');
}
