/**
 * Created by Neeraj Fernandes on 11/27/2016.
 */

import { Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'aot-footer',
  templateUrl: 'footer.component.html',
  styleUrls:['footer.component.css']
})
export class FooterComponent{

  date=new Date();
 // this.date=Observable.interval(1000);

  clock=Observable.interval(1000).map(()=>new Date());

  constructor() {
    this.clock.subscribe(console.log.bind(console));
  }

}
