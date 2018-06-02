import { Component, OnInit } from '@angular/core';
import { TreeService } from "../tree.service";
import { Tree } from '../tree';

@Component({
  selector: 'aot-tree-list',
  templateUrl: 'tree-list.component.html'
})
export class TreeListComponent implements OnInit {
    trees: Tree[] = [];

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.trees = this.treeService.getTrees();
  }
}
