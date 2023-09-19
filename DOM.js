// alert('hello world');
// creat the function 
function Sum2Numbers(num1,num2){
    var sum=num1+num2;
    return sum;
}
//call the button and add event listeners
const button = document.querySelector('#button');
function onclick(){
// get element from html
const num1=document.querySelector('#num1').value;
const num2=document.querySelector('#num2').value;
const res =Sum2Numbers(parseInt(num1),parseInt(num2));
let result=document.querySelector('#result');
result.textContent =num1+" + "+num2+""+"="+""+res;
}

button.addEventListener('click',onclick);