import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	editProduct = {};
	error: string;

  constructor(private productService: ProductService,
  	private router: Router,
  	private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params=>{
  		const id = params.get('id');
  		this.productService.findProduct(id).subscribe(product=>{
  			this.editProduct = product;
  		})
  	})
  }
  newEdit(){
  	console.log(this.editProduct);
  	let observable = this.productService.editProduct(this.editProduct);
  	observable.subscribe((data)=>{
  		if(this.error){
  			console.log("ERROR IN EDIT");
  		}
  		else{
  			console.log("CONFIRMED EDIT", data);
  			this.editProduct = {title: '', price: '', image: '' };
  			this.router.navigate(['/products']);

  		}
  	})
  }
}
