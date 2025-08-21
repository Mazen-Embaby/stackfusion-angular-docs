import { Component } from '@angular/core';
import { Tooltip } from '@sf/tooltip';

@Component({
  selector: 'app-tooltip-advanced-style',
  imports: [Tooltip],
  templateUrl: './tooltip-advanced-style.component.html',
  styles: ``,
})
export class TooltipAdvancedStyleComponent {
  dynamicTooltipText = 'Initial tooltip text';

  toggleTooltipText(): void {
    this.dynamicTooltipText =
      this.dynamicTooltipText === 'Initial tooltip text' ? 'Changed tooltip text!' : 'Initial tooltip text';
  }
}
