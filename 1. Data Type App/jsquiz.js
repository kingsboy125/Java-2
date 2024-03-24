
let namEL=document.getElementById('name-el')
let passcoDE =document.getElementById('passcod-e')
let coHort = document.getElementById('cohor-t')
let firstData = document.getElementById('firstdat-a')
let seconData = document.getElementById('secondat-a')
let Quiz = document.getElementById('Quizbtn')



function Quiz(){
let name = ( prompt('enter your name'))
let passcode = prompt('ener your passcord')
let cohort = prompt('ener your cohort')
let firstdata =  prompt('ener your first data type')
let secondata = prompt('ener your secord data type')
passcoDE.textContent = `Passcode : ${passcode}`
namEL.textContent = `Name : ${name}`
coHort.textContent = `Cohort : ${cohort}`
// let firsTYPE = firstdata


if(isNaN(firstdata) ) {
    firstData.textContent = `your first data type is : NaN`
    // firstData.textContent = "your first data type is :" + ' ' +  typeof(parseInt(firsTYPE))
} else if(){
    
    firstData.textContent ="your first data type is :" + ' ' +  typeof(firstdata)
}else {
    // firstData.textContent = "your first data type is :" + ' ' + NaN =
    let firsTYPE=parseInt(firstdata)
    firstData.textContent = "your first data type is :" + ' ' +  typeof(firsTYPE)
}

// firstData.textContent = "your first data type is :" + ' ' + typeof(firstdata )
seconData.innerHTML =  "your second data type is :" + ' ' + typeof(secondata) 


}

