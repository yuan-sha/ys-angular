import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievePwdComponent } from './retrieve-pwd.component';

describe('RetrievePwdComponent', () => {
  let component: RetrievePwdComponent;
  let fixture: ComponentFixture<RetrievePwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrievePwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
