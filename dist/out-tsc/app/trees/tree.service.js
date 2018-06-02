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
import { Tree } from "./tree";
export var TreeService = (function () {
    function TreeService() {
        this.trees = [
            new Tree('Education', 'Teaching is the highest form of understanding', 'https://media.licdn.com/mpr/mpr/p/4/005/06c/345/23ee7a6.jpg'),
            new Tree('Itinerary', 'Travel with a clear conscience', 'http://intergrecotravel.com/paros/wp-content/uploads/2013/11/world-tour-and-travel-destination-high-definition.jpg'),
            new Tree('Fitness', 'Making excuses burns Zero calories per hour', 'http://previews.123rf.com/images/serrnovik/serrnovik1601/serrnovik160100309/51261229-Little-5-years-old-girl-measure-a-height-of-boy-by-scale-on-the-wall-Stock-Photo.jpg'),
            new Tree('Cooking Recipe', 'Do you have the correct recipe ?', 'http://www.commonground.coop/sites/default/files/Fotolia_44696864_M.jpg')
        ];
    }
    TreeService.prototype.getTrees = function () {
        return this.trees;
    };
    TreeService.prototype.getTree = function (id) {
        return this.trees[id];
    };
    TreeService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], TreeService);
    return TreeService;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree.service.js.map