/*获取Dom*/
// getElementById
let byId = document.getElementById('list');
console.log(byId);

// getElementsByTagName
let byTag = document.getElementsByTagName('ul');
console.log(byTag[0]);

// getElementsByClassName
let byClass = document.getElementsByClassName('list');
console.log(byClass[0]);

// querySelectorAll
let bySelector = document.querySelectorAll('.list');
console.log(bySelector[0]);