
document.querySelector('button').addElementListener('click',(event)=>{
  event.target.textContent = "Its searching your results.";
})
// tracking the input form

document.querySelector('#myform').addElementListener('change',(event)=>{
  console.log(event.target.value);
})
