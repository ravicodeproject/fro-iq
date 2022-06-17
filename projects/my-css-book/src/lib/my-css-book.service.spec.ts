import { TestBed } from '@angular/core/testing';

import { MyCssBookService } from './my-css-book.service';

describe('MyCssBookService', () => {
  let service: MyCssBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCssBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
