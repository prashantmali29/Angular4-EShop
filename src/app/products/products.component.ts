import { Component, OnInit } from '@angular/core';
import {ProductService} from '.././product.service';
import {ActivatedRoute} from '@angular/router'
import {Product} from    './../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products : Product[] = [];
  filterProducts : Product[] = [];
  category:string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {
    productService.getAllProduct().subscribe(
      products => this.products = this.filterProducts = products
    );
    route.queryParamMap.subscribe( params => {
      this.category = params.get('category');
      this.filterProducts = (this.category) ? this.products.filter( p => p.category === this.category) : this.filterProducts 
    });

  }



}
