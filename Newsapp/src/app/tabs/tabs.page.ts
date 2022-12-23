import { Component } from '@angular/core';
import {Vibration} from "@ionic-native/vibration/ngx";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private v:Vibration) {

  }
  vibrate()
  {
    this.v.vibrate(5000);
  }
  
}
