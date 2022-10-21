import { Component, EventEmitter, Output } from '@angular/core';
import { ActionButton } from './my-table/ActionButton';
import { MyButtonConfig } from './button-config';
import { MyTableActionEnum } from './my-table/MyTableActionEnum';
import { MyTableConfig } from './my-table/MyTableConfig';
import { Utente } from './model/Utente';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() addUpdateData: EventEmitter<ActionButton> = new EventEmitter();



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
    paginationTable: {itemPerPage: 2, itemPerPageOption:[5,10,15]},
    actions:[MyTableActionEnum.NEW_ROW, MyTableActionEnum.EDIT, MyTableActionEnum.DELETE]
  }

  data:Utente[] = [
    {'firstname':'Franco', 'lastname':'Rossi', 'cf':'ckhancjkajkcx', 'date':new Date('2001-05-15')},
    {'firstname':'Lorenzo', 'lastname':'Biraghi', 'cf':'ojahsbubcjka', 'date':new Date('2002-03-13')},
    {'firstname':'Guido', 'lastname':'Verdi', 'cf':'nciosmckamocna', 'date':new Date('1999-01-25')}
  ]

  updateData(action:ActionButton):any{
    switch(action.action){
      case MyTableActionEnum.DELETE:{
        this.data = this.data.filter(obj=>obj!=action.item);
      }
      case MyTableActionEnum.NEW_ROW:{
        return action.item;
      }
      case MyTableActionEnum.EDIT:{
        return null;
      }
    }
    return null;
  }

}
