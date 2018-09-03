var John = {
  name:"I`m john",
  age : 15,
  isActive: true
}

var Mary = {
  name:"I`m mary",
  age : 25,
  isActive: true
}

var Sam = {
  name:"I`m sam",
  age :23,
  isActive: false
}

let users = new Map()  //map is an obj
console.log(typeof(users));

users.set('John',John)
users.set('marry',Mary)
users.set('sam',Sam)

// Maps always returns iteratable .. which is in loop
console.log(users.size);
// get('key')  in case of index it will be get[val]
console.log(users.get('sam'));
console.log(users.values());

for (const key of users.keys()){
  console.log(key);
}
