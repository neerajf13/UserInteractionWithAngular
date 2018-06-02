import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Tree } from "../tree";
import { DisplayTree } from "../displaytree";
import{DisplayTreeService} from "../displaytree.service";
import { TreeService } from "../tree.service";
//import{Input} from '@angular/core';

@Component({
  selector: 'aot-tree-detail',
  templateUrl: 'tree-detail.component.html'
})

export class TreeDetailComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  private treeIndex: number;
  selectedTree: Tree;
  displayTree: DisplayTree;
  index :number;

  //@Input() treeData: any[];
  constructor(
              private route: ActivatedRoute,
              private treesService: TreeService,
              private displaytreeService: DisplayTreeService,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.treeIndex = params['id'];
        this.selectedTree = this.treesService.getTree(this.treeIndex);}
      );
        this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.treeIndex = params['id'];
          this.displayTree = this.displaytreeService.getDisplayTree(this.treeIndex);}
      )
  }

   ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
