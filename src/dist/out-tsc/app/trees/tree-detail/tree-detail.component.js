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
import { Tree } from "../tree";
export var TreeDetailComponent = (function () {
    function TreeDetailComponent() {
    }
    TreeDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Tree)
    ], TreeDetailComponent.prototype, "selectedTree", void 0);
    TreeDetailComponent = __decorate([
        Component({
            selector: 'aot-tree-detail',
            templateUrl: 'tree-detail.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TreeDetailComponent);
    return TreeDetailComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/udemy/Prj-Components/backup1/Prj - Components/src/app/trees/tree-detail/tree-detail.component.js.map