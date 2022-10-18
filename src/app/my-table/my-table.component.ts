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
  icon:string = '';
  searchText="";
  searchHeader?:string;
  currentPage = 0;
  itemPerPage = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.itemPerPage = this.tableConfig.paginationTable.itemPerPage;
  }


  cambioValore(event:any, isSelect:boolean){
    if(isSelect){
      this.searchHeader=event.target.value;

    }
    else{
      this.searchText=event.target.value;
    }

  }

  changeItemPerPage(event:any){
    this.itemPerPage = event.target.value;
    this.currentPage = 0;

  }


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

  pageNavigation(add:boolean){
    if(add==false){
      if(this.currentPage>0){
        this.currentPage-=1;
      }
    }
    else{
      this.currentPage+=1;
    }
  }















  //Vari tipi di Search
  // @Output() dataEventMitter = new EventEmitter<any[]>();
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
}
