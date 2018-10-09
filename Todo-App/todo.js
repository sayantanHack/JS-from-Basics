
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

}
