import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NG_DOC_ROUTING } from '../../../../ng-doc/stackfusion-angular-docs';
import { DocsPage } from './docs-page';

const routes: Routes = [
  // { path: '', redirectTo: '/getting-started/introduction', pathMatch: 'full' },

  {
    path: '',
    component: DocsPage,
    children: NG_DOC_ROUTING,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class DocsModule {}
