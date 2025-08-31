import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Produto } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listarProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
        alert('Erro ao carregar produtos');
      }
    });
  }
}
