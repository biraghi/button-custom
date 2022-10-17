import { Component } from '@angular/core';
import { MyButtonConfig } from './button-config';
import { MyTableConfig } from './MyTableConfig';
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
      {'key':'comment'       , 'label':'Commento'}
    ]
  }

  data:any[] = [
    {'firstname':'Franco', 'lastname':'Rossi', 'cf':'ckhancjkajkcx', 'comment':'Ciao'},
    {'firstname':'Lorenzo', 'lastname':'Biraghi', 'cf':'ojahsbubcjka', 'comment':'Ciao'},
    {'firstname':'Guido', 'lastname':'Verdi', 'cf':'nciosmckamocna', 'comment':'Ciao'},

  ]

}
