// object -- literal
const student = {
    nim: 1010101010, 
    regNo: 's11910102',
    prodi: 'TI',
    faculty: 'FIK',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'M',
    isRegistered: true,
    address: {
        city: 'Airmadidi',
        postalCode: 95371,
        province: 'Sulawesi Utara'
    },
    hobbies: ['berenang', 'traveling', 'membaca']
};

//console.log(student.firstName); atau console.log(student['lastName']);

//console.log(student.address.city);
// console.log(student.hobbies[1]);

//optional chaining: ?.
//mau cek ada isi atau tidak
//console.log(student?.address?.street);

// destructering -- keluarkan properti objek dan langsung akses
//console.log(student.firstName);

const {firstName, gender, address: {province}} = student;
console.log(firstName + "\n" + gender);
console.log(province);
//jadi tidak harus console.log(student.address.province);

