import {PI, hello, Student} from "./modules/module1.js";

///////////mau pilih semua
//import * as Utils from "./modules/module1.js";

//console.log(Utils.PI);
console.log(PI);

//console.log(Utils.hello("Hi"));
console.log(hello("Hi"));

//const stu1 = new Utils.Student('1111', 'ddd');
const stu1 = new Student('1111', 'ddd');
console.log(stu1.display());
