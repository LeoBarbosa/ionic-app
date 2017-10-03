import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  date: string;
  show: boolean;
  available: number;
  creditTotal: number;
  debitTotal: number;
  credits: any[];
  debits: any[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController, public actionsheetCtrl: ActionSheetController) {
    let date = new Date();
    let month = date.getMonth() + 1;
    
    this.date = date.getFullYear() + '-' + ( month.toString().length == 1 ? 0 + month.toString() : month ) ;
    this.show = false;
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
  
  showDetails(){
    this.show = true;    
  }
  
  choiceOption() {
    let confirm = this.alertCtrl.create({
      title: 'Escolha o tipo de entrada',
      buttons: [
        {
          text: 'A receber',
          handler: () => {
            this.newCredit();
          }
        },
        {
          text: 'A pagar',
          handler: () => {
            this.newDebit()
          }
        }
      ]
    });
    confirm.present();
  }
  
  newCredit() {
    let prompt = this.alertCtrl.create({
        title: 'A receber',
        inputs: [
          {
            name: 'title',
            placeholder: 'Título'
          },
          {
            name: 'value',
            placeholder: 'Valor'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Salvar',
            handler: values => {
              this.storage.get('credits_' + this.date).then((data)=> {
                  if(data != null) {
                    data.push(values);
                    this.storage.set('credits_' + this.date, data);  
                    this.credits = data;
                    this.creditTotal = 0;
                    
                    data.map((each) => {
                      this.creditTotal += parseFloat(each.value)
                    })
                    
                  } else {
                    let array = [];
                    array.push(values);
                    this.storage.set('credits_' + this.date, array)
                    this.credits = array;
                    this.creditTotal = 0;
                    
                    array.map((each) => {
                      this.creditTotal += parseFloat(each.value)
                    })
                  }
                  
              })
            }
          }
        ]
      });
      prompt.present();
  }
  
  newDebit() {
    let prompt = this.alertCtrl.create({
        title: 'A pagar',
        
        inputs: [
          {
            name: 'title',
            placeholder: 'Título'
          },
          {
            name: 'value',
            placeholder: 'Valor'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Salvar',
            handler: values => {
              this.storage.get('debits_' + this.date).then((data)=> {
                  if(data != null) {
                    data.push(values);
                    this.storage.set('debits_' + this.date, data);  
                    this.debits = data;
                    this.debitTotal = 0;
                    data.map((each) => {
                      this.debitTotal += parseFloat(each.value)
                    })
                  } else {
                    let array = [];
                    array.push(values);
                    this.storage.set('debits_' + this.date, array)
                    this.debits = array;
                    this.debitTotal = 0;
                    array.map((each) => {
                      this.debitTotal += parseFloat(each.value)
                    })
                  }
                  
              })
            }
          }
        ]
      });
      prompt.present();
  }
  
  update(){
    
    this.debitTotal = 0;
    this.creditTotal = 0;
    
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
  
  optionDebits(index: number) {
    
    
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Opções',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        
        {
          text: 'Pago',
          role: 'edit',
          handler: () => {
            console.log('done')
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
             
              let confirm = this.alertCtrl.create({
                title: 'Deseja realmente deletar?',
                buttons: [
                  {
                    text: 'Não',
                    handler: () => {
                      console.log('Disagree clicked');
                    }
                  },
                  {
                    text: 'Sim',
                    handler: () => {
                      
                        this.debits.splice(index, 1);
                        this.storage.set('debits_' + this.date, this.debits);  
                        this.debitTotal = 0;
                        this.debits.map((each) => {
                          this.debitTotal += parseFloat(each.value)
                        })
                      
                    }
                  }
                ]
              });
              confirm.present();
           
          }
        }
        
      ]
    });
    actionSheet.present();
    
  }
  
  optionCredits(index: number) {
    
    
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Opções',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Deletar',
          role: 'destructive',
          // icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
             
              let confirm = this.alertCtrl.create({
                title: 'Deseja realmente deletar?',
                buttons: [
                  {
                    text: 'Não',
                    handler: () => {
                      console.log('Disagree clicked');
                    }
                  },
                  {
                    text: 'Sim',
                    handler: () => {
                      
                       this.credits.splice(index, 1);
                       this.storage.set('credits_' + this.date, this.credits);  
                       this.creditTotal = 0; 
                       this.credits.map((each) => {
                          this.creditTotal += parseFloat(each.value)
                        })
                    
                    }
                  }
                ]
              });
              confirm.present();
           
          }
        }
        
      ]
    });
    actionSheet.present();
    
  }
  
}
