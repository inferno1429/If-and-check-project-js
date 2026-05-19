

const mycheckbox = document.getElementById("mycheckbox")
const visa = document.getElementById("visa")
const master = document.getElementById("master")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("mysubmit")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")

submit.onclick = function(){
    if(mycheckbox.checked){
        subresult.textContent =  `You are subscribed`
        
    }else{
        subresult.textContent =  `You are NOT subscribed`
    }

    if(visa.checked){
        paymentresult.textContent = `You are paying with visa`
    }
    else if(master.checked){
        paymentresult.textContent = `You are paying with MasterCard`
    }
    else if(paypal.checked){
        paymentresult.textContent = `You are paying with PayPal`
    }
    else{
        paymentresult.textContent = `Please Select a Payment Method`
    }
}
