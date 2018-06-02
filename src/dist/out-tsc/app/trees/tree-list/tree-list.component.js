var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { Tree } from '../tree';
export var TreeListComponent = (function () {
    function TreeListComponent() {
        this.trees = [];
        this.treeSelected = new EventEmitter();
        this.tree = new Tree('Dummy', 'Dummy', 'http://thumbs1.ebaystatic.com/d/l225/m/mfXELL6zPWJE4OC0agiXMZw.jpg');
    }
    TreeListComponent.prototype.ngOnInit = function () {
    };
    TreeListComponent.prototype.onSelected = function (tree) {
        this.treeSelected.emit(tree);
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], TreeListComponent.prototype, "treeSelected", void 0);
    TreeListComponent = __decorate([
        Component({
            selector: 'aot-tree-list',
            templateUrl: 'tree-list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TreeListComponent);
    return TreeListComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/udemy/Prj-Components/backup1/Prj - Components/src/app/trees/tree-list/tree-list.component.js.map