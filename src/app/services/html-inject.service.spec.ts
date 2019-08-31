import { TestBed } from '@angular/core/testing';

import { HtmlInjectService } from './html-inject.service';

describe('HtmlInjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlInjectService = TestBed.get(HtmlInjectService);
    expect(service).toBeTruthy();
  });
});
