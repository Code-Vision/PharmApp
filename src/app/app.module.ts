import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CallPage } from '../pages/call/call';
import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { ReadMorePage } from '../pages/read-more/read-more';
import { CommentsPage } from '../pages/comments/comments';


//import { ChatService } from '../providers/chat-service';
import { EmojiProvider } from '../providers/emoji';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    CallPage,
    ChatPage,
    MapPage,
    ReadMorePage,
    CommentsPage
  ],
  imports: [
    BrowserModule,HttpModule,IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false,
      tabsHideOnSubPages: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SigninPage,
    SignupPage,
    ProfilePage,
    CallPage,
    ChatPage,
    MapPage,
    ReadMorePage,
    CommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider
  ]
})
export class AppModule {}
