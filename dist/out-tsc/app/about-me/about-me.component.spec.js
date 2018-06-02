import { async, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
describe('AboutMeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AboutMeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=C:/Users/Neeraj Fernandes/Desktop/angular2/udemy/Prj-Components/backup1/Prj - Components/src/app/about-me/about-me.component.spec.js.map