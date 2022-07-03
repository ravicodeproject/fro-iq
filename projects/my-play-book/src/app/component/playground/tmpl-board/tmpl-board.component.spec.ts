import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmplBoardComponent } from './tmpl-board.component';

describe('TmplBoardComponent', () => {
  let component: TmplBoardComponent;
  let fixture: ComponentFixture<TmplBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmplBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmplBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
