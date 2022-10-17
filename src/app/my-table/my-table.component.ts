import { Component, OnInit, Input } from '@angular/core';
import { MyTableConfig } from '../MyTableConfig';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input() tableConfig!:MyTableConfig;
  @Input() data!: any[];
  keys:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
