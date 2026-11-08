import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';
import {
  ProductsService,
  Product
} from '../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <section class="hero">
      <h1>Discover Mini Store</h1>
      <p>Explore our product collection.</p>
    </section>

    @if (auth.isLoggedIn()) {
      <section class="editor">
        <h2>
          {{ editingId ? 'Edit Product' : 'Create Product' }}
        </h2>

        <form (ngSubmit)="save()">
          <input
            name="name"
            [(ngModel)]="form.name"
            placeholder="Product name"
            required
          >

          <textarea
            name="description"
            [(ngModel)]="form.description"
            placeholder="Description"
            required
          ></textarea>

          <input
            name="price"
            [(ngModel)]="form.price"
            type="number"
            min="0"
            placeholder="Price"
            required
          >

          <input
            name="category"
            [(ngModel)]="form.category"
            placeholder="Category"
            required
          >

          <input
            name="imageUrl"
            [(ngModel)]="form.imageUrl"
            placeholder="Image URL (optional)"
          >

          <div class="actions">
            <button type="submit">
              {{ editingId ? 'Update' : 'Create' }}
            </button>

            <button
              type="button"
              class="secondary"
              (click)="reset()"
            >
              Clear
            </button>
          </div>
        </form>
      </section>
    }

    @if (error) {
      <p class="error">{{ error }}</p>
    }

    @if (message) {
      <p class="success">{{ message }}</p>
    }

    <h2>Our Products</h2>

    <section class="grid">
      @for (p of products; track p._id) {
        <article class="card">
          @if (p.imageUrl) {
            <img [src]="p.imageUrl" [alt]="p.name">
          } @else {
            <div class="placeholder">ART</div>
          }

          <div class="card-body">
            <small>{{ p.category }}</small>
            <h3>{{ p.name }}</h3>
            <p>{{ p.price }} COP</p>

            <a [routerLink]="['/products', p._id]">
              View Details
            </a>

            @if (auth.isLoggedIn()) {
              <div class="actions">
                <button
                  type="button"
                  (click)="edit(p)"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="danger"
                  (click)="remove(p._id)"
                >
                  Delete
                </button>
              </div>
            }
          </div>
        </article>
      } @empty {
        <p>No products available yet.</p>
      }
    </section>
  `
})
export class Products implements OnInit {
  private api = inject(ProductsService);
  auth = inject(AuthService);

  products: Product[] = [];
  error = '';
  message = '';
  editingId: string | null = null;

  form: Product = this.emptyProduct();

  ngOnInit() {
    this.load();
  }

  emptyProduct(): Product {
    return {
      name: '',
      description: '',
      price: 0,
      category: '',
      imageUrl: ''
    };
  }

  load() {
    this.api.getAll().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: () => {
        this.error = 'Unable to load products';
      }
    });
  }

  save() {
    this.error = '';
    this.message = '';

    const request = this.editingId
      ? this.api.update(this.editingId, this.form)
      : this.api.create(this.form);

    request.subscribe({
      next: () => {
        this.message = 'Product saved successfully';
        this.reset();
        this.load();
      },
      error: (err) => {
        this.error =
          err.error?.message ||
          err.error?.errors?.[0]?.msg ||
          'Unable to save product';
      }
    });
  }

  edit(product: Product) {
    this.editingId = product._id || null;
    this.form = { ...product };

    window.scrollTo(0, 0);
  }

  remove(id?: string) {
    if (!id) return;

    if (!confirm('Delete this product?')) return;

    this.api.delete(id).subscribe({
      next: () => {
        this.message = 'Product deleted successfully';
        this.load();
      },
      error: () => {
        this.error = 'Unable to delete product';
      }
    });
  }

  reset() {
    this.editingId = null;
    this.form = this.emptyProduct();
  }
}