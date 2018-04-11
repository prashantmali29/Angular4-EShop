import { Component, OnInit } from '@angular/core';
import {ProductService} from './../../product.service';
import {Product} from    '../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: Product[] ;
  filterProduct:any[];
  constructor(private productService: ProductService) { 
    productService.getAllProduct().subscribe(
      products => this.filterProduct = this.products = products
    );
  }

  ngOnInit() {
  }

  filter(query: string){
    this.filterProduct = (query.toLocaleLowerCase()) ? this.products.filter(p => p.label.toLocaleLowerCase().includes(query)):this.products;
   
  }
  

}
