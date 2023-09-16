let input=document.querySelectorAll("input");
let producttitle=document.querySelector(".producttitle");
let alltotal=document.querySelector(".total");
let add=document.querySelector('.added');
let button=document.querySelector('button');
let elements=document.querySelector('.elements');
let tbody=document.querySelector('tbody');

products=[];
let gettotal=()=>{
let price=input[1].value;
let tax=input[2].value;
let discount=input[3].value;
let taxCost=+price*(+tax/100);
input[4].value=(+taxCost + +price)- +discount;
} 
for( let i = 0; i<input.length;i++){
    input[i].addEventListener("keyup",gettotal);
}
let craeteobject= () => {
    let newproduct = {
title:input[0].value,   
price:input[1].value,
    tax:input[2].value,
    discount:input[3].value,
    total:input[4].value,
    count:input[5].value,
    department:input[6].value,
    };
   products.push(newproduct);
//    console.log(products);
   clearinputs();
   randerData();
localStorage.setItem("products",JSON.stringify(products));
products=JSon.parse(localStorage.products);
};

let clearinputs=()=>{
    input[0].value=""   
    input[1].value="" 
        input[2].value="" 
        input[3].value="" 
        input[4].value="" 
        input[5].value="" 
        input[6].value="" 
}
button.addEventListener('click',craeteobject);
// console.log( newproduct);
let randerData=()=>{
    let table="";
    for(let i=0;i<products.length;i++){
        table+=`
        <tr>
        <td>${i+1}</td>
        <td>${products[i].title}</td>
        <td>${products[i].price}</td>
        <td>${products[i].tax}</td>
        <td>${products[i].discount}</td>
        <td>${products[i].total}</td>
        <td>${products[i].department}</td>
        </tr>
        `
    }
    tbody.innerHTML=table;
}
randerData();

