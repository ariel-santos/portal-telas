import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SiteRouting { }
