import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  color: string;
  category: string;
  price: number;
}
@Component({
  selector: 'app-hover-state',
  imports: [CurrencyPipe],
  templateUrl: './hover-state.component.html',
  styles: ``,
})
export class HoverStateComponent {
  products: Product[] = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: 2999 },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: 1999 },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: 99 },
  ];
}
