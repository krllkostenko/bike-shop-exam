'use strict';
let validationPatterns = () => {
    let patterns = {
        emailPattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
        addressPattern: /\w{1,}/,
        phoneNumberPattern: /\d/,
        cityPattern: /(?:[A-Z][a-z.-]+[ ]?)+/,
        statePattern: /^(?!Choose...$).*/,
        zipPattern: /^\d{5}$/,
    }
    return patterns;
}
let validate = () => {
    let pattern = validationPatterns();
    $('#checkout').click(() => {
        let inputValue = getInputValues();
        if (!inputValue.email.match(pattern.emailPattern) || !inputValue.address.match(pattern.addressPattern) || !inputValue.phoneNumber.match(pattern.phoneNumberPattern) || !inputValue.city.match(pattern.cityPattern) || !inputValue.state.match(pattern.statePattern) || !inputValue.zip.match(pattern.zipPattern)) {
            makeAnAlert($('.alert-danger'));
        } else {
            let cart = getFromLs('cart');
            makeAnAlert($('.alert-success'));
            sendRequest('POST', inputValue, cart);
            addToLs('cart',[]);
            setTimeout(() => {
                $('#cart').modal('hide');
                $('.order-slot').html('');
                $('[id^="addToCart"]').prop('disabled', false);
                $('[id^="addToCart"]').val('Add to cart');
            }, 1500);
        }
    });
}

let getInputValues = () => {
    const inputValues = {
        email: $('#inputEmail').val(),
        address: $('#inputAddress').val(),
        phoneNumber: $('#inputPhone').val(),
        city: $('#inputCity').val(),
        state: $('#inputState').val(),
        zip: $('#inputZip').val()
    }
    return inputValues;
}