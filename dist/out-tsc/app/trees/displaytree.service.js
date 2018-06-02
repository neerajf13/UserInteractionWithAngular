/**
 * Created by Neeraj Fernandes on 11/26/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { DisplayTree } from "./displaytree";
export var DisplayTreeService = (function () {
    function DisplayTreeService() {
        this.displaytree = [
            new DisplayTree('Ornode1', '', [new DisplayTree('AndNode1.1', '', []), new DisplayTree('AndNode1.2', '', [])]),
            new DisplayTree('Ornode2', '', [new DisplayTree('AndNode2.1', '', []), new DisplayTree('AndNode2.2', '', [])]),
            new DisplayTree('Ornode3', '', [new DisplayTree('AndNode3.1', '', []), new DisplayTree('AndNode3.2', '', [])]),
            new DisplayTree('Ornode4', '', [new DisplayTree('AndNode4.1', '', []), new DisplayTree('AndNode4.2', '', [])])
        ];
    }
    DisplayTreeService.prototype.getDisplayTrees = function () {
        return this.displaytree;
    };
    DisplayTreeService.prototype.getDisplayTree = function (id) {
        return this.displaytree[id];
    };
    DisplayTreeService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], DisplayTreeService);
    return DisplayTreeService;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/displaytree.service.js.map