import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHtmlBookComponent } from './my-html-book.component';

describe('MyHtmlBookComponent', () => {
  let component: MyHtmlBookComponent;
  let fixture: ComponentFixture<MyHtmlBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHtmlBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHtmlBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
