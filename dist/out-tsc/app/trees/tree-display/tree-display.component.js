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
export var TreeDisplayComponent = (function () {
    function TreeDisplayComponent() {
        var _this = this;
        this.totalNodes = 10;
        this.idGen = 10;
        this.check = false;
        this.getId = 0;
        this.nodes = null;
        this.children = null;
        this.onEvent = console.log.bind(console);
        setTimeout(function () {
            _this.nodes = [
                {
                    id: 1,
                    name: 'To Obtain Cs degree',
                    type: 'OR',
                    subTitle: 'or1.1',
                    children: [
                        {
                            id: 2,
                            name: 'Plan of study',
                            type: 'AND',
                            subTitle: 'and1',
                            children: [
                                {
                                    id: 3,
                                    name: 'approval for courses from advisor',
                                    type: 'OR',
                                    subTitle: 'or2.1',
                                    children: []
                                },
                                {
                                    id: 4,
                                    name: 'meets all required constraints',
                                    type: 'OR',
                                    subTitle: 'or2.2',
                                    children: []
                                },
                            ]
                        }, {
                            id: 5,
                            name: 'Meet degree requirement',
                            type: 'AND',
                            subTitle: 'and2',
                            children: [
                                {
                                    id: 6,
                                    name: 'take cs 583',
                                    type: 'OR',
                                    subTitle: 'or3.1',
                                    children: []
                                },
                                {
                                    id: 7,
                                    name: 'take 4 advance courses from 3 different areas',
                                    type: 'OR',
                                    subTitle: 'or3.2',
                                    children: []
                                },
                                {
                                    id: 8,
                                    name: '3 core courses',
                                    type: 'OR',
                                    subTitle: 'or3.3',
                                    children: [
                                        {
                                            id: 9,
                                            name: 'course should be preapproved',
                                            type: 'AND',
                                            subTitle: 'and3.1',
                                            children: []
                                        },
                                        {
                                            id: 10,
                                            name: 'courses should be from 3 different areas',
                                            type: 'AND',
                                            subTitle: 'and3.2',
                                            children: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ];
        }, 1500);
    }
    TreeDisplayComponent.prototype.addNode = function (node) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (node.data.type == 'AND') {
                    node.data.children.push({
                        id: _this.idGen++,
                        name: 'new OR child',
                        type: 'OR',
                        subTitle: 'or3.3',
                        children: []
                    });
                }
                else {
                    node.data.children.push({
                        id: _this.idGen++,
                        name: 'new AND child',
                        type: 'AND',
                        subTitle: 'or3.3',
                        children: []
                    });
                }
                _this.totalNodes++;
                node.treeModel.update();
            }, 1000);
        });
    };
    TreeDisplayComponent.prototype.editNode = function (node) {
        if (node.data.type == 'OR') {
            document.getElementById('t1').focus();
        }
        else {
            document.getElementById('t2').focus();
        }
    };
    TreeDisplayComponent.prototype.clearNode = function (node) {
        node.data.name = '';
    };
    TreeDisplayComponent.prototype.deleteNode = function (node) {
        var _this = this;
        this.getId = node.id;
        if (node.hasChildren) {
            this.check = true;
        }
        else {
            this.check = false;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var nodeParent = node.parent;
                    nodeParent.data.children.splice(nodeParent.data.children.indexOf(node.data), 1);
                    _this.totalNodes--;
                    _this.countNode(node);
                    node.treeModel.update();
                }, 1000);
            });
        }
    };
    TreeDisplayComponent.prototype.deleteConfirm = function (tree) {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var nodeChild = tree.treeModel.getNodeById(_this.getId);
                var nodeParent = nodeChild.parent;
                nodeParent.data.children.splice(nodeParent.data.children.indexOf(nodeChild.data), 1);
                _this.totalNodes--;
                _this.check = false;
                _this.countNode(nodeChild);
                tree.treeModel.update();
            }, 1000);
        });
    };
    TreeDisplayComponent.prototype.changeFlag = function () {
        this.check = false;
    };
    TreeDisplayComponent.prototype.countNode = function (node) {
        if (node.hasChildren) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var nodetemp = _a[_i];
                this.totalNodes--;
                this.countNode(nodetemp);
            }
        }
    };
    TreeDisplayComponent.prototype.childrenCount = function (node) {
        return node.children ? "(" + node.children.length + ")" : '';
    };
    TreeDisplayComponent.prototype.onSubmit = function () {
        console.log(this.nodes);
    };
    TreeDisplayComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text, true);
    };
    TreeDisplayComponent = __decorate([
        Component({
            selector: 'aot-tree-display',
            templateUrl: 'tree-display.component.html',
            styleUrls: ['tree-display.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TreeDisplayComponent);
    return TreeDisplayComponent;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-display/tree-display.component.js.map