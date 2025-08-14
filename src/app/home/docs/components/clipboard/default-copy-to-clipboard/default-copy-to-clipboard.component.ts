import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-default-copy-to-clipboard',
  imports: [ClipboardModule],
  templateUrl: './default-copy-to-clipboard.component.html',
  styles: ``,
})
export class DefaultCopyToClipboardComponent {
  textData = 'npm install Stackfusion';
}
