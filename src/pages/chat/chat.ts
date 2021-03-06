import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

    toUser:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
