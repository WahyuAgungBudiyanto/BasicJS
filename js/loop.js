//while
// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }
//dowhile
// do{
//     console.log(i);
//     i++;
// }while(i<=5);
//for
// for (let x = 1; x <= 5; x++){
//     console.log(x);
// }
//for/of (ES6) -- array
// const data = [12, 45, 7, 80, 19];

//  for(let i=0; i  < data.length; i++){
//      console.log(data[i]);
//  }
// lebih rapih ini
//  for(let e of data){
//      console.log(e);
//  }

//for/in -- object literal
const student = {
    nim: 1010101010, 
    regNo: 's11910102',
    prodi: 'TI',
    faculty: 'FIK',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M'
};

for(let props in student){
    console.log('${probs}: ${student[props]}');
}