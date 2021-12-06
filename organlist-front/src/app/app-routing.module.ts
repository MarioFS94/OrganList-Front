import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: ListComponent },
  { path: 'products/:idList', component: ProductListComponent },
  { path: 'new/lists', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
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
