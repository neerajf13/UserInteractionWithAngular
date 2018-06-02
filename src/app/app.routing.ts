/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */

import{Routes,RouterModule} from "@angular/router";
import{SelectTreeComponent} from "./trees/select-tree.component";
import{AndOrTreeComponent} from "./wiki/andOrTree.component";
import{AboutMeComponent} from "./about-me/about-me.component";
import { TREES_ROUTES } from "./trees/trees.route";

const App_Routes: Routes=[
  {path:'',redirectTo:'/trees',pathMatch:'full'},
  {path:'trees', component:SelectTreeComponent,children: TREES_ROUTES},
  {path:'wiki', component:AndOrTreeComponent},
  {path:'about-me', component:AboutMeComponent}
];

export const routing=RouterModule.forRoot(App_Routes);
