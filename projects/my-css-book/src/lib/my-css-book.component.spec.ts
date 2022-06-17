import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCssBookComponent } from './my-css-book.component';

describe('MyCssBookComponent', () => {
  let component: MyCssBookComponent;
  let fixture: ComponentFixture<MyCssBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCssBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCssBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
