import { Component,Input } from '@angular/core';

import { Tree } from '../tree';

@Component({
  selector: 'aot-tree-item',
  templateUrl: 'tree-item.component.html',
  styleUrls:['tree-item-styles.css']
})
export class TreeItemComponent {
  @Input() tree: Tree;
  @Input() treeId: number;
}
