import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastingPage } from './toasting';

@NgModule({
  declarations: [
    ToastingPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastingPage),
  ],
})
export class ToastingPageModule {}
