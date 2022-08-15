window.onload = function(){
 
    var cartItems = {
        picture: "",
        productName: "",
        quantity: "",
        price: "",
        closePicture: "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/Close-128.png"
    };
    
    var cart = document.getElementById('cart');
    var appleButton = document.getElementById('apple');
    var bananaButton = document.getElementById('banana');
    var pineappleButton = document.getElementById('pineapple');
    var counter = 0;
    var cartIcon = document.getElementById('cartIcon');
    var cartChild = document.getElementById('cartChild');
    var totalPrice = document.getElementById('totalPrice');
    
    
    appleButton.onclick  = addToCart; 
    bananaButton.onclick = addToCart;
    pineappleButton.onclick = addToCart; 
    
    
    
    function addToCart(){
        cartItems.picture = this.parentNode.children[1].getAttribute('src');
        cartItems.productName = this.parentNode.children[0].innerHTML;
        cartItems.quantity = this.parentNode.children[3].children[0].value;
        cartItems.price = this.parentNode.children[2].children[0].innerHTML; 
        
        
        var div = document.createElement('div');
        div.classList.add("cartElement");
        var img = document.createElement('img');
        img.classList.add("productPicture");
        img.setAttribute("src",cartItems.picture);
        var h4 = document.createElement('h4');
        h4.innerHTML = cartItems.productName;
        var span1 = document.createElement('span');
        span1.innerHTML = cartItems.quantity + " kg";
        var div2 = document.createElement('div');
        div2.classList.add("price");
        div2.innerHTML = cartItems.price*cartItems.quantity + " $";
        var img2 = document.createElement('img');
        img2.classList.add("close");
        img2.setAttribute("src",cartItems.closePicture);
            
        //console.log(div2);
        
        cart.insertBefore(div, cartChild);
        div.appendChild(img);
        div.appendChild(h4);
        div.appendChild(span1);
        div.appendChild(div2);
        div.appendChild(img2);
        
        
        var close = document.getElementsByClassName('close');
        for( i = 0; i < close.length; i++){   
            close[i].onclick = function(){
                var parent = this.parentNode.parentNode;
                var child = this.parentNode;
                parent.removeChild(child)
                counter--;
                circle.innerHTML = counter;
                totalSum()
            }
        }
        
        var circle = document.getElementById('circle');
        counter++;
        circle.innerHTML = counter;
        
        function totalSum(){
            var summ = 0
            var elementsPrice = document.getElementsByClassName('price');      
            for(i = 0; i < elementsPrice.length; i++){
                summ += parseInt(elementsPrice[i].innerHTML);
                totalPrice.innerHTML = summ + " $";
            }
            if(elementsPrice.length == 0){
                summ = 0;
                totalPrice.innerHTML = summ + " $";
            }
        }
        totalSum()
        //console.log(elementsPrice[i]);
    }
    
    cartIcon.onclick = function openCart(){
        if (cart.style.display == "inline-block"){
            cart.style.display = "none";
        }
        else{
            cart.style.display = "inline-block";
        }
    }
    
    
    
     
    
    
}