import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityCheckComponent } from './authority-check.component';

describe('AuthorityCheckComponent', () => {
  let component: AuthorityCheckComponent;
  let fixture: ComponentFixture<AuthorityCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorityCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
