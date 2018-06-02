import { async, TestBed } from '@angular/core/testing';
import { TreeDisplayComponent } from './tree-display.component';
describe('TreeDisplayComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TreeDisplayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TreeDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/udemy/Prj-Components/backup1/Prj - Components/src/app/trees/tree-display/tree-display.component.spec.js.map