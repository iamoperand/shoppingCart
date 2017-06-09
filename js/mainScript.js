var cartList = [];
 function saveProducts () {
            for(var product of cartList){
            	console.log('checking');
            	console.log("product ", product);
            	
            	localStorage.setItem('cartList', JSON.stringify(cartList));
            
            }
            console.log('Getting saved into local storage');
        }
        function retrieveProducts() {
        	console.log('Getting retrieved');
            cartList = JSON.parse(
                localStorage.getItem('cartList') ? localStorage.getItem('cartList') : '[]');
        }

         function refreshProducts () {
            
            //Getting refreshed
            //retrieveProducts();
            console.log('View getting refreshed');
            cartList = JSON.parse(
                localStorage.getItem('cartList') ? localStorage.getItem('cartList') : '[]');

            var newList = '';
		console.log('Inside refresh products: ', cartList.length);
		
		for(var i=0; i<cartList.length;i++){
			 //console.log("checking inner text ", parseInt($('[data-quantity='+i+']')[0].innerText));
			

			//if(parseInt($('[data-quantity='+i+']')[0].innerText) <= 0){
			//	console.log('quantity less than or equal to zero now. Changing view');
			//	console.log($('[data-row='+i+']')[0]);
				
			//}else{
				console.log(cartList[i].quantity);
				if(cartList[i].quantity > 0){
					console.log($('[data-quantity='+i+']')[0].innerText);
			$('[data-quantity='+i+']')[0].innerText = cartList[i].quantity;
			$('[data-price='+i+']')[0].innerText = cartList[i].quantity * cartList[i].price;
        
				}
				
			//}
			
        }
    }