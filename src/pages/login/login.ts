import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: AuthProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    if (this.email && this.email.trim().length) {
      var emailValue = this.email.trim();
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        this.service.loginWithEmailAndPassword(emailValue).then(response => {
          loading.dismiss();
          console.log(response);
          if (Object.keys(response).length > 0) {
            localStorage.setItem("userId", response[0]['id']);
            this.navCtrl.setRoot(TabsPage);
          } else {
            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Login',
              subTitle: 'Sorry, We are unable to found any user',
              buttons: ['Dismiss']
            });
            alert.present();
          }
        });
      } else {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Login',
          subTitle: 'Please enter valid email address',
          buttons: ['Dismiss']
        });
        alert.present();
      }
    } else {
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Login',
        subTitle: 'Please enter an email address',
        buttons: ['Dismiss']
      });
      alert.present();
    }

  }

}
