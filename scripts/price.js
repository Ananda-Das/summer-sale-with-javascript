let totalPrice = 0;
function calculatePrice(target){
    //get the item Name
    const itemName = target.childNodes[3].childNodes[7].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    const seletedItemContainer = document.getElementById('added-item');
    // show the item name
    seletedItemContainer.appendChild(li);

    //get the item price
    const price = target.childNodes[3].childNodes[9].innerText.split(" ")[0];
    const itemPrice = parseFloat(price);
    
    //calculate total price
    totalPrice += itemPrice;
    
    //show total price
    const totalPriceShow = document.getElementById('total-price');
    totalPriceShow.innerText = totalPrice;


    //active purchase btn
    const purchaseButton = document.getElementById('purchase-btn');
    if(totalPrice > 0){
        purchaseButton.removeAttribute("disabled");
    }

    // active coupon btn 
    const couponButton = document.getElementById('coupon-btn');
    if(totalPrice > 200){
        couponButton.removeAttribute("disabled");
    }
}


function calculateDiscount(){
    // take the discount field value 
    const discounField = document.getElementById('cupon-code');
    const discountFieldValue = discounField.value;

    //find the discount amount
    if(discountFieldValue == 'SELL200'){
        const discountAmount = (totalPrice * 20) / 100;
        
        // show the discount amount
        const discountAmountShow = document.getElementById('discount-amount');
        discountAmountShow.innerText = discountAmount;

        // calculate New total Price
        const newTotalPrice = totalPrice - discountAmount;

        //show the new total amount
        const newTotalfield = document.getElementById('new-total');
        newTotalfield.innerText = newTotalPrice;
    }
}

