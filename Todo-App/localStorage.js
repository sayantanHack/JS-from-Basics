localStorage.setItem('heros','Batman');
var myHero = localStorage.getItem('hero');
console.log(myHero);

localStorage.setItem('todo',"tutorial");
console.log(localStorage.getItem('todo'));

// Cleaning local storage is also easy
localStorage.clear();
// It will clear entire storage
