
document.getElementById('donation').addEventListener('click',function(){
    const donationBtnn=document.getElementById('donation');
    donationBtnn.style.background="#b4f461";
   

    const history= document.getElementById('history');
    history.style.background="transparent"
    


})

document.getElementById('history').addEventListener('click',function(){
    const donationBtnn=document.getElementById('history');
    donationBtnn.style.background="#b4f461";
   

   const history= document.getElementById('donation');
    history.style.background="transparent"
})
// universal

const donateMoney=document.getElementById('donate-money').value;
    const donateMoneyNumber=parseFloat(donateMoney);
    console.log(donateMoney)
   

// donate korla taka berba 
document.getElementById('donate-now-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmountt=document.getElementById('donate-amount');
    const donateAmount=donateAmountt.innerText;
    
    const donateAmountNumber= parseInt(donateAmount);
    const donateMoney=document.getElementById('donate-money').value;
    const donateMoneyNumber=parseInt(donateMoney);


    
    if( donateMoneyNumber > 0 || donateMoneyNumber ==="number"  ){
        const totalDonation= donateMoneyNumber+donateAmountNumber;
        donateAmountt.innerText=totalDonation;
        my_modal_5.showModal()
    }
    else{
       
        alert("Invalid donation amount")
       
    
    }

   
})

// donate korla taka komba

document.getElementById('donate-now-btn').addEventListener('click',function(){
    const amount=document.getElementById('amount');
    const amountText=amount.innerText;
    const amountNumber=parseInt(amountText);
    

    const donateMoney=document.getElementById('donate-money').value;
    const donateMoneyNumber=parseInt(donateMoney);
    console.log(donateMoneyNumber);

    


    if( donateMoneyNumber > 0|| donateMoneyNumber ==="number"  ){
        const leftAmount=amountNumber-donateMoneyNumber;

        amount.innerText=leftAmount;
    }
   

})



document.getElementById('history').addEventListener('click',function(){
    document.getElementById('donation-history-container').classList.remove('hidden');
    document.getElementById('donation-one-container').classList.add('hidden');
    document.getElementById('donation-two-container').classList.add('hidden');
    document.getElementById('donation-three-container').classList.add('hidden');
    document.getElementById('donation-four-container').classList.add('hidden');

})


document.getElementById('donation').addEventListener('click',function(){
    document.getElementById('donation-history-container').classList.add('hidden');
    document.getElementById('donation-one-container').classList.remove('hidden');
    document.getElementById('donation-two-container').classList.remove('hidden');
    document.getElementById('donation-three-container').classList.remove('hidden');
    document.getElementById('donation-four-container').classList.remove('hidden');
    

})



// History ta joma hoba kottto taka patano holo?
document.getElementById('donate-now-btn').addEventListener('click',function(){
    const donateMoney=document.getElementById('donate-money').value;
    const donateMoneyNumber=parseFloat(donateMoney);
    console.log(donateMoney)
    const div=document.createElement('div');

    div.innerHTML=`
     <div class="w-full px-5 py-4 border-gray-600 border-2 rounded-2xl mt-4">
      <h1 class="text-2xl"> ${donateMoneyNumber}Taka is donated for Flood at Noakhali, Bangladesh.</h1>
      <p class="pt-3">Date:${formattedDate} Time:${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
      </div>
    `
    const container= document.getElementById('donation-history-container');
    container.appendChild(div);
})


const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
console.log(`Current Time: ${formattedTime}`);


const noww = new Date();
const day = noww.getDate();
const month = noww.getMonth() + 1; // Months are 0-indexed
const year = noww.getFullYear();

const formattedDate = `${day}/${month}/${year}`; // Format as DD/MM/YYYY
console.log(`Current Date: ${formattedDate}`);


// Doantion two start here


// donate korla taka berba 
document.getElementById('donate-now-btn-two').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmountt=document.getElementById('donate-amount-two');
    const donateAmount=donateAmountt.innerText;
    
    const donateAmountNumber= parseInt(donateAmount);
    const donateMoney=document.getElementById('donate-money-two').value;
    const donateMoneyNumber=parseInt(donateMoney);


    
    if( donateMoneyNumber > 0 || donateMoneyNumber ==="number"  ){
        const totalDonation= donateMoneyNumber+donateAmountNumber;
        donateAmountt.innerText=totalDonation;
        my_modal_5.showModal()
    }
    else{
       
        alert("Invalid donation amount")
       
    
    }

   
})


// donate korla taka komba

document.getElementById('donate-now-btn-two').addEventListener('click',function(){
    const amount=document.getElementById('amount');
    const amountText=amount.innerText;
    const amountNumber=parseInt(amountText);
    

    const donateMoney=document.getElementById('donate-money-two').value;
    const donateMoneyNumber=parseInt(donateMoney);
    console.log(donateMoneyNumber);

    


    if( donateMoneyNumber > 0|| donateMoneyNumber ==="number"  ){
        const leftAmount=amountNumber-donateMoneyNumber;

        amount.innerText=leftAmount;
    }
   

})


