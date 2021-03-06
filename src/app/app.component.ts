import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
// import { ProfilePage } from '../pages/profile/profile';
// import { CallPage } from '../pages/call/call';
// import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { ReadMorePage } from '../pages/read-more/read-more';
import { CommentsPage } from '../pages/comments/comments';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CommentsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // Keyboard.disableScroll(false);
    });
  }
}
