import { Component} from '@angular/core';
import { TreeNode} from 'angular2-tree-component';

@Component({
  selector: 'aot-tree-display',
  templateUrl:'tree-display.component.html',
  styleUrls:['tree-display.css'],
})

export class TreeDisplayComponent {

  public totalNodes: number=10;
  public idGen: number=10;
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
          name: 'To Obtain Cs degree',
          type:'OR',
          subTitle: 'or1.1',
          children:[
            {
              id:2,
              name: 'Plan of study',
              type:'AND',
              subTitle: 'and1',
              children: [
                {
                  id:3,
                  name: 'approval for courses from advisor',
                  type:'OR',
                  subTitle: 'or2.1',
                  children:[]
                },
                {
                  id:4,
                  name: 'meets all required constraints',
                  type:'OR',
                  subTitle: 'or2.2',
                  children:[]
                },
              ]
            }, {
              id:5,
              name: 'Meet degree requirement',
              type:'AND',
              subTitle: 'and2',
              children: [
                {
                  id:6,
                  name: 'take cs 583',
                  type:'OR',
                  subTitle: 'or3.1',
                  children:[]
                },
                {
                  id:7,
                  name: 'take 4 advance courses from 3 different areas',
                  type:'OR',
                  subTitle: 'or3.2',
                  children:[]
                },
                {
                  id:8,
                  name: '3 core courses',
                  type:'OR',
                  subTitle: 'or3.3',
                  children: [
                    {
                      id:9,
                      name: 'course should be preapproved',
                      type:'AND',
                      subTitle: 'and3.1',
                      children:[]
                    },
                    {
                      id:10,
                      name: 'courses should be from 3 different areas',
                      type:'AND',
                      subTitle: 'and3.2',
                      children:[]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ];
    },1500);

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

