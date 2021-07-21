var amt = document.getElementById('amt')
var people = document.querySelector('#people')
var warning = document.querySelector('.warning')
var amtPerPerson = document.querySelector('#amtPerPerson')
var totPerPerson = document.querySelector('#totPerPerson')
var resetBtn = document.querySelector('#reset')
function checkTip(btn)
{
    totAmount = amt.value
    totPeople = people.value
    var totPerPersonAmt = (totAmount*btn)/100
    var amtPerPersonAmt = totPerPersonAmt/totPeople
    totPerPersonAmt = amtPerPersonAmt + totAmount/totPeople
    totPerPersonAmt = totPerPersonAmt.toFixed(2)
    amtPerPersonAmt = amtPerPersonAmt.toFixed(2)
    if(people.value === '0' || people.value.length === 0)
    {
        warning.style.display = 'flex'
    }
    else
    {
        totPerPerson.innerHTML=totPerPersonAmt
        amtPerPerson.innerHTML=amtPerPersonAmt
        resetBtn.disabled = false
        resetBtn.classList.add('active')
        resetBtn.addEventListener('click', ()=>{
            window.location.reload()
        })
    }
}
function checkInpTip()
{
    var custom = document.getElementById('custom')
    customAmt = custom.value
    totAmount = amt.value
    totPeople = people.value
    var totPerPersonAmt = (totAmount*customAmt)/100
    var amtPerPersonAmt = totPerPersonAmt/totPeople
    totPerPersonAmt = amtPerPersonAmt + totAmount/totPeople
    totPerPersonAmt = totPerPersonAmt.toFixed(2)
    amtPerPersonAmt = amtPerPersonAmt.toFixed(2)
    if(people.value === '0' || people.value.length === 0)
    {
        warning.style.display = 'flex'
    }
    else
    {
        totPerPerson.innerHTML=totPerPersonAmt
        amtPerPerson.innerHTML=amtPerPersonAmt
        resetBtn.disabled = false
        resetBtn.classList.add('active')
        resetBtn.addEventListener('click', ()=>{
            window.location.reload()
        })
    }
}