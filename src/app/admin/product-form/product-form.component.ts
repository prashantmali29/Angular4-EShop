import { Component, OnInit } from '@angular/core';
import {CategoryService} from './../../category.service';
import {ProductService} from './../../product.service';
import {Router,ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  categories$;
  addedProduct;
  imageURL;
  product ={};
  productId;
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router :Router,
    private route :ActivatedRoute ) { 
    this.categories$ = categoryService.getAllCategory();
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId && this.productId != "new"){
     this.productService.getProductById(this.productId).take(1).subscribe(p => this.product = p);
    }
  }

  

  save(product){
    if(this.productId && this.productId != "new"){
      product.id = this.productId;
    }
   this.productService.saveProduct(product).subscribe(
      (res) => {
       this.router.navigate(['/admin/products']);
      },
      resErr => {
        
      }
    );
  }

  delete(){
    if(!confirm("Are you Confirm to Delete this Record")) return;
     this.productService.deleteProductById(this.productId).subscribe(
      (res) => {
       this.router.navigate(['/admin/products']);
      },
      resErr => {
        
      }
     );
  }

}
