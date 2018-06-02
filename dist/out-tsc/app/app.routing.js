/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */
import { RouterModule } from "@angular/router";
import { SelectTreeComponent } from "./trees/select-tree.component";
import { AndOrTreeComponent } from "./wiki/andOrTree.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TREES_ROUTES } from "./trees/trees.route";
var App_Routes = [
    { path: '', redirectTo: '/trees', pathMatch: 'full' },
    { path: 'trees', component: SelectTreeComponent, children: TREES_ROUTES },
    { path: 'wiki', component: AndOrTreeComponent },
    { path: 'about-me', component: AboutMeComponent }
];
export var routing = RouterModule.forRoot(App_Routes);
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/app.routing.js.map