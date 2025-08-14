import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  color: string;
  category: string;
  price: number;
  available: boolean;
  accessories: boolean;
  weight: number;
}
@Component({
  selector: 'app-overflow-scrolling',
  imports: [CurrencyPipe],
  templateUrl: './overflow-scrolling.component.html',
  styles: ``,
})
export class OverflowScrollingComponent {
  products: Product[] = [
    {
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: 2999,
      available: true,
      accessories: true,
      weight: 3.0,
    },
    {
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: 1999,
      available: true,
      accessories: false,
      weight: 1.0,
    },
    {
      name: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: 99,
      available: true,
      accessories: true,
      weight: 3.2,
    },
    {
      name: 'Apple Watch',
      color: 'Black',
      category: 'Accessories',
      price: 199,
      available: false,
      accessories: false,
      weight: 0.12,
    },
    {
      name: 'Apple iMac',
      color: 'Silver',
      category: 'PC',
      price: 2999,
      available: false,
      accessories: false,
      weight: 7.0,
    },
    {
      name: 'Apple AirPods',
      color: 'White',
      category: 'Accessories',
      price: 399,
      available: false,
      accessories: true,
      weight: 38,
    },
  ];
}
