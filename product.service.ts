import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProduct(){
  	console.log("FETCHING PRODUCTS");
  	return this.http.get('/product');
  }
  addProduct(newProduct){
  	console.log("ADDING PRODUCT");
  	return this.http.post('/product/new', newProduct);
  }
  deleteProduct(id:string){
  	console.log("DELETED");
  	return this.http.delete(`/product/delete/${id}`);
  }
  editProduct(editProduct){
  	console.log(editProduct);
  	console.log(editProduct._id);
  	return this.http.put(`/product/${editProduct._id}`, editProduct);
  }
  findProduct(id:string){
  	return this.http.get(`/product/${id}`);
  }
  addReview(newReview, productId){
  	return this.http.post(`/reviews/${productId}`, newReview);
  }

}
