import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFrameComponent } from './book-frame.component';

describe('BookFrameComponent', () => {
  let component: BookFrameComponent;
  let fixture: ComponentFixture<BookFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
