import { Component} from '@angular/core';
import { TreeNode} from 'angular2-tree-component';

@Component({
  selector: 'aot-tree-display-3',
  templateUrl:'tree-display-3.component.html',
  styleUrls:['tree-display-3.css'],
})

export class TreeDisplay3Component {

  public totalNodes: number=20;
  public idGen: number=20;
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
          name: 'Cooking recipe',
          type:'OR',
          subTitle: 'or1.1',
          children:[
            {
              id:2,
              name: 'new And Node',
              type:'AND',
              subTitle: 'and1',
              children: [
                {
                  id:3,
                  name: 'new Or Node',
                  type:'OR',
                  subTitle: 'or2.1',
                  children:[
                      {
                        id:4,
                        name: 'new And Node',
                        type:'AND',
                        subTitle: 'and3.1',
                        children:[]
                      },
                    {
                      id:5,
                      name: 'new And Node',
                      type:'AND',
                      subTitle: 'and3.2',
                      children:[]
                    },
                    {
                      id:6,
                      name: 'new And Node',
                      type:'AND',
                      subTitle: 'and3.2',
                      children:[]
                    }
                  ]
                },
                {
                  id:7,
                  name: 'new Or Node',
                  type:'OR',
                  subTitle: 'or2.2',
                  children:[]
                },
                {
                  id:8,
                  name: 'new Or Node',
                  type:'OR',
                  subTitle: 'or2.2',
                  children:[]
                }
              ]
            }, {
              id:9,
              name: 'new And Node',
              type:'AND',
              subTitle: 'and2',
              children: [
                {
                  id:10,
                  name: 'new Or Node',
                  type:'OR',
                  subTitle: 'or3.1',
                  children:[]
                },
                {
                  id:11,
                  name: 'new Or Node',
                  type:'OR',
                  subTitle: 'or3.2',
                  children:[]
                },
                {
                  id:12,
                  name: '3 new Or Node',
                  type:'OR',
                  subTitle: 'or3.3',
                  children: [
                    {
                      id:13,
                      name: 'new And Node',
                      type:'AND',
                      subTitle: 'and3.1',
                      children:[
                          {
                            id:14,
                            name: 'new Or Node',
                            type:'OR',
                            subTitle: 'and3.1',
                            children:[]
                          },
                        {
                          id:15,
                          name: 'new Or Node',
                          type:'OR',
                          subTitle: 'and3.2',
                          children:[]
                        },
                        {
                          id:16,
                          name: 'new Or Node',
                          type:'OR',
                          subTitle: 'and3.2',
                          children:[]
                        }
                      ]
                    },
                    {
                      id:17,
                      name: 'new And Node',
                      type:'AND',
                      subTitle: 'and3.2',
                      children:[
                          {
                            id:18,
                            name: 'new Or Node',
                            type:'OR',
                            subTitle: 'and3.1',
                            children:[]
                          },
                        {
                          id:19,
                          name: 'new Or Node',
                          type:'OR',
                          subTitle: 'and3.2',
                          children:[]
                        },
                        {
                          id:20,
                          name: 'new Or Node',
                          type:'OR',
                          subTitle: 'and3.2',
                          children:[]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
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

