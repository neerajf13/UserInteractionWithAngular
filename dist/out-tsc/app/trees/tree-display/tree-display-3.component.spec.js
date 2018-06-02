import { async, TestBed } from '@angular/core/testing';
import { TreeDisplay3Component } from './tree-display-3.component';
describe('TreeDisplay3Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TreeDisplay3Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TreeDisplay3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/version11/Project/src/app/trees/tree-display/tree-display-3.component.spec.js.map