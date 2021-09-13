// console.log(document);
// console.dir(document);
// console.dir(document.forms);

/** 
 * SELECTORS
 * 
 * getElementById()*/
 let title = document.getElementById('main-header');
 //console.log(title);
 //title.textContent = 'Manage Program Studi';
 //console.log(title.innerText); //atau console.log(title.innerHTML); atau console.log(title.textContent);
 
/** 
 * getElementsByClassName()*/
 let prodis = document.getElementsByClassName('list-item'); //dikembalikan HTMLCollection
 //console.log(prodis);

 /**
 * getElementsByTagName()*/
 let subTitle = document.getElementsByTagName('h2');
 //console.log(subTitle);



 
 /**
 * querySelector() & querySelectorAll()*/ 
//hanya mengembalikan nilai yang pertama jika hasil > 1


 let title1 = document.querySelector('#title');
 //console.log(title1);

 //let prodis1 = document.querySelector('.list-item'); 
 let prodis1 = document.querySelectorAll('.list-item'); //dikembalikan NodeList
 //console.log(prodis1);

 //let subTitle1 = document.querySelector('h2');
 let subTitle1 = document.querySelectorAll('h2');
 //console.log(subTitle1);

let submitButton = document.querySelector('input[type="submit"]');
//console.log(submitButton);

let prodiName = document.querySelectorAll('input[type="text"]');
//console.log(prodiName[1]);






let firstProdi = document.querySelector('li:first-child'); //atau last-child
firstProdi.style.color = 'red';
firstProdi.style.backgroundColor = 'grey';
console.log(firstProdi);

let thirdProdi = document.querySelector('li:nth-child(3)'); 
console.log(thirdProdi);

















