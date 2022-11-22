import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoCompraComponent } from './lista-produto-compra.component';

describe('ListaProdutoCompraComponent', () => {
  let component: ListaProdutoCompraComponent;
  let fixture: ComponentFixture<ListaProdutoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutoCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdutoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
