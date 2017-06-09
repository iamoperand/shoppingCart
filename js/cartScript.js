
$(function(){
	retrieveProducts();

	var listElement = $('#productsTable');

	var tbody = listElement.children[1];

	
	console.log("cartlist length is: " + cartList.length);

	if(!cartList.length){
		//list is empty currently
	}else{
		var newList = '';
		for(var i=0; i<cartList.length;i++){
			 newList = $('<tr><td>' + cartList[i].name + '</td><td>' +
			cartList[i].price + '</td><td>' + cartList[i].size + '</td><td>' + cartList[i].quantity + 
			'</td><td>' + cartList[i].quantity * cartList[i].price + '</td></tr>');

			newList.prependTo('tbody');
	}
}
	var tr = document.createElement('tr');




});