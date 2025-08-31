import { Component, Input } from '@angular/core';
import { Produto } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() produto!: Produto;

  constructor(private router: Router) {}

  verDetalhes(): void {
    this.router.navigate(['/produto', this.produto.id]);
  }
}
