import { Routes } from '@angular/router';

import { Login } from './pages/login';
import { Register } from './pages/register';
import { Products } from './pages/products';
import { ProductDetail } from './pages/product-detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: 'products/:id',
    component: ProductDetail
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];