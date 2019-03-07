'use strict';

let sendRequest = (method = 'GET', data) => {
    $.ajax({
        url: 'http://localhost:3000/products',
        method,
        data
    }).done((result) => {
        if (result === 'ok') {
            console.log('Done');
        } else {
            const products = JSON.parse(result);
            placeProducts(products);
            sortProducts()
        }
    });
}
let post = () => {
    console.log('post');
}
let addToLs = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let getFromLs = (key) => JSON.parse(localStorage.getItem(key));