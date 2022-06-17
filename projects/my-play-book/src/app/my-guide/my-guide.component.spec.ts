import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGuideComponent } from './my-guide.component';

describe('MyGuideComponent', () => {
  let component: MyGuideComponent;
  let fixture: ComponentFixture<MyGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
