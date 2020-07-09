import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHeadlingComponent } from './post-headling.component';

describe('PostHeadlingComponent', () => {
  let component: PostHeadlingComponent;
  let fixture: ComponentFixture<PostHeadlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHeadlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHeadlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
