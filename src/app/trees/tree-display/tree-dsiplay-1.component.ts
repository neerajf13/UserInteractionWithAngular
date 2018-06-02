import { Component} from '@angular/core';
import { TreeNode} from 'angular2-tree-component';

@Component({
  selector: 'aot-tree-display-1',
  templateUrl:'tree-display-1.component.html',
  styleUrls:['tree-display-1.css'],
})

export class TreeDisplay1Component {

  public totalNodes: number=3;
  public idGen: number=3;
  public check: boolean=false;
  public getId : number=0;

  nodes:any[]=null;
  children: any[]=null;
  constructor()
  {
    setTimeout(()=>{
      this.nodes = [
        {
          id:1,
          name: 'Itinerary',
          type:'OR',
          subTitle: 'or1.1',
          children:[
            {
              id:2,
              name: 'new And Node',
              type:'AND',
              subTitle: 'and1',
              children: []
            },
            {
              id:3,
              name: 'new And Node',
              type:'AND',
              subTitle: 'and1',
              children: []
            }
          ]
        }
      ];
    },1500);
  }

  getChildren(node:any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.nodes.map((c) => {
        return Object.assign({}, c, {
        });
      })), 10000);
    });
  }

  addNode(node) {

    return new Promise(resolve=>{
      setTimeout(() => {

        if (node.data.type == 'AND') {
          node.data.children.push({
            id: this.idGen++,
            name: 'new OR child',
            type: 'OR',
            subTitle: 'or3.3',
            children: []
          });
        }

        else {
          node.data.children.push({
            id: this.idGen++,
            name: 'new AND child',
            type: 'AND',
            subTitle: 'or3.3',
            children: []
          })
        }
        this.totalNodes++;
        node.treeModel.update();
      } , 1000);
    })
  }


  editNode(node)
  {
    if(node.data.type=='OR')
    {
      document.getElementById('t1').focus();
    }
    else
    {
      document.getElementById('t2').focus();
    }
  }

  clearNode(node)
  {
    node.data.name='';
  }

  deleteNode(node)
  {
    this.getId=node.id;
    if(node.hasChildren)
    {
      this.check=true;
    }

    else
    {
      this.check=false;
      return new Promise((resolve)=>{
        setTimeout(() => {
          let nodeParent=node.parent;
          nodeParent.data.children.splice(nodeParent.data.children.indexOf(node.data),1);
          this.totalNodes--;
          this.countNode(node);
          node.treeModel.update();
        },1000)
      })
    }
  }

  deleteConfirm(tree)
  {
    return new Promise((resolve)=>{
      setTimeout(() => {
        let nodeChild=tree.treeModel.getNodeById(this.getId);
        let nodeParent=nodeChild.parent;
        nodeParent.data.children.splice(nodeParent.data.children.indexOf(nodeChild.data),1);
        this.totalNodes--;
        this.check=false;
        this.countNode(nodeChild);
        tree.treeModel.update();
      },1000)
    })
  }


  changeFlag()
  {
    this.check=false;
  }

  countNode(node)
  {
    if (node.hasChildren)
    {
      for (let nodetemp of node.children)
      {
        this.totalNodes--;
        this.countNode(nodetemp);
      }
    }
  }

  childrenCount(node: TreeNode): string {
    return node.children ? `(${node.children.length})` : '';
  }

  onEvent = console.log.bind(console);

  onSubmit()
  {
    console.log(this.nodes)
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text, true);
  }
}


