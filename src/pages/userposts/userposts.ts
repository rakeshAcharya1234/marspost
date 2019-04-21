import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import { AddpostPage } from '../addpost/addpost';
import * as _ from "lodash";

/**
 * Generated class for the UserpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userposts',
  templateUrl: 'userposts.html',
})
export class UserpostsPage {
  userPosts = [];
  localPosts = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpostsPage');
    var userId = localStorage.getItem("userId");

    this.getUserPosts(userId);
  }
  getUserPosts(userId) {
    let param = new URLSearchParams();
    param.set("userId", userId);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.localPosts = JSON.parse(localStorage.getItem("posts"));
    this.localPosts = _.orderBy(this.localPosts, ["time"], ['desc']);
    this.http.get(environment.posts_api_url, { "params": param }).subscribe(posts => {
      loading.dismiss();
      this.userPosts = posts.json();
      console.log(this.userPosts);
    })
  }
  addPostUser() {
    this.navCtrl.push(AddpostPage);
  }

}
