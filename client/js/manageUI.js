'use strict';
let createButton = (parent, elementID, btnClass, buttonValue, buttonId) => {
    let element = $('<input>', {
        type: 'button',
        value: buttonValue,
        'data-id': elementID,
        class: btnClass,
        id: buttonId,
    });
    parent.append(element);
}
let createCartSlot = (productsInfo, productID) => {
    let orderSlot = $('<div>', {class: 'row order-slot'});
    let orderDetails = $('<div>', {class: 'col-md-9'});
    let cartButtons = $('<div>', {class: 'col-md-3'});
    orderSlot.append(orderDetails, cartButtons);
    orderDetails.append(productsInfo);
    createButton(cartButtons, [], 'btn btn-info', '+', `increaseAmount-${productID}`);
    createButton(cartButtons, [], 'btn btn-danger', '-', `decreaseAmount-${productID}`)
    $('.your-order').append(orderSlot);
}
let modalActions = () => {
    $('#proceed').click(() => {
        $('.ordering-form').fadeIn();
        $('#checkout').show();
        $('#proceed').hide();
    });

    $('#continue-shopping').click(() => {
        $('.ordering-form').hide();
        $('#checkout').hide();
        $('#proceed').show();
    });
}
let viewCart = () => $('.open-cart').click(() => showCart());
let getProductName = (brand, model) => `${brand} ${model}`;
let getImage = (parent, imageSrc) => {
    let image = new Image(200, 200);
    image.src = imageSrc;
    parent.append(image);
}
let makeAnAlert = (alertType) => {
    alertType.fadeIn();
    setTimeout(()=>{
        alertType.fadeOut();
    },2500)
}