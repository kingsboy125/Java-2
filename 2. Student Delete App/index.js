let button = document.querySelector('#btn')
let update =document.querySelector('#updatedlist')
console.log(update)
let student =['jasper' ,'shedrack', 'isreal', 'confidence']

function stuindex(){
let stuindex =parseInt( prompt('enter the student index you want to delete'))
if(stuindex > (student.length)-1){
    alert('this index does not exist try again ' )
}else{
    let remove=student.splice(stuindex, 1)
    
   
}
update.textContent = student

}