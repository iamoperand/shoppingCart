
//Constructor function for creating object
function Items(name, price, size, quantity){
    this.name = name;
    this.price = price;
    this.size = size;
    this.quantity = quantity;
}

       
$(function(){
    //retrieveProducts() is called at the start to fill cartList array with string from localStorage 
    retrieveProducts();

    //9 is the number of products in the Shopping Web-App
    for(var i=1; i<=9;i++){

        //Click event handlers for AddToCart buttons identified by ['data-id=<id>']
        $('[data-id = ' + i + ']').click(function () {
           
            

            //Get the siblings of the button-element (AddToCart Button)
            var siblings = $(this).siblings();
            var name, price, size, quantity;
            
            price = siblings[0].innerText;
            size = siblings[2].innerText;
            quantity = siblings[4].value;

            if (isNaN(quantity)) 
            {
                alert("Quantity must be a number");
                return false;
            }

            if(quantity <= 0){
                alert("Quantity must be a positive number");
                return false;   
            }

            if(quantity%1){
                alert("Quantity can't be a float");
                return false;
            }
            
            //Accessing the name of the product which is the sibling of the parent element
            var parent = siblings.parent();
            //console.log('Parent: ' ,  parent);
            

            name = parent.siblings()[0].innerText;
            
            //console.log('Price of the product is: ' + price);
            //console.log('Size: ' + size);
            //console.log('Quantity: ' + quantity);
            //console.log('Name: ' + name);

            
            //For-loop for checking if the cartList array contains the product initially
            for(var j=0; j<cartList.length; j++){
                
                //Flag to check the same product exists in the array or not
                var flag = 0;
                console.log('product is: ', cartList[j]);
                console.log(cartList[j].name);
                if(cartList[j].name == name){
                    console.log('item found in cartList at: ', j);
                    console.log('Initially quantity is: ', cartList[j].quantity);
                    cartList[j].quantity = (parseInt(cartList[j].quantity) + parseInt(quantity)).toString();
                    console.log('At the end, quantity is: ', cartList[j].quantity);
                    flag = 1;
                }
                    
            }
            
            //If not found, then create a new object and push it into the array
            if(!flag){
                var newItem = new Items(name, price, size, quantity);
                console.log("This is new item: " , newItem);
                cartList.push(newItem);
            }

            alert("Successfully added " + quantity +" products to cart");
            //Push the changes to localStorage as well
            saveProducts();
        });
    }


});