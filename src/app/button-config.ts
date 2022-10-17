export class MyButtonConfig{

  customCssClass : string ;
  text: string;
  icon: string;

  constructor(customCssClass:string, text:string, icon:string){
    this.customCssClass = customCssClass;
    this.text = text;
    this.icon = icon;
  }
}
