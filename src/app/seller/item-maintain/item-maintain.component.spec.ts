import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMaintainComponent } from './item-maintain.component';

describe('ItemMaintainComponent', () => {
  let component: ItemMaintainComponent;
  let fixture: ComponentFixture<ItemMaintainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMaintainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMaintainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