// History ta joma hoba kottto taka patano holo?
document.getElementById('donate-now-btn-two').addEventListener('click',function(){
    const donateMoney=document.getElementById('donate-money-two').value;
    const donateMoneyNumber=parseFloat(donateMoney);
    console.log(donateMoney)
    const div=document.createElement('div');

    div.innerHTML=`
     <div class="w-full px-5 py-4 border-gray-600 border-2 rounded-2xl mt-4">
      <h1 class="text-2xl"> ${donateMoneyNumber}Taka is donated for Flood Relief in Feni,Bangladesh</h1>
      <p class="pt-3">Date:${formattedDate} Time:${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
      </div>
    `
    const container= document.getElementById('donation-history-container');
    container.appendChild(div);
})


// donation three start here
// donate korla taka berba 
document.getElementById('donate-now-btn-three').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmountt=document.getElementById('donate-amount-three');
    const donateAmount=donateAmountt.innerText;
    
    const donateAmountNumber= parseInt(donateAmount);
    const donateMoney=document.getElementById('donate-money-three').value;
    const donateMoneyNumber=parseInt(donateMoney);


    
    if( donateMoneyNumber > 0 || donateMoneyNumber ==="number"  ){
        const totalDonation= donateMoneyNumber+donateAmountNumber;
        donateAmountt.innerText=totalDonation;
        my_modal_5.showModal()
    }
    else{
       
        alert("Invalid donation amount")
       
    
    }

   
})


// donate korla taka komba

document.getElementById('donate-now-btn-three').addEventListener('click',function(){
    const amount=document.getElementById('amount');
    const amountText=amount.innerText;
    const amountNumber=parseInt(amountText);
    

    const donateMoney=document.getElementById('donate-money-three').value;
    const donateMoneyNumber=parseInt(donateMoney);
    console.log(donateMoneyNumber);

    


    if( donateMoneyNumber > 0|| donateMoneyNumber ==="number"  ){
        const leftAmount=amountNumber-donateMoneyNumber;

        amount.innerText=leftAmount;
    }
   

})


// History ta joma hoba kottto taka patano holo?
document.getElementById('donate-now-btn-three').addEventListener('click',function(){
    const donateMoney=document.getElementById('donate-money-three').value;
    const donateMoneyNumber=parseFloat(donateMoney);
    console.log(donateMoney)
    const div=document.createElement('div');

    div.innerHTML=`
     <div class="w-full px-5 py-4 border-gray-600 border-2 rounded-2xl mt-4">
      <h1 class="text-2xl"> ${donateMoneyNumber} Taka donate for Injured in the Quota Movement</h1>
      <p class="pt-3">Date:${formattedDate} Time:${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
      </div>
    `
    const container= document.getElementById('donation-history-container');
    container.appendChild(div);
})


// donation three end here
// donation four start here
// donate korla taka berba 
document.getElementById('donate-now-btn-four').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmountt=document.getElementById('donate-amount-four');
    const donateAmount=donateAmountt.innerText;
    
    const donateAmountNumber= parseInt(donateAmount);
    const donateMoney=document.getElementById('donate-money-four').value;
    const donateMoneyNumber=parseInt(donateMoney);


    
    if( donateMoneyNumber > 0 || donateMoneyNumber ==="number"  ){
        const totalDonation= donateMoneyNumber+donateAmountNumber;
        donateAmountt.innerText=totalDonation;
        my_modal_5.showModal()
    }
    else{
       
        alert("Invalid donation amount")
       
    
    }

   
})


// donate korla taka komba

document.getElementById('donate-now-btn-four').addEventListener('click',function(){
    const amount=document.getElementById('amount');
    const amountText=amount.innerText;
    const amountNumber=parseInt(amountText);
    

    const donateMoney=document.getElementById('donate-money-four').value;
    const donateMoneyNumber=parseInt(donateMoney);
    console.log(donateMoneyNumber);

    


    if( donateMoneyNumber > 0|| donateMoneyNumber ==="number"  ){
        const leftAmount=amountNumber-donateMoneyNumber;

        amount.innerText=leftAmount;
    }
   

})


// History ta joma hoba kottto taka patano holo?
document.getElementById('donate-now-btn-four').addEventListener('click',function(){
    const donateMoney=document.getElementById('donate-money-four').value;
    const donateMoneyNumber=parseFloat(donateMoney);
    console.log(donateMoney)
    const div=document.createElement('div');

    div.innerHTML=`
     <div class="w-full px-5 py-4 border-gray-600 border-2 rounded-2xl mt-4">
      <h1 class="text-2xl"> ${donateMoneyNumber} Taka Donate for Flood at As Sunnah Foundation</h1>
      <p class="pt-3">Date:${formattedDate} Time:${formattedTime} GMT +0600 (Bangladesh Standard Time)</p>
      </div>
    `
    const container= document.getElementById('donation-history-container');
    container.appendChild(div);
})


// donation four end here


