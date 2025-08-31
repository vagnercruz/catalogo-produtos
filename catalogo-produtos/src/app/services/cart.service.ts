import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../models/cart-item.model';
import { Produto } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itens: ItemCarrinho[] = [];

  constructor() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
      this.itens = JSON.parse(carrinhoSalvo);
    }
  }

  private salvar(): void {
    localStorage.setItem('carrinho', JSON.stringify(this.itens));
  }

  obterItens(): ItemCarrinho[] {
    return this.itens;
  }

  adicionarProduto(produto: Produto): void {
    const item = this.itens.find(i => i.produto.id === produto.id);
    if (item) {
      item.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
    this.salvar();
  }

  removerProduto(id: number): void {
    this.itens = this.itens.filter(i => i.produto.id !== id);
    this.salvar();
  }

  alterarQuantidade(id: number, quantidade: number): void {
    const item = this.itens.find(i => i.produto.id === id);
    if (item) {
      item.quantidade = quantidade;
      if (quantidade <= 0) {
        this.removerProduto(id);
      }
    }
    this.salvar();
  }

  obterTotal(): number {
    return this.itens.reduce((total, item) => total + item.produto.price * item.quantidade, 0);
  }
} 