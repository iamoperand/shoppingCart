var cartList = [];
 function saveProducts () {
            localStorage.setItem('cartList', JSON.stringify(cartList));
            console.log('Getting saved into local storage');
        }
        function retrieveProducts() {
        	console.log('Getting retrieved');
            cartList = JSON.parse(
                localStorage.getItem('cartList') ? localStorage.getItem('cartList') : '[]');
        }