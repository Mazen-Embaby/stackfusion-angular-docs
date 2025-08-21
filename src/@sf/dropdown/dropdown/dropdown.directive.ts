import { injectFlowbiteDropdownConfig } from '../config/dropdown-config';
import { flowbiteDropdownState, provideFlowbiteDropdownState } from './dropdown-state';

import { computed, Directive, input } from '@angular/core';
import { NgpMenu } from 'ng-primitives/menu';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../utils/merge-theme';
import { colorToTheme } from '../../utils/color-to-theme';

/**
 * Dropdown trigger directive that provides dropdown functionality.
 *
 * This directive should be applied to an element that will trigger the dropdown.
 * It integrates with ng-primitives menu system for accessibility and behavior.
 *
 * @example
 * ```html
 * <button sfDropDownBtn [color]="'primary'">
 *   Dropdown
 * </button>
 * <div sfDropDownContent>
 *   <a sfDropDownItem>Item 1</a>
 *   <a sfDropDownItem>Item 2</a>
 * </div>
 * ```
 */
@Directive({
  selector: `div[sfDropDownBtn]`,
  exportAs: 'sfDropDownBtn',
  hostDirectives: [
    {
      directive: NgpMenu,
      inputs: [],
      outputs: [],
    },
  ],
  providers: [provideFlowbiteDropdownState()],
  host: {
    '[class]': `theme().host.root`,
  },
})
export class Dropdown {
  /** Configuration for the dropdown. */
  readonly config = injectFlowbiteDropdownConfig();

  /**
   * The color theme for the dropdown.
   *
   * @see {@link injectFlowbiteDropdownConfig}
   */
  readonly color = input(this.config.color);

  /**
   * Custom theme configuration for the dropdown.
   *
   * @see {@link injectFlowbiteDropdownConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  /**
   * Computed theme based on configuration and inputs.
   * Merges base theme with custom theme and applies color transformations.
   */
  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          colorToTheme(mergedTheme.host.color, this.state.color()),
        ),
      },
    };
  });

  /**
   * Internal state management for the dropdown.
   *
   * @internal
   */
  readonly state = flowbiteDropdownState<Dropdown>(this);
}
