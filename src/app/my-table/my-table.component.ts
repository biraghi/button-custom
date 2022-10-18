import { Component, OnInit, Input } from '@angular/core';
import { MyTableConfig } from '../MyTableConfig';
import { orderBy, find } from "lodash";
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() tableConfig!:MyTableConfig;
  @Input() data!: any[];
  dataOriginal!:any[];
  icon:string = '';
  searchForm;

  @Output() dataEventMitter = new EventEmitter<any[]>();

  changeOrder(order:string){
    if(this.tableConfig.order.orderType=='desc' || !this.tableConfig.order.orderType){
      this.data = orderBy(this.data, [order], ['asc'])
      this.tableConfig.order.defaultColumn = order;
      this.tableConfig.order.orderType='asc';
      this.icon = 'up';
    }
    else if(this.tableConfig.order.orderType=='asc'){
      this.data = orderBy(this.data, [order], ['desc'])
      this.tableConfig.order.defaultColumn = order;
      this.tableConfig.order.orderType='desc';
      this.icon = 'down';
    }

  }

  // searchSimple(term:string){
  //   if(term || term != ""){
  //     term = term.toLocaleLowerCase();
  //     this.data = this.dataOriginal.filter(obj=> obj['firstname'].toLocaleLowerCase().includes(term))
  //   }
  //   else{
  //     this.data = this.dataOriginal;
  //   }
  // }

  // searchEventMitter(term:string){
  //   if(term || term != ""){
  //     term = term.toLocaleLowerCase();
  //     this.data = this.dataOriginal.filter(obj=> obj['firstname'].toLocaleLowerCase().includes(term))
  //     this.dataEventMitter.emit(this.data);
  //   }
  //   else{
  //     this.data = this.dataOriginal;
  //   }
  // }

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group(
      {search: '', key:''}
      );
  }

  ngOnInit(): void {
    this.dataOriginal = this.data;
  }

}
