import { products } from "../data/products.js";
import { searchItem } from "../utils/productUtils.js";

async function getProducts() {
    let allproduct = await new Promise((success) => {
        setTimeout(() => {
            success(products)
        }, 2000)
    });
    return allproduct;
}


getProducts().then((data) => {
    let sInput = document.getElementById("find");
    let pcontainer = document.getElementById("pbox");

    sInput.addEventListener("input", (event) => {
        let sValue = event.target.value;
        let result = searchItem(data, sValue);
        pcontainer.innerHTML = "";

        result.forEach((product) => {
            pcontainer.innerHTML += `
<div class="product-card">
    <div class="product-image">
        <img src="${products.images}" alt="${products.name}">
    </div>
    <h3>${products.name}</h3>
    <div class="product-info">
        <span class="rating">
            ⭐${products.rating}
        </span>
        <span class="stock">
            In Stock</span>
    </div>
    <div class="price">
        ₹${products.price.toLocaleString("en-IN")}
    </div>
    <div class="buttons">
        <button class="cart-btn">
            <i class="fa-solid fa-cart-shopping"></i>
            Add to Cart
        </button>
        <button class="buy-btn">
            Buy Now
        </button>
    </div>
</div>`
        })
    })
});

async function getProductById(id) {
    let product = await new Promise((success,error)=>{
        setTimeout(()=>{
            let result = products.find(p=> p.id === id);
            if(result){
                success(result);
            }
            else{
                error("Product not Found")
            }
        },1000)
    })
    return product;
}
getProductById(3).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});

async function placeOrder(cart) {
    let result = await new Promise((ressolve,reject)=>{
        setTimeout(()=>{
            let success = Math.random() >0.5;
            if(success){
                ressolve("Order Placed Successfully........");
            }
            else{
                reject("Order Failed........")
            }
        },2000)
    });
    return result;
}
placeOrder(products).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})