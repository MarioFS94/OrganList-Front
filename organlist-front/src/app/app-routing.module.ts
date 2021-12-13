import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SelectProductsComponent } from './components/select-products/select-products.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'products/:idList', component: ProductListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new/lists', component: CreateListComponent },
  { path: 'new/product/:idList', component: NewProductComponent },
  { path: 'products/lists/:idList', component: SelectProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'home' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
