import { Component } from '@angular/core';

import { UserpostsPage } from '../userposts/userposts';
import { OtherpostsPage } from '../otherposts/otherposts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UserpostsPage;
  tab2Root = OtherpostsPage;

  constructor() {

  }
}
