// let  btncard=document.querySelector('#card_icon');
// let cart=document.querySelector('.cart'); 
// let  btn_close=document.querySelector('#close');
// // console.log(btn_close);

// btncard.addEventListener('click',()=>{
//     cart.style.display='block';
   

// })

// btn_close.addEventListener('click',()=>{
//     cart.style.display='none';
   
// })

//  document.addEventListener('DOMContentLoaded',loadfood);
// function loadfood(){
//     loadconent();
  
// }


// function loadconent(){

//     //remove food item
//     let btnRemove=document.querySelectorAll('.remove_cart');
//     btnRemove.forEach(btn=>{
//         btn.addEventListener('click',(e)=>{
//             // let title=this.parentElement.querySelector('#cart_title');
//             // console.log(title);
//             // itemList=itemList.filter(el=>el.title!=title);
//             e.target.parentElement.parentElement.remove();
//             loadconent();
           
//         })
//     }) 



// //product item change event
// let cart_quantity=document.querySelectorAll('.cart_quantity');
// cart_quantity.forEach(btn=>{
//     btn.addEventListener('change',(e)=>{
//         let quantity=e.target.value;
//         let price=e.target.parentElement.previousElementSibling.textContent;
//         let total=quantity*price;
//         e.target.parentElement.nextElementSibling.textContent=total;
     
//     })
// })

// //product cart 
// let add_cart = document.querySelectorAll('.add_cart'); // Use class instead of ID for multiple elements
// // console.log(add_cart);

// add_cart.forEach(btn => {
//     btn.addEventListener('click', addToCart); // Use a unique function name
// });



// upadtetotal();



// }




//  let itemList=[];


// function addToCart() {

//     // console.log(this.parentElement);
//     let title=this.parentElement.querySelector('.food_tittle').innerHTML;
//     let price=this.parentElement.querySelector('.food_price').innerHTML;
//     let imgSrc=this.parentElement.querySelector('.food_img').src;
//     let newproduct={title,
//         price,imgSrc}
//         if(itemList.find((el)=>el.title==newproduct.title)){
//             alert("product already added");
//             return;
//         }
//         else{
//             itemList.push(newproduct);
//             console.log(itemList);
//         }
        
        
     
  
//      let newproductElement=createCartProduct(title, price, imgSrc);
//     console.log(title);
//     let element=document.createElement('div');
//     element.innerHTML=newproductElement;
//    let cartBasket=document.querySelector('.cart_content');
//  cartBasket.append(element);
//  loadconent();

// }

// function createCartProduct(title,price,imgSrc){
//      return`
//      <div class="cart_box">
//      <img src="${imgSrc}" class="cart_img">
//      <div class="detali_box">
//          <div class="cart_food_title" id="cart_title">${title}</div>
//          <div class="price_box">
//              <div class="cart_price">${price}</div>
//          <div class="card_amt">${price}</div>
//          </div>
//          <input type="number" value="1" class="cart_quantity">
         
//      </div>
//      <i class="fa-solid fa-trash-alt remove_cart" id="btn_close"></i>
//  </div>
// `;
// }


// // function upadtetotal(){
// //     const cart_item=document.querySelectorAll('.cart_box');
// //     const totalvalue=document.querySelector('.total_price');
// //     let total=0;
// //     cart_item.forEach(el=>{
// //         let price=el.querySelector('.cart_price').textContent;
// //         let quantity=el.querySelector('.cart_quantity').value;
// //         total+=price*quantity;
// //         console.log(total);
// //         console.log(price);
// //         console.log(quantity);
// //     })

// //     totalvalue.innerHTML='RS.'+total;

// // }
// function upadtetotal() {
//     const cart_items = document.querySelectorAll('.cart_box');
//     const totalvalue = document.querySelector('.total_price');
//     let total = 0;
    
//     cart_items.forEach(el => {
//         let price = parseFloat(el.querySelector('.cart_price').textContent.replace(/[^0-9.-]+/g, ' '));
//         let quantity = parseInt(el.querySelector('.cart_quantity').value);
//         total += price * quantity;
        
