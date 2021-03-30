import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  constructor(private produtctService: ProductService,
    private router: Router) { 
      
    }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.produtctService.create(this.product).subscribe(() => {
    this.produtctService.showMessage('Produto criado')
    this.router.navigate(['/products'])
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
