import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  date: string;
  creditTotal: number;
  debitTotal: number;
  credits: any[];
  debits: any[];
  
  constructor(public navCtrl: NavController, private storage: Storage) {
    let date = new Date();
    let month = date.getMonth() + 1;
    
    this.date = date.getFullYear() + '-' + ( month.toString().length == 1 ? 0 + month.toString() : month ) ;
    
    this.creditTotal = 0;
    this.debitTotal = 0;
    
    this.storage.get('credits_' + this.date).then((data)=> {
      this.credits = data;
      if(data != null) {
        data.map((each) => {
          this.creditTotal += parseFloat(each.value)
        })  
      }
    })
    this.storage.get('debits_' + this.date).then((data)=> {
      this.debits = data;           
      if(data != null) {
        data.map((each) => {
          this.debitTotal += parseFloat(each.value)
        })  
      }
    })
  }
  
}
