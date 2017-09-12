import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CommentsPage } from '../comments/comments';

/**
 * Generated class for the ReadMorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-more',
  templateUrl: 'read-more.html',
})
export class ReadMorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {}

  tocommentmodal() {
    let modal = this.modalCtrl.create(CommentsPage);
    modal.present();
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadMorePage');
  }

}
