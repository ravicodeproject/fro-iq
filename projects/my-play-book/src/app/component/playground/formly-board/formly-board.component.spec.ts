import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyBoardComponent } from './formly-board.component';

describe('FormlyBoardComponent', () => {
  let component: FormlyBoardComponent;
  let fixture: ComponentFixture<FormlyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
