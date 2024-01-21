import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCommentsComponent } from './the-comments.component';

describe('TheCommentsComponent', () => {
  let component: TheCommentsComponent;
  let fixture: ComponentFixture<TheCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TheCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
