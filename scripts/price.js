let totalPrice = 0.00;

//get the field values
function fieldValues(field){
    const fieldValue = document.getElementById(field);
    return fieldValue;
}

//calculate the total price
function calculatePrice(target){
    //get the item Name
    const itemName = target.childNodes[3].childNodes[7].innerText;
   
    const seletedItemContainer = fieldValues('added-item');
    const count = seletedItemContainer.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${itemName}`;

    // show the item name
    seletedItemContainer.appendChild(p);

    //get the item price
    const price = target.childNodes[3].childNodes[9].innerText.split(" ")[0];
    const itemPrice = parseFloat(price);
    
    //calculate total price
    totalPrice += itemPrice;
    
    //show total price
    setElementInnerText('total-price',totalPrice.toFixed(2));

    //show the total amount
    setElementInnerText('new-total',totalPrice.toFixed(2));


    //active purchase btn
    const purchaseButton = fieldValues('purchase-btn');
    if(totalPrice > 0){
        purchaseButton.removeAttribute("disabled");
    }

    // active coupon btn 
    const couponButton = fieldValues('coupon-btn');
    if(totalPrice >= 200){
        couponButton.removeAttribute("disabled");
    }
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


function calculateDiscount(){
    // take the discount field value 
    const discounField = document.getElementById('cupon-code');
    const discountFieldValue = discounField.value;

    //find the discount amount
    if(discountFieldValue == 'SELL200'){
        //set discount amount
        const discountAmount = (totalPrice * 20) / 100;
        
        // show the discount amount
        setElementInnerText('discount-amount',discountAmount.toFixed(2));

        // calculate New total Price
        const newTotalPrice = totalPrice - discountAmount;

        //show the new total amount
        setElementInnerText('new-total',newTotalPrice.toFixed(2));
    }else{
        alert('Please Insert Valid Coupon Code');
    }
}

//remove price after click go home button
function clearPrice(){
    //remove the item names
    setElementInnerText('added-item','');

    //remove the total price
    totalPrice = 0;
    setElementInnerText('total-price', '00.00');

    //remove the discount price
    setElementInnerText('discount-amount', '00.00');
    
    //remove the total price
    setElementInnerText('new-total', '00.00');

    //clear the discount input field
    const couponFieldValue = document.getElementById('cupon-code');
    couponFieldValue.value = '';

    //deactive purchase btn
    const purchaseButton = fieldValues('purchase-btn');
    purchaseButton.disabled = true;

    //deactive coupon btn 
    const couponButton = fieldValues('coupon-btn');
    couponButton.disabled = true;

}

