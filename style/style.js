



const allBtn = document.getElementsByClassName('btn-active');
let count = 0;
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
p3.innerText= "550 Taka"
li.appendChild(p);
li.appendChild(p2);
li.appendChild(p3);
jewel.appendChild(li);
jewel.appendChild(li);
jewel.appendChild(li);


const totalPrice = 

    })
}