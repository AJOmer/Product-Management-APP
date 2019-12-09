import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
  	this.getProduct();
  }
  getProduct(){
  	let observable = this.productService.getProduct();
  	observable.subscribe(data=>{
  		console.log(data);
  		this.product = data['product'];
  	})
  }
  deleteProduct(id: string){
  	let observable = this.productService.deleteProduct(id);
  	observable.subscribe(data=>{
  		console.log("DELETED THIS");
  		this.getProduct();
  	})
  }

}
