//bisa digunakan di file mana saja

//bisa langsung semua begini atau satu satu di export
const PI = Math.PI;

function hello(name){
    return `hello, ${name}`;
}

class Student{
    constructor(nim, faculty){
        this.nim = nim;
        this.faculty = faculty;
    }

    display(){
        return `${this.nim} / ${this.faculty}`;
    }
}
export {PI, hello, Student};