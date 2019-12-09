import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	newProduct: any;
    title = 'Product Manager';

    constructor(
    	private productService: ProductService,
    	private route: ActivatedRoute,
    	private router: Router){}

    ngOnInit(){
    	this.router.navigate(['/products'])
    }
}
