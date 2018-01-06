import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShakingPage } from './shaking';

@NgModule({
  declarations: [
    ShakingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShakingPage),
  ],
})
export class ShakingPageModule {}
