import { TestBed } from '@angular/core/testing';

import { MyJsBookService } from './my-js-book.service';

describe('MyJsBookService', () => {
  let service: MyJsBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJsBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
