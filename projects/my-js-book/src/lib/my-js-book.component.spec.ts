import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJsBookComponent } from './my-js-book.component';

describe('MyJsBookComponent', () => {
  let component: MyJsBookComponent;
  let fixture: ComponentFixture<MyJsBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJsBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
