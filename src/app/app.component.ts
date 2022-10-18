import { Component } from '@angular/core';
import { MyButtonConfig } from './button-config';
import { MyTableConfig } from './MyTableConfig';
import { Utente } from './Utente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button = new MyButtonConfig("btn-primary", "Bottone Custom User", "fa-user");
  buttonC = new MyButtonConfig("btn-success", "Bottone Custom Caffe", "fa-coffee");

  header:MyTableConfig = {
    headers: [
      {'key':'lastname', 'label':'Cognome'},
      {'key':'firstname' , 'label':'Nome'},
      {'key':'cf'       , 'label':'Codice Fiscale'},
      {'key':'date'       , 'label':'Data di nascita'}
    ],
    order: {'orderType':'', 'defaultColumn':''},
    paginationTable: {itemPerPage: 2, itemPerPageOption:[5,10,15]}
  }

  data:Utente[] = [
    {'firstname':'Franco', 'lastname':'Rossi', 'cf':'ckhancjkajkcx', 'date':new Date('2001-05-15')},
    {'firstname':'Lorenzo', 'lastname':'Biraghi', 'cf':'ojahsbubcjka', 'date':new Date('2002-03-13')},
    {'firstname':'Guido', 'lastname':'Verdi', 'cf':'nciosmckamocna', 'date':new Date('1999-01-25')},
    {'firstname':'Franco', 'lastname':'Rossi', 'cf':'ckhancjkajkcx', 'date':new Date('2001-05-15')},
    {'firstname':'Lorenzo', 'lastname':'Biraghi', 'cf':'ojahsbubcjka', 'date':new Date('2002-03-13')},
    {'firstname':'Guido', 'lastname':'Verdi', 'cf':'nciosmckamocna', 'date':new Date('1999-01-25')},
    {'firstname':'Franco', 'lastname':'Rossi', 'cf':'ckhancjkajkcx', 'date':new Date('2001-05-15')},
    {'firstname':'Lorenzo', 'lastname':'Biraghi', 'cf':'ojahsbubcjka', 'date':new Date('2002-03-13')},
    {'firstname':'Guido', 'lastname':'Verdi', 'cf':'nciosmckamocna', 'date':new Date('1999-01-25')},

  ]

  updateData(newData:Utente[]){
    this.data = newData;
  }

}
