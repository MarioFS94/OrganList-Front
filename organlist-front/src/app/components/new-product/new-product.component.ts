import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductInterface } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  formReactive: FormGroup = new FormGroup({
    name: new FormControl(['', [Validators.required]]),
    description: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl('')
  });
  registerOK: boolean = false;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(newProduct: ProductInterface) {
    this.productService.insertProduct(newProduct).subscribe();
  }
}
