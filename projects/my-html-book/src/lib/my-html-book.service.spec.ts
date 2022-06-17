import { TestBed } from '@angular/core/testing';

import { MyHtmlBookService } from './my-html-book.service';

describe('MyHtmlBookService', () => {
  let service: MyHtmlBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHtmlBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
