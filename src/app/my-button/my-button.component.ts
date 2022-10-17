import { Component, Input, OnInit } from '@angular/core';
import { MyButtonConfig } from '../button-config';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  css?:string;
  text?:string;
  icon?:string;

  @Input () buttonConfig! : MyButtonConfig;

  constructor() { }

  ngOnInit(): void {
    if(this.buttonConfig){
      this.text = this.buttonConfig.text;
      this.css = this.buttonConfig.customCssClass;
      this.icon = this.buttonConfig.icon;
    }

  }

}
