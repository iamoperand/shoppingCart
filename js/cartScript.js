$(function(){
	retrieveProducts();
	
	console.log("cartlist length is: " + cartList.length);

	if(!cartList.length){
		//list is empty

		$('.container').html('<div class="text-center" style="font-size:4rem;font-weight: 700">'+
			'<div>Your shopping cart is empty!</div><a href="./index.html" style="text-decoration: none;font-size: 3rem;">Shop Now</a></div> ');

	}else{
		var newList = '';
		for(var i=0; i<cartList.length;i++){

			if(cartList[i].quantity > 0){
				//Element object is created and assigned to newList
				newList = $('<tr data-row='+i+'><td>' + cartList[i].name + '</td><td>&#8377; ' +
				 (+cartList[i].price).toLocaleString() + '</td><td>' + cartList[i].size + '</td><td data-quantity='+i+'>' + cartList[i].quantity + 
				'</td><td data-price='+i+'>&#8377; ' + (cartList[i].quantity * (cartList[i].price)).toLocaleString() + 
				'</td><td class="text-center"><img src="./images/plus.png" width="32" data-id='+
				i+' class=" button-add" /></td><td class="text-center"><img src="./images/negative.png" width="32" data-id='+i+
				' class="button-sub" /></td>'+
				'<td class="text-center"><img src="./images/delete.png" width="32" data-id='+i+' class="button-del" /></td></tr>');
				 

				console.log(newList);

				//The element object is then prepended to <tbody>
				newList.prependTo('tbody');
			}
			 
	}

	//Click event handler for increasing the quantity
	$('.button-add').click(function(){
		
		
		cartList[parseInt($(this).attr('data-id'))].quantity++;
		console.log(parseInt($(this).attr('data-id')));
		saveProducts();
		
		//refresh the view
        refreshProducts();
	});

	//Click event handler for decreasing the quantity
	$('.button-sub').click(function(){
		//console.log("this object (Array element)", $(this)[0]);
		//console.log("this object (Array)", $(this));
		
		var parent = $(this)[0].parentElement;
		var ancestor = parent.parentNode;
		var quantityElement = ancestor.children[3];
		console.log("quantityElement: ", quantityElement);
		
		cartList[parseInt($(this).attr('data-id'))].quantity--;
		//If the quantity becomes zero after decrementing, then remove the element
		if((cartList[parseInt($(this).attr('data-id'))]).quantity <= 0){
			ancestor.remove();
			//console.log("cartList.length at the end: ", cartList.length);
			cartList.splice(parseInt($(this).attr('data-id')), 1);
			//console.log("cartList.length at the end: ", cartList.length);


			//Re-draw the content inside the container (when cartList.length = 0) which currently contains the table element
			$('.container').html('<div class="text-center" style="font-size:4rem;font-weight: 700">'+
			'<div>Your shopping cart is empty!</div><a href="./index.html" style="text-decoration: none;font-size: 3rem;">Shop Now</a></div> ');
		}
		
		
		saveProducts();
		refreshProducts();	
	});

	//Click event handler for deleting the product
	$('.button-del').click(function(){
		//console.log("this object (Array element)", $(this)[0]);
		//console.log("this object (Array)", $(this));

		//assign 0 to the quantity property of cartList[i]
		cartList[parseInt($(this).attr('data-id'))].quantity = 0;
		
		var parent = $(this)[0].parentElement;
		var ancestor = parent.parentNode;
		ancestor.remove();
		//console.log('Inside delete: ', parseInt($(this).attr('data-id'))+1);
		cartList.splice(parseInt($(this).attr('data-id')), 1);
		
		if(!cartList.length){

			//Re-draw the content inside the container (when cartList.length = 0) which currently contains the table element
			$('.container').html('<div class="text-center" style="font-size:4rem;font-weight: 700">'+
			'<div>Your shopping cart is empty!</div><a href="./index.html" style="text-decoration: none;font-size: 3rem;">Shop Now</a></div> ');
		}
		saveProducts();
		refreshProducts();	
	});
}
	




});