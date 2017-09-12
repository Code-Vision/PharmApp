import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ReadMorePage } from '../read-more/read-more';
import { CommentsPage } from '../comments/comments';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: string[];


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  tocommentmodal() {
    let modal = this.modalCtrl.create(CommentsPage);
    modal.present();
}

  toreadmore(){
    this.navCtrl.push(ReadMorePage);
  }


}
