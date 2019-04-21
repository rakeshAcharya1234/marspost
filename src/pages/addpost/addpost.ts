import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the AddpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpost',
  templateUrl: 'addpost.html',
})
export class AddpostPage {
  post = {
    title: "",
    body: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpostPage');
  }
  submitPost() {
    if (!this.post.title.trim().length || !this.post.title.trim().length) {
      let alert = this.alertCtrl.create({
        title: 'Add Post',
        subTitle: 'Please enter value in title and body',
        buttons: ['Dismiss']
      });
      alert.present();
    }
    if (this.post.title.trim().length > 0 && this.post.title.trim().length > 0) {
      var postObj = {
        "userId": localStorage.getItem("userId"),
        "title": this.post.title,
        "body": this.post.body,
        "time": new Date().getTime()
      }
      var getposts = JSON.parse(localStorage.getItem("posts"));
      if (getposts && getposts.length > 0) {
        getposts.push(postObj);
      } else {
        getposts = [];
        getposts.push(postObj);
      }
      localStorage.setItem("posts", JSON.stringify(getposts));
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'Post Added Successfully',
        buttons: ['Dismiss']
      });
      alert.present();
      this.navCtrl.setRoot(TabsPage);
    }

  }

}
