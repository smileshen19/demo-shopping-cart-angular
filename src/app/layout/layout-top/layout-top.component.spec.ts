import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopComponent } from './layout-top.component';

describe('LayoutTopComponent', () => {
  let component: LayoutTopComponent;
  let fixture: ComponentFixture<LayoutTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
