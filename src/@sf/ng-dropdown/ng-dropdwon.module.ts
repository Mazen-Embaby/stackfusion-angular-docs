import { NgModule } from '@angular/core';
import { NgMenuDirective } from './ng-menu.directive';
import { NgMenuItemDirective } from './ng-menu-item.directive';
import { NgDropdownComponent } from './ng-dropdwon.component';

@NgModule({
  imports: [NgMenuDirective, NgMenuItemDirective, NgDropdownComponent],
  exports: [NgMenuDirective, NgMenuItemDirective, NgDropdownComponent],
})
export class NgDropDwonModule {}
