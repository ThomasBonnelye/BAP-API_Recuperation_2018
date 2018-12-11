import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    url:string;
    data:string;

  constructor(public http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
      this.loadData();
  }

  loadData(){

      this.http.get('https://nicolas.okbutwin.fr/myplanner/api/?products=all')
          .map(res => res.json())
          .subscribe(data => {
              this.data = data;
              console.log(data);
          },err => {console.log(err);

          });

  }

}
