/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */

import { Injectable } from '@angular/core';
import { Tree } from "./tree";

@Injectable()
export class TreeService {
  private trees: Tree[] = [
    new Tree('Education', 'Teaching is the highest form of understanding', 'https://media.licdn.com/mpr/mpr/p/4/005/06c/345/23ee7a6.jpg'),
    new Tree('Itinerary', 'Travel with a clear conscience', 'http://intergrecotravel.com/paros/wp-content/uploads/2013/11/world-tour-and-travel-destination-high-definition.jpg'),
    new Tree('Fitness', 'Making excuses burns Zero calories per hour', 'http://previews.123rf.com/images/serrnovik/serrnovik1601/serrnovik160100309/51261229-Little-5-years-old-girl-measure-a-height-of-boy-by-scale-on-the-wall-Stock-Photo.jpg'),
    new Tree('Cooking Recipe', 'Do you have the correct recipe ?', 'http://www.commonground.coop/sites/default/files/Fotolia_44696864_M.jpg')
  ];

  constructor() {}
  getTrees() {
    return this.trees;
  }
  getTree(id: number) {
    return this.trees[id];
  }

}

