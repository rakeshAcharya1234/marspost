import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

/**
 * Generated class for the OtherpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otherposts',
  templateUrl: 'otherposts.html',
})
export class OtherpostsPage {
  userPosts = [];
  allusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherpostsPage');
    var userId = localStorage.getItem("userId");
    this.getUserPosts(userId);
  }
  getUserPosts(userId) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.http.get(environment.users_api_url).subscribe(users => {
      this.allusers = users.json();
      console.log(this.allusers)
    })
    this.http.get(environment.posts_api_url).subscribe(posts => {
      loading.dismiss();
      var allposts = posts.json();
      this.userPosts = _.filter(allposts, function (o) { return o.userId != userId; });
      console.log(this.userPosts);
    })
  }
  getUserName(userId) {
    var userData = _.find(this.allusers, function (o) { return o.id == userId; });
    if (userData) {
      return userData['name'];
    } else {
      return "Anonymous";
    }

  }
}
