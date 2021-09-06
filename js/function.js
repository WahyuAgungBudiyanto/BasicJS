//mengelompokan beberapa statement dan dijadikan suatu fungsi dan bisa dipanggil beberapa kali






////////////////////////fuction declaration---------------------------------
//kalau tidak taruh passing di bawah bisa langsung isi disitu
function hello(name = "Anonymous"){
//function hello(firstName, lName){
    return `Hello, ${name}`;
    //return `Hello, ${fName}, ${lName}`;

}
//console.log(hello());
//bisa override
//console.log(hello("Wahyu"));

/////////////////function expression ( bisa menggunakan nama fungsi atau tidak)---------------------------------
let greeting = function(name){
    return  `hello, ${name}`;
}
//console.log(greeting("Wahyu"));

//pakai nama
const fct = function factorial(number){
    if(number <= 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}
//console.log(fct(3));

////////////////function IIFE --langsung eksekusi
const squared = (function(num){
    return num * num;
})(8);

(function(){
    //statements
})();
//console.log(squared);

////////////////arrow function ( bisa hilangkan kata kunci function)-----------
const hellos = (fName, lName) => {
    return `Hello, ${name}${lName}`;    
}
console.log(hellos("Wahyu", "Agung"));

//cara lain
const hellos1 = (fName, lName) => `Hello, ${fName} ${lName}`;    
console.log(hellos1("Wahyu", "Agung"));

//1 parameter (lebih rungkas)
const hellos2 = fName => `Hello, ${fName}`; 
//const hellos2 = fName => {return `Hello, ${fName}`};   
console.log(hellos2("Wahyu"));


const fct1 = (number) => {
    if(number <= 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}
console.log(fct(3));