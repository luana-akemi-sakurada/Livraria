import { TestBed } from '@angular/core/testing';

import { SessaoService } from './sessao.service';

describe('SessaoService', () => {
  let service: SessaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
