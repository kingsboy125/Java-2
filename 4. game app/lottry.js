let namEL=document.getElementById('name-el')
let passcoDE =document.getElementById('passcod-e')
let coHort = document.getElementById('cohor-t')
let firstData = document.getElementById('win-el')
let systemNum =document.getElementById ('system-num')
let userNum =document.getElementById ('user-num')
let cohortMember =['jasper', 'shedrack' , 'isreal']
// console.log(cohortMember[2])

function lotteryquiz(min, max ){


let name = ( prompt('enter your name'))
if(cohortMember.includes(name)){
    alert('yes you entered correct cohort name')
}else{
    alert('you choose wrong name')
    return
}
let passcode = prompt('enter your passcord')
let cohort = prompt('enter your cohort')
let inpute = parseInt(prompt('enter a number between 20 to 40'))
passcoDE.textContent = `Passode : ${passcode}`
namEL.textContent = `Name : ${name}`
coHort.textContent = `Cohort : ${cohort}`

min= Math.ceil(20)
max = Math.floor(40)
let mathEL = Math.floor( Math.random()*(max-min+1))+min
systemNum.innerHTML = 'system num :' +" "+ mathEL
userNum.innerHTML =  `user num : ${inpute}`

if(inpute === mathEL){
firstData.innerHTML=`congratulation you have won the game collect your $100`
}else{
    firstData.innerHTML =`you entered wrong number try again`
}

}
