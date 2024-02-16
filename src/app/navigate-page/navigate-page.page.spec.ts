import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigatePagePage } from './navigate-page.page';

describe('NavigatePagePage', () => {
  let component: NavigatePagePage;
  let fixture: ComponentFixture<NavigatePagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NavigatePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
