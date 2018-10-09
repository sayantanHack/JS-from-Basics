
var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListner('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListner('click',removeButton);

function addItem() {
  var input = document.getElementById('input')
  var item = input.value;
  ul = document.getElementsById('list');
  var textnode = document.createTextNode(item)

if(item === ''){
  return false;
  }
else{
  // create li
  li = document.createElement('li')
  // creating checkbox
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id','check');
  // create label
  var label = document.createElement('label');
  label.setAttribute('for','item') //optional

  // adding these to page
  ul.appendChild(label);
  li.appendChild(checkbox);
  label.appendChild(textnode);
  li.appendChild(label);
  ul.insertBefore(li, ul.childNodes[0]);
  li.className = 'visual';

  }


}
