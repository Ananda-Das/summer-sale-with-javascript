let totalPrice = 0.00;
function calculatePrice(target){
    //get the item Name
    const itemName = target.childNodes[3].childNodes[7].innerText;
   
    // li.innerText = itemName;
    const seletedItemContainer = document.getElementById('added-item');
    const count = seletedItemContainer.childElementCount;

    const p = document.createElement('p');
    // const li = document.createElement('li');
    p.innerHTML = `${count + 1}. ${itemName}`;
    // show the item name
    seletedItemContainer.appendChild(p);

    //get the item price
    const price = target.childNodes[3].childNodes[9].innerText.split(" ")[0];
    const itemPrice = parseFloat(price);
    
    //calculate total price
    totalPrice += itemPrice;
    
    //show total price
    const totalPriceShow = document.getElementById('total-price');
    totalPriceShow.innerText = totalPrice.toFixed(2);


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

//remove price after click go home button
function clearPrice(){
    //remove the item names
    const clearItemNames = document.getElementById('added-item');
    clearItemNames.innerText ='';

    //remove the total price
    const clearTotalPrice = document.getElementById('total-price');
    totalPrice = 0;
    clearTotalPrice.innerText = '00.00';

    
}

