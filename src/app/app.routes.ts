import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/getting-started/introduction', pathMatch: 'full' },
  // {path: 'not-found', component: PageNotFoundComponent},
  // Wild Card Route for 404 request - make sure this is always the last element of the routes Array
  // { path: '**', pathMatch: 'full', redirectTo: '/home' },
];
