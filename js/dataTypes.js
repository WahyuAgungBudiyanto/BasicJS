/*
- Primitive Data Types
  - Numbers
  - String
  - Boolean
  - null
  - undefined
  - Symbol (ES6)
  - BigInt (ES2020)
*/
//`` - backtick
//program level null
//server level undefined
let salary = 10000000;
let average = 90.87;
let firstName = 'Wahyu Agung';
let lastName = 'Budiyanto';
let isMarried = true;
let isAbsent = null;
let nickname = Symbol('nickname'); //object iterator
let bigNumber = 10000000000000000000000n;

// console.log(firstName + ", " + lastName); // concatenation
// console.log(`${lastName}, ${firstName}`); // template literal

// console.log(salary);
// console.log(typeof firstName);

// console.log(average);
// console.log(typeof average);





 /*
- Object Types
  - global (global, window)
  - globalThis (ES2020)
  - object
  - array
*/
//array (tidak harus memiliki tipedata yang sama)
const grade = [50, 40, 30, 67, 4, 45, 'Tiga Puluh'];
console.log(grade);

//object (tipe data yang bisa memungkinkan membuat struktur data (property))
const student = {
  nim: '10502233444',
  fakultas: 'Fakultas Ilmu Komputer',
  prodi: 'Informatika',
  kurikulum: 'SI 2013-2018',
  isActive: true
};

console.log(student);