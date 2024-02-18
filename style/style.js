



const allBtn = document.getElementsByClassName('btn-jewel');
let count = 0;
let sum = 0;
let sub = 1;
for(const btn of allBtn){
    btn.addEventListener("click", function(e){
        count = count + 1;
        const calcu = document.getElementById('calculate').innerText = count;

        const ticketName = e.target.innerText;    

const jewel = document.getElementById('add-price');
const li = document.createElement('li');
const p = document.createElement('p')
const p2 = document.createElement('p')
const p3 = document.createElement('p')
p.innerText = ticketName;
p2.innerText= "Economy"
p3.innerText= "550"
li.appendChild(p);
li.appendChild(p2);
li.appendChild(p3);
jewel.appendChild(li);
jewel.appendChild(li);
jewel.appendChild(li);


const addPrice = document.getElementById('total-price').innerText;
const converted = parseInt(addPrice);
const sum = converted + parseInt(p3.innerText);

document.getElementById('total-price').innerText= sum;

const grandTotal = document.getElementById('grand-total');
grandTotal.innerText = sum;



const currentSeat = document.getElementById('available-seat').innerText;
const convert = parseInt(currentSeat)
const sub = convert - 1;
const finalresult = document.getElementById('available-seat').innerText = sub;
console.log(finalresult);



    })
}


const batton = document.getElementById('apply-button');
batton.addEventListener("click", function(){

 const couponElement = document.getElementById("input-field").value;
    
if(couponElement === "NEW15"){
    const discountAmount = document.getElementById("dis-total");
    const changes = parseInt(discountAmount)
    const grandTotal = document.getElementById('grand-total');
grandTotal.innerText = sum;
const result = grandTotal.innerText * 0.15;
changes.innerText = result;


if(couponElement === "Couple 20"){
const discountAmount = document.getElementById("dis-total");

const result = grandTotal.innerText * 0.2;
changes.innerText = result;


    }else{
        // alert("Invalid Coupon");
    }
}
else{
    // alert("Invalid Coupon");
}
})


// applyCoupon.addEventListener("click",function(){
// const inputArea = document.getElementById('input-field');
//     //  const couponCode = inputArea.split(" ").join("").toUpperCase("");
//      console.log(inputArea)

//      if(couponCode === "NEW15"){
//         const grandTotal = document.getElementById('grand-total');
//       const discountAmount = sum * 0.15;
//       grandTotal.innerText = discountAmount;
//      } 
//      else{
//         alert("Invalid Coupon");
//      } 
// })