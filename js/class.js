class student{
    //create object (properties)
    constructor(nim, faculty){
        this.nim = nim;
        this.faculty = faculty;
    }
    //method / fungsi (behaviour)
    display(){
        return `NIM: ${this.nim} ${this.faculty}`;
    }
}

//instantiation
const stu1 = new student('1010503434', 'FIK');
console.log(stu1.display());