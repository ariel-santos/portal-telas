import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SiteRouting } from './site.routing';
import { SiteComponent } from './site.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SiteComponent
  ],
  imports: [
    CommonModule,
    SiteRouting
  ]
})
export class SiteModule { }

