import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private readonly API_URL = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) {}

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API_URL}/products`);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.API_URL}/products/${id}`);
  }

  listarCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/products/categories`);
  }

  buscarPorCategoria(categoria: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.API_URL}/products/category/${categoria}`);
  }
}  