import { products } from "../data/products.js";

// ----------search the Products----------
export function searchProducts(searchValue){
    return products.filter(product =>{
        return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })
}

// ---------Filter the Product based on category price range and rating------
export function filterByCategory(category){
    return products.filter(product =>{
        return product.category.toLowerCase() === category.toLowerCase()
    })
}

export function filterByPrice(price){
    return products.filter(product =>{
        return product.price == price
    })
}


export function filterByrating(rating){
    return products.filter(product=>{
        return product.rating == rating
    })
}

// --------- Sorting the products according to their price
export function sortByPricehightolow(){
    return products.sort((a,b)=>{
        return b.price - a.price
    })
}


export function sortByPricelowtohigh(){
    return products.sort((a,b)=>{
        return a.price - b.price
    })
}


// -------Sorting the products according to their Rating
export function sortByRatinghightolow(){
    return products.sort((a,b)=>{
        return b.rating - a.rating
    })
}


// Total Products 
export function totalProducts(){
    return products.length
}


// Average of the Total Price
export function averagePrice(){
    let sum = products.reduce((e,a)=>{
        return e+a.price;
    },0);
    return sum/products.length;
}

// Highest Price of the Products
export function highestPrice(){
    return products.reduce((high,product)=>{
        if(product.price > high){
            return product.price
        }
        return high;
    },0)
}

// Lowest Price of the products
export function lowestPrice(){
    let low = products[0].price;
    for(let i=1; i<products.length; i++){
        if(products[i].price < low){
            low = products[i].price;
        }
    }
    return low;
}