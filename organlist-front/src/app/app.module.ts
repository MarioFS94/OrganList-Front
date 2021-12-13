import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './components/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { SelectProductsComponent } from './components/select-products/select-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ListComponent,
    BackButtonDirective,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CreateListComponent,
    NewProductComponent,
    SelectProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
