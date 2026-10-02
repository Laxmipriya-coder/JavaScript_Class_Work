import { products } from "../data/products.js";

async function getProducts() {
    let allproduct = await new Promise((success) => {
        setTimeout(() => {
            success(products)
        }, 2000)
    });
    return allproduct;
}
getProducts().then((data)=>{
    console.log("Promise Fullfilled...........");
})

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
getProductById(25).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});