//         console.log('Total so far:', total);
//         console.log('Price:', price);
//         console.log('Quantity:', quantity);
//     });
    
//     totalvalue.innerHTML = 'RS.' + total.toFixed(2);
// }


document.addEventListener('DOMContentLoaded', loadFood);

function loadFood() {
    loadContent();
}

let btncard = document.querySelector('#card_icon');
let cart = document.querySelector('.cart');
let btn_close = document.querySelector('#close');

btncard.addEventListener('click', () => {
    cart.style.display = 'block';
});

btn_close.addEventListener('click', () => {
    cart.style.display = 'none';
});

function loadContent() {
    // Remove food item
    let btnRemove = document.querySelectorAll('.remove_cart');
    btnRemove.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            itemList = itemList.filter(el => el.title !== e.target.parentElement.querySelector('.cart_food_title').textContent);
            updateTotal();
            loadContent(); // This ensures new remove buttons get event listeners
        });
    });

    // Product item change event
    let cart_quantity = document.querySelectorAll('.cart_quantity');
    cart_quantity.forEach(input => {
        input.addEventListener('change', (e) => {
            let quantity = e.target.value;
            let price = parseFloat(e.target.parentElement.querySelector('.cart_price').textContent.replace(/[^0-9.-]+/g, ''));
            let total = quantity * price;
            e.target.parentElement.querySelector('.card_amt').textContent = total.toFixed(2);
            updateTotal();
        });
    });

    // Add product to cart
    let add_cart = document.querySelectorAll('.add_cart');
    add_cart.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });

    updateTotal();
}

let itemList = [];

function addToCart() {
    let title = this.parentElement.querySelector('.food_tittle').innerHTML;
    let price = parseFloat(this.parentElement.querySelector('.food_price').innerHTML.replace(/[^0-9.-]+/g, ''));
    let imgSrc = this.parentElement.querySelector('.food_img').src;

    let newProduct = { title, price, imgSrc };

    if (itemList.find(el => el.title === newProduct.title)) {
        alert("Product already added");
        return;
    } else {
        itemList.push(newProduct);
    }

    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;
    let cartBasket = document.querySelector('.cart_content');
    cartBasket.append(element);
    loadContent();
}

function createCartProduct(title, price, imgSrc) {
    return `
     <div class="cart_box">
         <img src="${imgSrc}" class="cart_img">
         <div class="detail_box">
             <div class="cart_food_title" id="cart_title">${title}</div>
             <div class="price_box">
                 <div class="cart_price">${price.toFixed(2)}</div>
                 <div class="card_amt">${price.toFixed(2)}</div>
             </div>
             <input type="number" value="1" class="cart_quantity">
         </div>
         <i class="fa-solid fa-trash-alt remove_cart" id="btn_close"></i>
     </div>
    `;
}

function updateTotal() {
    const cart_items = document.querySelectorAll('.cart_box');
    const totalValue = document.querySelector('.total_price');
    const totalQuantityDisplay = document.querySelector('.total_quantity'); // Assuming you have a place to display total quantity
    let total = 0;
    let totalQuantity = 0;

    cart_items.forEach(el => {
        let price = parseFloat(el.querySelector('.cart_price').textContent.replace(/[^0-9.-]+/g, ''));
        let quantity = parseInt(el.querySelector('.cart_quantity').value);
        total += price * quantity;
        totalQuantity += quantity;
    });

    totalValue.innerHTML = 'RS.' + total.toFixed(2);
    if (totalQuantityDisplay) {
        totalQuantityDisplay.innerHTML = 'Total Quantity: ' + totalQuantity;
    }

const cart_count=document.querySelector('.card_count');
let count=itemList.length;
cart_count.innerHTML=count;
console.log(cart_count);
if(count==0) {
    cart_count.style.display='none';

}
else{
    cart_count.style.display='block';
}


}

