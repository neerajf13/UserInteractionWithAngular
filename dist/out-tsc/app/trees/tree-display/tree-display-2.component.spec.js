import { async, TestBed } from '@angular/core/testing';
import { TreeDisplay2Component } from './tree-display-2.component';
describe('TreeDisplay2Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TreeDisplay2Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TreeDisplay2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/version11/Project/src/app/trees/tree-display/tree-display-2.component.spec.js.map