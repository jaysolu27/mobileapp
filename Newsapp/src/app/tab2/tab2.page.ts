import { Component } from '@angular/core';
import {Vibration} from "@ionic-native/vibration/ngx";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  

  constructor(private v:Vibration
  ) {

  }
  
    
  vibrate()
  {
    this.v.vibrate(6000);
  }
  



}
