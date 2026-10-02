import { products } from "../data/products.js";

export let cart = [
    {productId: 1,quantity: 2},
    {productId: 2,quantity: 3},
    {productId: 3,quantity: 4},
    {productId: 4,quantity: 2},
    {productId: 5,quantity: 5},
    {productId: 6,quantity: 1},
    {productId: 7,quantity: 2},
    {productId: 8,quantity: 4},
    {productId: 9,quantity: 6}
]

// Add Product to Cart
export function addToCart(productId){
    let product = products.find(p => p.id === productId)
    let ivalue = cart.findIndex(item => item.productId === productId);
    if(ivalue === -1){
        cart.push({
            productId: productId,
            quantity:1
        });
    }
    else{
        if(cart[ivalue].quantity < product.stock){
            cart[ivalue].quantity ++;
        }
        else{
            console.log("Cannot add more... Stock Limit reached..........");
        }
    }
    return cart;
}
console.log(addToCart(3));

// RemoveFrom Cart
export function removeFromCart(productId){
    let index = cart.findIndex(item => item.productId === productId);
    if(index !== -1){
        cart.splice(index,1)
    }
    return cart;
}
console.log(removeFromCart(5));

// Increase the cart Quantity
export function increaseQuantity(productId){
    let index = cart.findIndex(item => item.productId === productId);
    if(index !== -1){
        cart[index].quantity++;
    }
    return cart;
}
console.log(increaseQuantity(5));

// Decrease the cart Quantity
export function decreaseQuantity(productId){
    let index = cart.findIndex(item => item.productId === productId);
    if(index !== -1){
        cart[index].quantity--;
    }
    return cart;
}
console.log(decreaseQuantity(5));

// calculate cart total
export function calculateCartTotal(){
    let sum = 0;
    for(let item of cart){
        let prod = products.find(p => p.id === item.productId);
        sum = sum +(prod.price * item.quantity);
    }
    return sum
}
console.log(calculateCartTotal());

// Clear the cart
export function cleartCart(){
    cart.length = 0;
    return cart;
}
console.log(cleartCart());