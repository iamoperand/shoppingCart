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

			if(cartList[i].quantity > 0){
				//Element object is created and assigned to newList
				newList = $('<tr data-row='+i+'><td>' + cartList[i].name + '</td><td>' +
				cartList[i].price + '</td><td>' + cartList[i].size + '</td><td data-quantity='+i+'>' + cartList[i].quantity + 
				'</td><td data-price='+i+'>' + cartList[i].quantity * cartList[i].price + 
				'</td><td class="text-center"><img src="./images/plus.png" width="32" data-id='+
				i+' class=" button-add" /></td><td class="text-center"><img src="./images/negative.png" width="32" data-id='+i+
				' class="button-sub" /></td>'+
				'<td class="text-center"><img src="./images/delete.png" width="32" data-id='+i+' class="button-del" /></td></tr>');
				 

				console.log(newList);

				//The element object is then prepended to <tbody>
				newList.prependTo('tbody');
			}
			 
	}

	//Click 
	$('.button-add').click(function(){
		console.log("this object (Array element)", $(this)[0]);
		console.log("this object (Array)", $(this));
		var parenting = $(this).parent();

		var parent = $(this)[0].parentElement;
		var ancestor = parent.parentNode;
		var quantityElement = ancestor.children[3];
		console.log("quantityElement: ", quantityElement);
		console.log(cartList);
		console.log(cartList[parseInt($(this).attr('data-id'))].quantity)
		cartList[parseInt($(this).attr('data-id'))].quantity++;
		console.log(parseInt($(this).attr('data-id')));
		saveProducts();
		
        refreshProducts();
                
			
	});
	$('.button-sub').click(function(){
		console.log("this object (Array element)", $(this)[0]);
		console.log("this object (Array)", $(this));
		var parenting = $(this).parent();

		var parent = $(this)[0].parentElement;
		var ancestor = parent.parentNode;
		var quantityElement = ancestor.children[3];
		console.log("quantityElement: ", quantityElement);
		
		cartList[parseInt($(this).attr('data-id'))].quantity--;
		if(cartList[parseInt($(this).attr('data-id'))].quantity <= 0){
			ancestor.remove();
		}
		
		console.log(parseInt($(this).attr('data-id')));
		saveProducts();
		
        refreshProducts();	

		//quantityElement.innerText--;
			
	});
	$('.button-del').click(function(){
		console.log("this object (Array element)", $(this)[0]);
		console.log("this object (Array)", $(this));
		cartList[parseInt($(this).attr('data-id'))].quantity = 0;
		var parenting = $(this).parent();

		var parent = $(this)[0].parentElement;
		var ancestor = parent.parentNode;
		ancestor.remove();
		saveProducts();
		
        refreshProducts();	

		
		
			
	});
}
	




});