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
export var TreeStartPageComponent = (function () {
    function TreeStartPageComponent() {
        this.asyncValue = new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve('Select to Play with AND-OR Tree'); }, 1500);
        });
    }
    TreeStartPageComponent.prototype.ngOnInit = function () {
    };
    TreeStartPageComponent = __decorate([
        Component({
            selector: 'app-tree-start-page',
            template: "\n\n   <span class=\"pull-right\">\n      <img class=\"img-responsive\"\n           src=\"http://www.sethlevine.com/wp-content/uploads/welcome.jpg\"/>\n   </span>\n  \n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n\n           <h1>{{asyncValue|async}}</h1>\n\n      </div>\n    </div>\n  ",
            styleUrls: ['tree-start-page.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TreeStartPageComponent);
    return TreeStartPageComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-start-page.component.js.map