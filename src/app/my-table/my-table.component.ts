import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MyTableConfig } from './MyTableConfig';
import { orderBy} from "lodash";
import { ActionButton } from './ActionButton';
import { MyTableActionEnum } from './MyTableActionEnum';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyTableComponent implements OnInit, OnChanges {

  @Input() tableConfig!:MyTableConfig;
  @Input() data!: any[];
  @Output() actionChange: EventEmitter<ActionButton> = new EventEmitter();

  icon:string = '';
  searchText="";
  searchHeader?:string;
  currentPage = 0;
  maxPage=0;
  itemPerPage = 0;
  dataModify:boolean = false;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.setMaxPage();
    console.log(changes);
  }

  ngOnInit(): void {
    this.itemPerPage = this.tableConfig.paginationTable.itemPerPage;
    this.setMaxPage();
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
    this.setMaxPage();
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
      if(this.currentPage<(this.maxPage)){
        this.currentPage+=1;
      }

    }
  }

  setMaxPage(){
    if(this.data.length>this.itemPerPage){
      this.maxPage = ((this.data.length) / this.itemPerPage) | 0;
    }
    else{
      this.maxPage = 0;
    }

  }

  actionButton(item:any, action:string){
    this.actionChange.emit({action, item});
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
