



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
const finalResult = document.getElementById('available-seat').innerText = sub;
console.log(finalResult);



    })
}




const applyButton = document.getElementById('apply-button');
applyButton.addEventListener("click", function() {
  const couponElement = document.getElementById("input-field").value;
  console.log(couponElement);

  const discountAmountElement = document.getElementById("dis-total");
  const grandTotalElement = document.getElementById('grand-total');

  if (couponElement === "NEW15") {
    const grandTotal = parseInt(grandTotalElement.innerText);
    const result = grandTotal * 0.15;
console.log(result);

    discountAmountElement.innerText = result;
    
    document.getElementById("grand-total").innerText = grandTotal - result;
    

  } else if (couponElement === "Couple 20") {
    const grandTotal = parseInt(grandTotalElement.innerText);
    const result = grandTotal * 0.2;
    discountAmountElement.innerText = result;
    document.getElementById("grand-total").innerText = grandTotal - result;

  } else {
    alert("Invalid Coupon");
  }
});


// this is scroll bar part

document.getElementById('scroll-bar').addEventListener('click', function() {
    // Scroll to the specified section smoothly
    document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' });
});