const product = require('../controller/product.js');
// const reviews = require('../controller/reviews.js');
const path = require('path');

module.exports = function(app){
	app.get('/product', (request, response)=>{
		product.index(request, response);
	});
	app.post('/product/new', (request, response)=>{
		product.addproduct(request, response);
	});
	app.delete('/product/delete/:id', (request, response)=>{
		product.removeproduct(request, response);
	});
	app.put('/product/:id', (request, response)=>{
		console.log("HERE AT PUT");
		console.log(request.params);
		console.log(request.body);
		product.editproduct(request, response);
	});
	app.get('/product/:id', (request, response)=>{
		product.findOne(request, response);
	});
	app.post('/reviews/:productId', (request, response)=>{
		reviews.addreview(request, response);
	})
 	app.all("*", (req,res,next) => {
  	res.sendFile(path.resolve("./public/dist/public/index.html"))
	});
}



module.exports = {
  // get all resource
  index(_request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.PayloadTooLarge).json(error));
  },
  // create resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.status(Http.Created).json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(Http.Unauthorized).json(errors);
      })
  },


        .then(book => response.status(Http.Created).json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);

        response.status(Http.Unauthorized).json(errors);






        // const errors = Object.keys(error.errors).map(key=>error.errors[key].message)