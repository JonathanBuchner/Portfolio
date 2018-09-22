import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './data/ROUTES';

export const routes: Routes = ROUTES;

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
