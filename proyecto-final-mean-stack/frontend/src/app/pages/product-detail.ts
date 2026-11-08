import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  ProductsService,
  Product
} from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="detail">
      <a routerLink="/products">Back to Products</a>

      @if (product) {
        @if (product.imageUrl) {
          <img
            [src]="product.imageUrl"
            [alt]="product.name"
          >
        } @else {
          <div class="placeholder">ART</div>
        }

        <h2>{{ product.name }}</h2>

        <p>
          <strong>Category:</strong>
          {{ product.category }}
        </p>

        <p>{{ product.description }}</p>

        <h3>{{ product.price }} COP</h3>
      }

      @if (error) {
        <p class="error">{{ error }}</p>
      }
    </section>
  `
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(ProductsService);

  product: Product | null = null;
  error = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.error = 'Product ID not found';
      return;
    }

    this.api.getOne(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: () => {
        this.error = 'Product not found';
      }
    });
  }
}