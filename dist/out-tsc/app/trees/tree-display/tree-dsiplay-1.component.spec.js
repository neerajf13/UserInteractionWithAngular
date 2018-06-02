import { async, TestBed } from '@angular/core/testing';
import { TreeDsiplay1Component } from './tree-dsiplay-1.component';
describe('TreeDsiplay1Component', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TreeDsiplay1Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TreeDsiplay1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/version11/Project/src/app/trees/tree-display/tree-dsiplay-1.component.spec.js.map