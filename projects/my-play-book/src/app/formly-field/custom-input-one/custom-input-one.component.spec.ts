import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputOneComponent } from './custom-input-one.component';

describe('CustomInputOneComponent', () => {
  let component: CustomInputOneComponent;
  let fixture: ComponentFixture<CustomInputOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInputOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
