import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './main/home/home-page.component';

import { HomeRoutingModule } from './home.routing';
import { ElementsLayoutImagesModule } from '@elewa-website/elements/layout/images';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ElementsLayoutImagesModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class FeaturesPagesHomeModule {}
