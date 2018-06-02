var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeAppComponent } from "./tree-app.component";
import { HeaderComponent } from "./header.component";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectTreeComponent } from "./trees/select-tree.component";
import { TreeListComponent } from "./trees/tree-list/tree-list.component";
import { TreeItemComponent } from "./trees/tree-list/tree-item.component";
import { TreeDetailComponent } from "./trees/tree-detail/tree-detail.component";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                TreeAppComponent,
                HeaderComponent,
                ShoppingListAddComponent,
                ShoppingListComponent,
                SelectTreeComponent,
                TreeListComponent,
                TreeDetailComponent,
                TreeItemComponent,
            ],
            imports: [
                BrowserModule
            ],
            bootstrap: [TreeAppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/udemy/Prj-Components/backup1/Prj - Components/src/app/app.module.js.map