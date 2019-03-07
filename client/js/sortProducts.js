'use strict';
let sortProducts = () => {
    let products = getFromLs('products');
    $('.brand-sorting').click(() => {
        sortByBrand(products);
    });
    $('.lower-price').click(() => {
        sortByLowestPrice(products);
    });
    $('.higher-price').click(() => {
        sortByHighestPrice(products);
    });

}
let sortByBrand = (products) => {
    $('.prod').fadeOut();
    products.sort((firstObj, secondObj) => (firstObj.name > secondObj.name) ? 1 : -1);
    setTimeout(() => {
        placeProducts(products);
        $('.prod').fadeIn();
        addToLs('products', products);
    }, 400)
}
let sortByLowestPrice = (products) => {
    $('.prod').fadeOut();
    products = products.sort((firstObj, secondObj) => firstObj.price - secondObj.price);
    setTimeout(() => {
        placeProducts(products);
        $('.prod').fadeIn();
    }, 400)
}
let sortByHighestPrice = (products) => {
    $('.prod').fadeOut();
    products = products.sort((firstObj, secondObj) => secondObj.price - firstObj.price);
    setTimeout(() => {
        placeProducts(products);
        $('.prod').fadeIn();
    }, 400)
}