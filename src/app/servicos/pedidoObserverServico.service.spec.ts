import { TestBed } from '@angular/core/testing';

import { PedidoObserverServicoService } from './pedidoObserverServico.service';

describe('PedidoObserverServicoService', () => {
  let service: PedidoObserverServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoObserverServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
