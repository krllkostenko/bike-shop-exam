"use strict";var addToCart=function(){$('[id^="addToCart"]').click(function(t){$(".emptyCart").html("");var a=getCart(),e=$(t.target).data("id"),o=getFromLs("products");for(var n in o)o[n].id===e&&o[n]!==a[n]&&(o[n].amount=1,a.push(o[n]),addToLs("cart",a),$("#addToCart-".concat(o[n].id)).prop("disabled",!0),$("#addToCart-".concat(o[n].id)).val("In cart"));showCart(),modalActions()})},createCart=function(){addToLs("cart",[])},getCart=function(){return getFromLs("cart")},showCart=function(){$("#cart").modal({keyboard:!1,backdrop:"static"});var t=getFromLs("cart");for(var a in t){var e="<div><p>".concat(t[a].name," ").concat(t[a].model," - $").concat(t[a].price,"  (").concat(t[a].amount,")<br>Product ID: ").concat(t[a].id,"</br></div>");createCartSlot(e,t[a].id)}$("#continue-shopping").click(function(){$(".your-order").html(""),addToLs("cart",t)}),increaseAmount(),decreaseAmount()},increaseAmount=function(){var a=getCart(),t=function(t){$("#increaseAmount-".concat(a[t].id)).click(function(){a[t].amount+=1,addToLs("cart",a),$(".order-slot").html(""),showCart()})};for(var e in a)t(e)},decreaseAmount=function(){var a=getCart(),t=function(t){$("#decreaseAmount-".concat(a[t].id)).click(function(){1<a[t].amount?a[t].amount-=1:($("#addToCart-".concat(a[t].id)).prop("disabled",!1),$("#addToCart-".concat(a[t].id)).val("Add to cart"),a.splice(t,1)),addToLs("cart",a),$(".order-slot").html(""),showCart()})};for(var e in a)t(e)},sendRequest=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"GET",a=1<arguments.length?arguments[1]:void 0;$.ajax({url:"http://localhost:3000/products",method:t,data:a}).done(function(t){"ok"===t?console.log("Done"):(placeProducts(JSON.parse(t)),sortProducts())})},post=function(){console.log("post")},addToLs=function(t,a){return localStorage.setItem(t,JSON.stringify(a))},getFromLs=function(t){return JSON.parse(localStorage.getItem(t))};function placeProducts(t){for(var a in $(".prod").html(""),t){var e=$(".product-"+(parseInt(a)+1)),o=new Image(300,300);o.src=t[a].image,e.append(o);$("<h5>",{text:"".concat(t[a].name," ").concat(t[a].model," – $").concat(t[a].price)}).appendTo(e);createButton(e,t[a].id,"viewDetails","View Details","viewDetails-".concat(t[a].id)),createButton(e,t[a].id,"addToCart","Add to cart","addToCart-".concat(t[a].id)),addToLs("products",t)}addToCart(),viewDetails(),validate()}var viewDetails=function(){$('[id^="viewDetails-"]').click(function(t){var a=$(t.target).data("id"),e=getFromLs("products");for(var o in e)a===e[o].id&&($("#view-details").modal("show"),$(".details").html(""),getImage($(".details-image"),e[o].image),$(".viewDetails-name").append(getProductName(e[o].name,e[o].model)),$(".details-brand").append(e[o].name),$(".details-model").append(e[o].model),$(".details-price").append("$".concat(e[o].price)),$(".details-country").append(e[o].country),$(".details-year").append(e[o].year),$(".details-about").append(e[o].about))})},createButton=function(t,a,e,o,n){var r=$("<input>",{type:"button",value:o,"data-id":a,class:e,id:n});t.append(r)},createCartSlot=function(t,a){var e=$("<div>",{class:"row order-slot"}),o=$("<div>",{class:"col-md-9"}),n=$("<div>",{class:"col-md-3"});e.append(o,n),o.append(t),createButton(n,[],"btn btn-info","+","increaseAmount-".concat(a)),createButton(n,[],"btn btn-danger","-","decreaseAmount-".concat(a)),$(".your-order").append(e)},modalActions=function(){$("#proceed").click(function(){$(".ordering-form").fadeIn(),$("#checkout").show(),$("#proceed").hide()}),$("#continue-shopping").click(function(){$(".ordering-form").hide(),$("#checkout").hide(),$("#proceed").show()})},viewCart=function(){return $(".open-cart").click(function(){return showCart()})},getProductName=function(t,a){return"".concat(t," ").concat(a)},getImage=function(t,a){var e=new Image(200,200);e.src=a,t.append(e)},makeAnAlert=function(t){t.fadeIn(),setTimeout(function(){t.fadeOut()},2500)},sortProducts=function(){var t=getFromLs("products");$(".brand-sorting").click(function(){sortByBrand(t)}),$(".lower-price").click(function(){sortByLowestPrice(t)}),$(".higher-price").click(function(){sortByHighestPrice(t)})},sortByBrand=function(t){$(".prod").fadeOut(),t.sort(function(t,a){return t.name>a.name?1:-1}),setTimeout(function(){placeProducts(t),$(".prod").fadeIn(),addToLs("products",t)},400)},sortByLowestPrice=function(t){$(".prod").fadeOut(),t=t.sort(function(t,a){return t.price-a.price}),setTimeout(function(){placeProducts(t),$(".prod").fadeIn()},400)},sortByHighestPrice=function(t){$(".prod").fadeOut(),t=t.sort(function(t,a){return a.price-t.price}),setTimeout(function(){placeProducts(t),$(".prod").fadeIn()},400)},validationPatterns=function(){return{emailPattern:/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,addressPattern:/\w{1,}/,phoneNumberPattern:/\d/,cityPattern:/(?:[A-Z][a-z.-]+[ ]?)+/,statePattern:/^(?!Choose...$).*/,zipPattern:/^\d{5}$/}},validate=function(){var e=validationPatterns();$("#checkout").click(function(){var t=getInputValues();if(t.email.match(e.emailPattern)&&t.address.match(e.addressPattern)&&t.phoneNumber.match(e.phoneNumberPattern)&&t.city.match(e.cityPattern)&&t.state.match(e.statePattern)&&t.zip.match(e.zipPattern)){var a=getFromLs("cart");makeAnAlert($(".alert-success")),sendRequest("POST",t,a),addToLs("cart",[]),setTimeout(function(){$("#cart").modal("hide"),$(".order-slot").html(""),$('[id^="addToCart"]').prop("disabled",!1),$('[id^="addToCart"]').val("Add to cart")},1500)}else makeAnAlert($(".alert-danger"))})},getInputValues=function(){return{email:$("#inputEmail").val(),address:$("#inputAddress").val(),phoneNumber:$("#inputPhone").val(),city:$("#inputCity").val(),state:$("#inputState").val(),zip:$("#inputZip").val()}};$(document).ready(function(){sendRequest(),createCart(),viewCart()});