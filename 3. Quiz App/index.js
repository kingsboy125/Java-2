let faildqueZ =document.querySelector('#failed-question')
let correctqueZ =document.querySelector('#correct-question')
let totalScore = document.querySelector('#totalScore')
let buttON =document.querySelector('#h4')
let buttON2 =document.querySelector('#h')
console.log(faildqueZ)

failedquestion =[]
correctQuestion =[]
function nameOFpresident(){
    confirm("welcome! you have chosen to play. you will be presented with a series 0f question ")
    confirm('if you answer to any question is correct you will be awarded 10%, if wrong no mark for you')
let counVar = prompt('do you want to continue')
if(counVar === "yes"){
    alert("Good! question 1 next")
}else{
    alert('well you are boring ')
    return
}
// question 1
let question1 = prompt('in which year was Tafawa belewa born')
if(question1 === '1912'){
    mark1 = 10
    alert('Good one buddy! next question ')
 correctQuestion.push(`tafawa belewa is born ${question1} =  10%`)
}else{
    alert("false, try again don't give up")
    mark1 =0
failedquestion.push(`Tafawa belewa was born 1912 not ${question1}`)
}


// question 2
let question2 = prompt('in which year was Nnamdi Azikiwe born')
if(question2 === '1904'){
    mark2 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`Nnamdi Azikiwe is born ${question2} =  10%`)
}else{
    alert("false, try again don't give up")
    mark2 =0
    failedquestion.push(`Nnamdi Azikiwe was born 1904 not ${question2}`)
}


// question 3
let question3 = prompt('in which year was Usman Shagari born')
if(question3 === '1925'){
    mark3 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`Usman Shagari was born ${question3} = 10%`)
}else{
    alert("false, try again don't give up")
    
mark3 =0
failedquestion.push(`Usman Shagari was born 1925 not ${question3}`)
}


// question 4
let question4 = prompt('in which year was Ibrahim Babaginda born')
if(question4 === '1941'){
    mark4 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`ibrahim babaginda was born ${question4} = 10%`)
}else{
    alert("false, try again don't give up")
    mark4 =0
    failedquestion.push(`ibrahim babaginda was born 1941 not ${question4}`)
}


// question 5
let question5 = prompt('in which year was Sani Abacha born')
if(question5 === '1943'){
    mark5 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`sani abacha was born ${question5} = 10%`)
}else{
    alert("false, try again don't give up")
mark5 =0
failedquestion.push(`sani abacha was born 1943 not ${question5}`)
}


// question 6
let question6 = prompt('in which year was Obasanjo born')
if(question6 === '1937'){
    mark6 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`obasanjo was born ${question6} = 10%`)
}else{
    alert("false, try again don't give up")
mark6=0
failedquestion.push(`obasanjo was born 1937 not ${question6}`)
}


// question 7
let question7 = prompt("in which year was Musa Yar'Adua born")
if(question7 === '1951'){
    mark7 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`musa yar'Adus was born ${question7} = 10%`)
}else{
    alert("false, try again don't give up")
    
mark7 =0 
failedquestion.push(` musa yar'Adua  was born 1951 not ${question7}`)
}


// question 8
let question8 = prompt('in which year was Goodluck Jonathan born')
if(question8 === '1957'){
    mark8 = 10
    alert('Good one buddy! next question ')
     correctQuestion.push(`goodluck jonathan was born ${question8} = 10%`)
}else{
    alert("false, try again don't give up")
   
mark8 = 0
failedquestion.push(`Goodluck Jonathan  was born 1957 not ${question8}`)
}


// question 9
let question9 = prompt('in which year was Buhari born')
if(question9 === '1942'){
    mark9 = 10
    alert('Good one buddy! next question ')
    correctQuestion.push(`buhari was born ${question9} = 10%`)
}else{
    alert("false, try again don't give up")
mark9 = 0
failedquestion.push(`buhari was born 1942 not ${question9}`)
}


// question 10
let question10 = prompt('in which year was Tinibu born')
if(question10 === '1952'){
    mark10 = 10
    alert('the questions are completed  ')
    correctQuestion.push(`tinubu was born ${question10} = 10%`)
}else{
    alert("the questions are completed")
mark10 =0
failedquestion.push(`Tinubu was born 1912 not ${question10}`)
}

for(i=0; i<failedquestion.length; i++ ){

let l1 = document.createElement('li')
let ul = faildqueZ.appendChild(l1)
ul.innerHTML = failedquestion[i]
 console.log(ul)     
}

for (let i = 0;  i< correctQuestion.length; i++) {
    
 let l2 =document.createElement('li') 
 let u2 =correctqueZ.appendChild(l2)  
 u2.innerHTML = correctQuestion[i]
  console.log(u2) 
}


let answer  = ( mark1 + mark2+ mark3+mark4 + mark5 + mark6 +mark7 + mark8 + mark9+ mark10)
totalScore.innerHTML = ` YOUR TOTAL SCORE IS ${answer}%`

if(buttON.className== 'open'){
    buttON.className =""
}else{
    buttON.className = 'open'
}
if(buttON2.className== 'open'){
    buttON2.className =""
}else{
    buttON2.className = 'open'


}
}
