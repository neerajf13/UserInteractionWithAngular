/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */

import { Injectable } from '@angular/core';
import { DisplayTree } from "./displaytree";

@Injectable()
export class DisplayTreeService {

   private displaytree: DisplayTree[]=[
     new DisplayTree('Ornode1','',[new DisplayTree('AndNode1.1','',[]),new DisplayTree('AndNode1.2','',[])]),
     new DisplayTree('Ornode2','',[new DisplayTree('AndNode2.1','',[]),new DisplayTree('AndNode2.2','',[])]),
     new DisplayTree('Ornode3','',[new DisplayTree('AndNode3.1','',[]),new DisplayTree('AndNode3.2','',[])]),
     new DisplayTree('Ornode4','',[new DisplayTree('AndNode4.1','',[]),new DisplayTree('AndNode4.2','',[])])
   ];

  constructor() {}
  getDisplayTrees() {
    return this.displaytree;
  }
  getDisplayTree(id: number) {
    return this.displaytree[id];
  }

}


