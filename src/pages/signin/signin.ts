import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the SigninPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
   segmentPages: string = "signUp";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  toNextPage(){
  //push the sign up continue page on to the stack
  this.navCtrl.push(SignupPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
