export {searchProducts} from './utils/productUtils.js';
export {addToCart,removeFromCart} from './utils/cartUtils.js';
import { searchProducts,addToCart,removeFromCart } from './modules/index.js';
import { products } from './data/products.js';

// console.log(searchProducts("phone"));
// console.log(addToCart(3));
// console.log(removeFromCart(3));
let divTag = document.getElementById("box");
products.forEach (product =>{
    box.innerHTML += `
    <div class="card">
        <img src="${product.images}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: ${product.category}</p>
        <p>Rating: ${product.rating}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick = "addToCart(${product.id})">Add to Cart</button>
    </div>`
})