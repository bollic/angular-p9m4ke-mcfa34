import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})


export class CartComponent implements OnInit {
  items;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}



export class CartService {

  items = [];
  constructor() {  
    //window.alert('Ciaaaaaaaaaaaaaaaaaaaaaaaaaoooooo!');
    }

    addToCart(product) {
       
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}