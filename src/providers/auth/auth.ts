import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }
  /**
    * to authenticate user login attempt
    * @method loginWithEmailAndPassword
    * @param email    {string}      User e-mail address (gmail)
    * @param password {string}      Gmail address password
    * return Promise
    */
  loginWithEmailAndPassword(email: string) {
    return new Promise((resolve, reject) => {
      let param = new URLSearchParams();
      param.set("email", email);
      this.http.get(environment.users_api_url, { "params": param }).subscribe(data => {
        resolve(data.json());
      }, error => {
        resolve(error);
      });
    });

  }


}
