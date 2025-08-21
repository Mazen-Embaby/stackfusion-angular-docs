import { Component } from '@angular/core';
import { Tooltip } from '@sf/tooltip';

@Component({
  selector: 'app-placement',
  imports: [Tooltip],
  templateUrl: './placement.component.html',
  styles: ``,
})
export class PlacementComponent {
  dynamicTooltipText = 'Initial tooltip text';

  toggleTooltipText(): void {
    this.dynamicTooltipText =
      this.dynamicTooltipText === 'Initial tooltip text' ? 'Changed tooltip text!' : 'Initial tooltip text';
  }
}
