import { Component, OnInit } from '@angular/core';

import { Tree } from "./tree";

@Component({
  selector: 'aot-select-tree',
  templateUrl: 'select-tree.component.html'
})
export class SelectTreeComponent implements OnInit {
  selectedTree: Tree;

  constructor() {}

  ngOnInit() {
  }
}
