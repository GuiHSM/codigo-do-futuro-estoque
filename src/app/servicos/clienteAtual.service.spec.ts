import { TestBed } from '@angular/core/testing';

import { ClienteAtualService } from './clienteAtual.service';

describe('ClienteAtualService', () => {
  let service: ClienteAtualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteAtualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
