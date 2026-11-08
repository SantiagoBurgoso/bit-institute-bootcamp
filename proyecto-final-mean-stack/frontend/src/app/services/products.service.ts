import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);

  private url = 'http://localhost:3000/api/products';

  private options() {
    const token = localStorage.getItem('token') || '';

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }

  getAll() {
    return this.http.get<Product[]>(this.url);
  }

  getOne(id: string) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  create(product: Product) {
    return this.http.post<Product>(
      this.url,
      product,
      this.options()
    );
  }

  update(id: string, product: Product) {
    return this.http.put<Product>(
      `${this.url}/${id}`,
      product,
      this.options()
    );
  }

  delete(id: string) {
    return this.http.delete(
      `${this.url}/${id}`,
      this.options()
    );
  }
}