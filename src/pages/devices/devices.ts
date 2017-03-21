import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Devices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html'
})
export class DevicesPage {
  devices:Object = {}
  temp:string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.devices = navParams.get('devs');

    console.log('Devices', this.devices);
    console.log(this.devices);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicesPage');
  }
  goBack() {
    this.navCtrl.pop();
  }

  getList() {
    for (let keys in this.devices) {
      this.temp += `ID: ${keys}\n Name: ${this.devices[keys].name}\n RSSI: ${this.devices[keys].rssi}\n`;
    }
  }
}
