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
    const ItemPriceElement = document.getElementById('price');
    const ItemPriceString = ItemPriceElement.innerText;
    const ItemPrice = parseFloat(ItemPriceString);
    
    //calculate total price
    totalPrice += ItemPrice;
    
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


