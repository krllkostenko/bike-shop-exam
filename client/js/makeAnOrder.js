'use strict';
let addToCart = () => {
    $('[id^="addToCart"]').click((event) => {
        $('.emptyCart').html('');
        let cart = getCart();
        const element = $(event.target);
        const elementId = element.data('id');
        let products = getFromLs('products');

        for (let i in products) {
            if (products[i].id === elementId) {
                if (products[i] !== cart[i]) {
                    products[i].amount = 1;
                    cart.push(products[i]);
                    addToLs('cart', cart);
                    $(`#addToCart-${products[i].id}`).prop('disabled', true);
                    $(`#addToCart-${products[i].id}`).val('In cart');
                }
            }
        }
        showCart();
        modalActions();
    });
}
let createCart = () => {
    let cart = [];
    addToLs('cart', cart);
}
let getCart = () => getFromLs('cart');

let showCart = () => {
    $('#cart').modal({keyboard: false, backdrop: 'static'});
    let productsInCart = getFromLs('cart');
    for (let i in productsInCart) {
        let productsInfo = `<div><p>${productsInCart[i].name} ${productsInCart[i].model} - $${productsInCart[i].price}  (${productsInCart[i].amount})<br>Product ID: ${productsInCart[i].id}</br></div>`;
        createCartSlot(productsInfo, productsInCart[i].id);
    }
    $('#continue-shopping').click(() => {
        $('.your-order').html('');
        addToLs('cart', productsInCart);
    });
    increaseAmount();
    decreaseAmount();
}

let increaseAmount = () => {
    let cart = getCart();
    for (let i in cart) {
        $(`#increaseAmount-${cart[i].id}`).click(() => {
            cart[i].amount += 1;
            addToLs('cart', cart);
            $('.order-slot').html('');
            showCart();
        });
    }
}
let decreaseAmount = () => {
    let cart = getCart();
    for (let i in cart) {
        $(`#decreaseAmount-${cart[i].id}`).click(() => {
            if (cart[i].amount > 1) {
                cart[i].amount -= 1;
                addToLs('cart', cart);
                $('.order-slot').html('');
                showCart();
            } else {
                $(`#addToCart-${cart[i].id}`).prop('disabled', false);
                $(`#addToCart-${cart[i].id}`).val('Add to cart');
                cart.splice(i, 1);
                addToLs('cart', cart);
                $('.order-slot').html('');
                showCart();
            }
        });
    }
}
