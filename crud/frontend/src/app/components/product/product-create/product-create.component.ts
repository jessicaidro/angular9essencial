import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private produtctService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.produtctService.showMessage('Produto criado');
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
