import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
   segmentPages: string = "signIn";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  totabs(){
    this.navCtrl.push(TabsPage)
  }

  toNextPage(){
  //push the sign up continue page on to the stack
  this.navCtrl.push(SignupPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
