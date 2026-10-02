let p1 = new Promise(() => {
});
console.log(p1);

let p2 = new Promise((resolve, reject) => {
    console.log("Hello I am ressolved!!!!");
});
console.log(p2);

let p3 = new Promise((resolve,reject)=>{
    console.log("Hello I am rejected......");
    reject("OOPS I am rejected");
});
console.log(p3);

let p4 = new Promise((resolve,reject)=>{
    let pass = false;
    if(pass){
        resolve([89,50,21,69,79]);
    }
    else{
        reject("You have failed the exam");
    }
})
console.log(p4);