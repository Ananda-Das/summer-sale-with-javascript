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
}

function calculateDiscount(){
    // take the discount field value 
    const discounField = document.getElementById('cupon-code');
    const discountFieldValue = discounField.value;

    //find the discount amount
    if(discountFieldValue == 'SELL200'){
        const discountAmount = (totalPrice * 20) / 100;
        console.log(discountAmount);
    }
}