import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';
import {Vibration} from "@ionic-native/vibration/ngx";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  constructor(
   public getdata: GetdataService,
   private v:Vibration
  )
   {}

  ngOnInit(){
    this.getdata.doGet().subscribe(res=>{
      this.data = res.data.articles;
      console.log(this.data)
    })
  }

  vibrate()
  {
    this.v.vibrate(5000);
  }
  
}