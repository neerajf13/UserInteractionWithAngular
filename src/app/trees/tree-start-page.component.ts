import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-start-page',
  template: `

   <span class="pull-right">
      <img class="img-responsive"
           src="http://www.sethlevine.com/wp-content/uploads/welcome.jpg"/>
   </span>
  
    <div class="row">
      <div class="col-xs-12">

           <h1>{{asyncValue|async}}</h1>

      </div>
    </div>
  `,
  styleUrls:['tree-start-page.component.css']
})
export class TreeStartPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  asyncValue=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('Select to Play with AND-OR Tree'),1500);
  });
}
