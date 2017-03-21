import { Component } from '@angular/core';
import { DevicesPage } from '../devices/devices';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { BLE } from 'ionic-native';


// declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  devices:Object = {};
  constructor(public navCtrl: NavController, private platform: Platform, private alertCtrl: AlertController) {
    
  }


  checkStrength() {
    let alert = null;

    this.platform.ready().then(() => {
      BLE.isEnabled().then(() => {
          this.scan();
          this.delay();
      }).catch(() => {
        alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Bluetooth not activated',
          buttons: ['Ok']
        });
        alert.present();
      });
    });
  }
  

  scan() {
    BLE.scan([], 15).subscribe(
       device => {
         this.devices[device.id] = device;
     });
  }

  delay() {
    setTimeout(() => {
            // let alert = this.alertCtrl.create({
            //   title: 'Success',
            //   subTitle: 'Scan succesful...',
            //   buttons: ['Ok']
            // });
            // alert.present(); 
     let { devices } = this;
     this.navCtrl.push(DevicesPage, { devs: devices });
    }, 16000);
  }
}
