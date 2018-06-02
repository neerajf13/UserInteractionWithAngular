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
export var TreeDisplay3Component = (function () {
    function TreeDisplay3Component() {
        var _this = this;
        this.totalNodes = 20;
        this.idGen = 20;
        this.check = false;
        this.getId = 0;
        this.nodes = null;
        this.children = null;
        this.onEvent = console.log.bind(console);
        setTimeout(function () {
            _this.nodes = [
                {
                    id: 1,
                    name: 'Cooking recipe',
                    type: 'OR',
                    subTitle: 'or1.1',
                    children: [
                        {
                            id: 2,
                            name: 'new And Node',
                            type: 'AND',
                            subTitle: 'and1',
                            children: [
                                {
                                    id: 3,
                                    name: 'new Or Node',
                                    type: 'OR',
                                    subTitle: 'or2.1',
                                    children: [
                                        {
                                            id: 4,
                                            name: 'new And Node',
                                            type: 'AND',
                                            subTitle: 'and3.1',
                                            children: []
                                        },
                                        {
                                            id: 5,
                                            name: 'new And Node',
                                            type: 'AND',
                                            subTitle: 'and3.2',
                                            children: []
                                        },
                                        {
                                            id: 6,
                                            name: 'new And Node',
                                            type: 'AND',
                                            subTitle: 'and3.2',
                                            children: []
                                        }
                                    ]
                                },
                                {
                                    id: 7,
                                    name: 'new Or Node',
                                    type: 'OR',
                                    subTitle: 'or2.2',
                                    children: []
                                },
                                {
                                    id: 8,
                                    name: 'new Or Node',
                                    type: 'OR',
                                    subTitle: 'or2.2',
                                    children: []
                                }
                            ]
                        }, {
                            id: 9,
                            name: 'new And Node',
                            type: 'AND',
                            subTitle: 'and2',
                            children: [
                                {
                                    id: 10,
                                    name: 'new Or Node',
                                    type: 'OR',
                                    subTitle: 'or3.1',
                                    children: []
                                },
                                {
                                    id: 11,
                                    name: 'new Or Node',
                                    type: 'OR',
                                    subTitle: 'or3.2',
                                    children: []
                                },
                                {
                                    id: 12,
                                    name: '3 new Or Node',
                                    type: 'OR',
                                    subTitle: 'or3.3',
                                    children: [
                                        {
                                            id: 13,
                                            name: 'new And Node',
                                            type: 'AND',
                                            subTitle: 'and3.1',
                                            children: [
                                                {
                                                    id: 14,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.1',
                                                    children: []
                                                },
                                                {
                                                    id: 15,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.2',
                                                    children: []
                                                },
                                                {
                                                    id: 16,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.2',
                                                    children: []
                                                }
                                            ]
                                        },
                                        {
                                            id: 17,
                                            name: 'new And Node',
                                            type: 'AND',
                                            subTitle: 'and3.2',
                                            children: [
                                                {
                                                    id: 18,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.1',
                                                    children: []
                                                },
                                                {
                                                    id: 19,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.2',
                                                    children: []
                                                },
                                                {
                                                    id: 20,
                                                    name: 'new Or Node',
                                                    type: 'OR',
                                                    subTitle: 'and3.2',
                                                    children: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ];
        }, 1500);
    }
    TreeDisplay3Component.prototype.addNode = function (node) {
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
    TreeDisplay3Component.prototype.editNode = function (node) {
        if (node.data.type == 'OR') {
            document.getElementById('t1').focus();
        }
        else {
            document.getElementById('t2').focus();
        }
    };
    TreeDisplay3Component.prototype.clearNode = function (node) {
        node.data.name = '';
    };
    TreeDisplay3Component.prototype.deleteNode = function (node) {
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
    TreeDisplay3Component.prototype.deleteConfirm = function (tree) {
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
    TreeDisplay3Component.prototype.changeFlag = function () {
        this.check = false;
    };
    TreeDisplay3Component.prototype.countNode = function (node) {
        if (node.hasChildren) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var nodetemp = _a[_i];
                this.totalNodes--;
                this.countNode(nodetemp);
            }
        }
    };
    TreeDisplay3Component.prototype.childrenCount = function (node) {
        return node.children ? "(" + node.children.length + ")" : '';
    };
    TreeDisplay3Component.prototype.onSubmit = function () {
        console.log(this.nodes);
    };
    TreeDisplay3Component.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text, true);
    };
    TreeDisplay3Component = __decorate([
        Component({
            selector: 'aot-tree-display-3',
            templateUrl: 'tree-display-3.component.html',
            styleUrls: ['tree-display-3.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TreeDisplay3Component);
    return TreeDisplay3Component;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-display/tree-display-3.component.js.map