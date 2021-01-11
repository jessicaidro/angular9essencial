import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
  CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
