/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */

import { Routes } from "@angular/router";

import { TreeStartPageComponent } from "./tree-start-page.component";
import { TreeDetailComponent } from "./tree-detail/tree-detail.component";


export const TREES_ROUTES: Routes = [
  { path: '', component: TreeStartPageComponent },
  { path: ':id', component: TreeDetailComponent }
];
