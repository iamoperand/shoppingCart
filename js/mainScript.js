var cartList = [];

function retrieveProducts() {
	console.log('Retrieving products');
    //Convert string into objects and store them in cartList
    cartList = JSON.parse(localStorage.getItem('cartList') ? localStorage.getItem('cartList') : '[]');
}

function saveProducts() {
	if(cartList.length > 0){
		for(var product of cartList){
    	console.log("Product: ", product);

    	//Convert each product object into string format for storage in localStorage
    	localStorage.setItem('cartList', JSON.stringify(cartList));
    	}
	}else{
    	localStorage.setItem('cartList', '');
    }
    	console.log('Saving products into the localStorage');
	}
    

        

function refreshProducts() {

	console.log('View getting refreshed');

	//Call retrieveProducts() to re-assign the updated values of quantity into the cartList array  
	retrieveProducts();


	console.log('Inside refreshProducts: cartList.length is-> ', cartList.length);


	//Check if quantity is greater than zero and dynamically assign it to the HTML Elements
	for(var i=0; i<cartList.length;i++){
		console.log("cartList[i].quantity: ", cartList[i].quantity);
		if(cartList[i].quantity > 0){
			console.log($('[data-quantity='+i+']')[0].innerText);
			$('[data-quantity='+i+']')[0].innerText = cartList[i].quantity;
			$('[data-price='+i+']')[0].innerHTML = '&#8377; ' + (cartList[i].quantity * cartList[i].price).toLocaleString();
		}
		

	}
}