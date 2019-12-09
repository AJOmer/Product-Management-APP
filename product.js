const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ProductManagement', {useNewUrlParser: true});
require('../config/mongoose.js');
const Product = mongoose.model('Product');

module.exports = {
	index: function(request, response){
		Product.find({}, (error, product)=>{
			if(error){
				console.log("INDEX ERROR");
				response.json(error);
			}
			else{
				console.log("INDEX WORKING");
				// console.log(product);
				response.json({product: product});
			}
		})
	},
	addproduct: function(request, response){
		Product.create({
			title: request.body.title,
			price: request.body.price,
			image: request.body.image
		}, (error, newProduct)=>{
			if(error){
				console.log(error);
				console.log("ERROR IN POSTING"),
				response.json({message: "ERROR"});
			}
			else{
				console.log("SUCCESSFULLY ADDED");
				response.json({message: "Success"});
			}
		})
	},
	removeproduct: function(request, response){
		Product.deleteOne({
			_id: request.params.id}, (error, product)=>{
				if(error){
					console.log("ERROR IN DELETE");
					response.json(error);
				}
				else{
					console.log("DELETED");
					response.json(product);
				}
		})	
	},
	findOne: function(request, response){
		// console.log(request.params.id);
		// console.log(request.body);
		Product.findById(request.params.id, (error, product)=>{
				if(error){
					console.log(error);
					console.log("FINDING");
					response.json(error);
				}
				else{
					response.json(product);
				}
			})
	},
	editproduct: function(request, response){
		console.log("EDIING", request.params.id);
		Product.findByIdAndUpdate(request.params.id,{name: request.body.name, price: request.body.price, image: request.body.image },(error, product)=>{
			if(error){
				console.log("ERROR HERE IN FINDING");
				console.log(error);
				response.json(error);
			}
			else{
				console.log(product);
				response.json(product)
			}
		})
	}
}