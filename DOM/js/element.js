//create the element
// const p = document.createElement('p');
// const text = document.createTextNode('Please fill in the form below to add new prodi.');

// p.className = 'description';
// p.id = 'form-description';

// p.appendChild(text);

// console.log(p);

// //insert element
// const main = document.querySelector('#main');
// const form = document.querySelector('form');

// main.insertBefore(p, form);


//create the element
const p = document.createElement('p');
const text = document.createTextNode('Daftar Prodi di Unklab');

p.className = 'tes-class';
p.id = 'form-class';

p.appendChild(text);

console.log(p);

//insert

const main = document.querySelector('#main');
//const main1 = document.getElementsById('main');

const ul = document.querySelector('ul');
//const ul1 = document.getElementsById('prodi');

main.insertBefore(p, ul);













