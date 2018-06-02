var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Tree } from '../tree';
export var TreeItemComponent = (function () {
    function TreeItemComponent() {
    }
    __decorate([
        Input(), 
        __metadata('design:type', Tree)
    ], TreeItemComponent.prototype, "tree", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', Number)
    ], TreeItemComponent.prototype, "treeId", void 0);
    TreeItemComponent = __decorate([
        Component({
            selector: 'aot-tree-item',
            templateUrl: 'tree-item.component.html',
            styleUrls: ['tree-item-styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TreeItemComponent);
    return TreeItemComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-list/tree-item.component.js.map