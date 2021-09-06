// function reverseString(str){
//     let saveStr = str.split("");
//     let reverseStr = saveStr.reverse();
//     let joinStr = reverseStr.join("");
//     return joinStr;
// }

// // let savedStr = reverseString('Hellow');
// // console.log(savedStr);

// const savedStr = prompt('Enter a string: ');
// const result = reverseString(savedStr);
// console.log (result);


const names = [
    {
    name: 'John',
    mass: 45,
    height: 150,
    BMI: 0,
    calculate: function(BMI){
        this.Mass / this.Height**2;
        return BMI;
        }
    },
    {
    name: 'Bob',
    mass: 50,
    height: 170,
    BMI: 0,
    calculate: function(BMI){
        this.Mass / this.Height**2;
        return BMI;
        }
    }
]

if(names.calculate() > names.calculate()){
    console.log("John more than Bob");
}else if(names.calculate() > names.calculate()){
    console.log("Bob more than John");
}