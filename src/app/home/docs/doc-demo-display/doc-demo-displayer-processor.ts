import type { Injector } from '@angular/core';
import { Renderer2 } from '@angular/core';
import type { NgDocPageProcessor } from '@ng-doc/app';
import { DocDemoComponent } from './doc-demo-displayer.component';

export const docDemoDisplayerProcessor: NgDocPageProcessor<DocDemoComponent> = {
  component: DocDemoComponent,
  selector: 'ng-doc-demo',
  nodeToReplace: (element: Element, injector: Injector) => {
    // Get the renderer from the injector
    const renderer: Renderer2 = injector.get(Renderer2);
    // Create an anchor element to insert the `FlowbiteDocDemoDisplayerComponent` in the correct place.
    const anchor: Element = renderer.createElement('div');

    renderer.setStyle(element, 'margin', '0px');

    // Insert the anchor before the table and return it
    return element.parentNode?.insertBefore(anchor, element) ?? element;
  },

  extractOptions: (element: Element) => ({
    content: [[element]],
  }),
};
