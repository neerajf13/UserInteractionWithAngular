var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DisplayTreeService } from "../displaytree.service";
import { TreeService } from "../tree.service";
//import{Input} from '@angular/core';
export var TreeDetailComponent = (function () {
    //@Input() treeData: any[];
    function TreeDetailComponent(route, treesService, displaytreeService, router) {
        this.route = route;
        this.treesService = treesService;
        this.displaytreeService = displaytreeService;
        this.router = router;
    }
    TreeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.treeIndex = params['id'];
            _this.selectedTree = _this.treesService.getTree(_this.treeIndex);
        });
        this.subscription = this.route.params.subscribe(function (params) {
            _this.treeIndex = params['id'];
            _this.displayTree = _this.displaytreeService.getDisplayTree(_this.treeIndex);
        });
    };
    TreeDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TreeDetailComponent = __decorate([
        Component({
            selector: 'aot-tree-detail',
            templateUrl: 'tree-detail.component.html'
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, TreeService, DisplayTreeService, Router])
    ], TreeDetailComponent);
    return TreeDetailComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-detail/tree-detail.component.js.map