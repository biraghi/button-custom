import { Component } from '@angular/core';
import { MyButtonConfig } from './button-config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  button = new MyButtonConfig("btn-primary", "Bottone Custom User", "fa-user");
  buttonC = new MyButtonConfig("btn-success", "Bottone Custom Caffe", "fa-coffee");
}
