'use strict';

function placeProducts(products) {
    $('.prod').html('');
    for (let i in products) {
        let parentEl = $('.product-' + (parseInt(i) + 1));
        let image = new Image(300, 300);
        image.src = products[i].image;
        parentEl.append(image);
        let element = $('<h5>', {
            text: `${products[i].name} ${products[i].model} – $${products[i].price}`,
        }).appendTo(parentEl);
        createButton(parentEl, products[i].id, 'viewDetails', 'View Details', `viewDetails-${products[i].id}`);
        createButton(parentEl, products[i].id, 'addToCart', 'Add to cart', `addToCart-${products[i].id}`);
        addToLs('products', products);
    }
    addToCart();
    viewDetails();
    validate();

}

let viewDetails = () => {
    $('[id^="viewDetails-"]').click((event) => {
        const element = $(event.target);
        const elementId = element.data('id');
        let products = getFromLs('products');
        for (let i in products) {
            if (elementId === products[i].id) {
                $('#view-details').modal('show');
                $('.details').html('');
                getImage($('.details-image'), products[i].image);
                $('.viewDetails-name').append(getProductName(products[i].name, products[i].model));
                $('.details-brand').append(products[i].name);
                $('.details-model').append(products[i].model);
                $('.details-price').append(`$${products[i].price}`);
                $('.details-country').append(products[i].country);
                $('.details-year').append(products[i].year);
                $('.details-about').append(products[i].about);
            }
        }
    });
}



