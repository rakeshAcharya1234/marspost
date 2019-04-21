import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserpostsPage } from './userposts';

@NgModule({
  declarations: [
    UserpostsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserpostsPage),
  ],
})
export class UserpostsPageModule {}
