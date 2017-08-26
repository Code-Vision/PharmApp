import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { CallPage } from '../call/call';
import { ChatPage } from '../chat/chat';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = MapPage;
  tab4Root = CallPage;
  tab5Root = ProfilePage;

  constructor() {

  }
}
