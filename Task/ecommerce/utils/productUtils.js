import { products } from "../data/products.js";

export  function searchItem(products,searchValue){
   return products.filter((product)=> 
    product.name.toLowerCase().includes(searchValue.toLowerCase())
)
}