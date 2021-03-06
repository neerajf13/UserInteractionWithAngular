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
export var TreeDisplay2Component = (function () {
    function TreeDisplay2Component() {
        var _this = this;
        this.totalNodes = 3;
        this.idGen = 3;
        this.check = false;
        this.getId = 0;
        this.nodes = null;
        this.children = null;
        this.onEvent = console.log.bind(console);
        setTimeout(function () {
            _this.nodes = [
                {
                    id: 1,
                    name: 'Fitness',
                    type: 'OR',
                    subTitle: 'or1.1',
                    children: [
                        {
                            id: 2,
                            name: 'new And Node',
                            type: 'AND',
                            subTitle: 'and1',
                            children: []
                        },
                        {
                            id: 3,
                            name: 'new And Node',
                            type: 'AND',
                            subTitle: 'and1',
                            children: []
                        }
                    ]
                }
            ];
        }, 1500);
    }
    TreeDisplay2Component.prototype.addNode = function (node) {
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
    TreeDisplay2Component.prototype.editNode = function (node) {
        if (node.data.type == 'OR') {
            document.getElementById('t1').focus();
        }
        else {
            document.getElementById('t2').focus();
        }
    };
    TreeDisplay2Component.prototype.clearNode = function (node) {
        node.data.name = '';
    };
    TreeDisplay2Component.prototype.deleteNode = function (node) {
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
    TreeDisplay2Component.prototype.deleteConfirm = function (tree) {
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
    TreeDisplay2Component.prototype.changeFlag = function () {
        this.check = false;
    };
    TreeDisplay2Component.prototype.countNode = function (node) {
        if (node.hasChildren) {
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var nodetemp = _a[_i];
                this.totalNodes--;
                this.countNode(nodetemp);
            }
        }
    };
    TreeDisplay2Component.prototype.childrenCount = function (node) {
        return node.children ? "(" + node.children.length + ")" : '';
    };
    TreeDisplay2Component.prototype.onSubmit = function () {
        console.log(this.nodes);
    };
    TreeDisplay2Component.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text, true);
    };
    TreeDisplay2Component = __decorate([
        Component({
            selector: 'aot-tree-display-2',
            templateUrl: 'tree-display-2.component.html',
            styleUrls: ['tree-display-2.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TreeDisplay2Component);
    return TreeDisplay2Component;
}());
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/projects/version21/Project/src/app/trees/tree-display/tree-display-2.component.js.map