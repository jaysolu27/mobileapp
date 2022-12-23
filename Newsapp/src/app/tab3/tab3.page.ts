import { Component } from '@angular/core';
import {Vibration} from "@ionic-native/vibration/ngx";
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private v:Vibration) {}
  vibrate()
  {
    this.v.vibrate(5000);
  }
  
}
