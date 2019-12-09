import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	newProduct = {};


  constructor(private route: ActivatedRoute,
  private router: Router,
  private productService: ProductService) { }

  ngOnInit() {
  }
  submitNew(){
  	let observable = this.productService.addProduct(this.newProduct);
  	observable.subscribe((data:any)=>{
  		if(data.error){
  			console.log("ERROR IN ADDING");
  		}
  		else{
  			console.log(this.newProduct);
  			this.newProduct = { title: '', price: '', image: ''};
  			this.router.navigate(['/products'])
  		}
  	})
  }

}
