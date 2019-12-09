const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Enter name"],
		minlength: [2, "Minimum 2 chracters"],
		validate: {
			validator: function(value){
				return /^[a-zA-Z0-9_.-]*$/i.test(value)
			},
			message: "Letters and Numbers Only"
		}
	},
	Review: {
		type: String,
		required: [true, "enter comment"],
		minlength: [5, "Minimum 5 chracters"],
		validate: {
			validator: function(value){
				return /^[a-zA-Z0-9_.-]*$/i.test(value)
			},
			message: "Letters and Numbers Only"
		}
	}
})
const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required"],
		minlength: [3, "Minimum 3 chracters"],
		validate: {
			validator: function(value){
				return /^[a-zA-Z0-9_.-\s]*$/i.test(value)
			},
			message: "Letters and Numbers Only"
		}
	},
	price: {
		type: Number,
		required: [true, "Price must be included"],
		validate: {
			validator: function(value){
				return /^[+]?\d+([.]\d+)?$/i.test(value)
			},
			message: "Numbers only"
		}
	},
	image: {
		type: String
	},
	comment: [ReviewSchema]
})

const Review = mongoose.model('Review', ReviewSchema)
const Product = mongoose.model('Product', ProductSchema)