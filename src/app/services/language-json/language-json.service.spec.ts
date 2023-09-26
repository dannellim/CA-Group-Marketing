import { TestBed } from '@angular/core/testing';

import { LanguageJsonService } from './language-json.service';

describe('LanguageJsonService', () => {
  let service: LanguageJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
