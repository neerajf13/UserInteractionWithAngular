import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeAppComponent } from "./tree-app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { SelectTreeComponent } from "./trees/select-tree.component";
import { TreeListComponent } from "./trees/tree-list/tree-list.component";
import { TreeItemComponent } from "./trees/tree-list/tree-item.component";
import { TreeDetailComponent } from "./trees/tree-detail/tree-detail.component";
import {AndOrTreeComponent} from "./wiki/andOrTree.component";
import{routing} from "./app.routing";
import { TreeStartPageComponent } from './trees/tree-start-page.component';
import { TreeService } from "./trees/tree.service";
import {DisplayTreeService} from "./trees/displaytree.service";
import { AboutMeComponent } from './about-me/about-me.component';
import {TreeDisplayComponent} from "./trees/tree-display/tree-display.component";
import { TreeModule } from 'angular2-tree-component';
import { TreeDisplay1Component } from './trees/tree-display/tree-dsiplay-1.component';
import { TreeDisplay2Component } from './trees/tree-display/tree-display-2.component';
import { TreeDisplay3Component } from './trees/tree-display/tree-display-3.component';



@NgModule({
  declarations: [
    TreeAppComponent,
    HeaderComponent,
    FooterComponent,
    SelectTreeComponent,
    AndOrTreeComponent,
    TreeListComponent,
    TreeDetailComponent,
    TreeItemComponent,
    TreeStartPageComponent,
    AboutMeComponent,
    TreeDisplayComponent,
    TreeDisplay1Component,
    TreeDisplay2Component,
    TreeDisplay3Component
  ],
  imports: [
    BrowserModule,routing,TreeModule
  ],
  providers: [TreeService,DisplayTreeService],
  bootstrap: [TreeAppComponent]
})
export class AppModule {}
