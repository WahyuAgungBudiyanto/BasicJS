//dapat menyimpan value lebih dari 1
const faculties = [
    'Filsafat',
    'Pendidikan',
    'Ekonomi',
    'Pertanian',
    'Ilmu Komputer',
    'Keperawatan',
    'Pascasarjana'
];
// faculties.push('ASMIK', 'Kedokteran', 'Teknik');
// faculties.unshift('Testing');

// console.log(faculties);

// faculties.pop();
// faculties.shift();

// console.log(faculties);

//5 high order functions in array
// foreach
faculties.forEach(function(faculty) {
    // console.log(faculty);
});
// map ( buat new array dan isinya dari proses yang dibuat)
const books = [
    {
    isbn: '1234-123-123',
    title: 'Book Title 1',
    author: 'Wahyu Agung',
    isPublished: true
    }, 
    {
    isbn: '1434-3123-12343',
    title: 'Book Title 2',
    author: 'Budiyanto',
    isPublished: false
    }, 
    {
    isbn: '555-12333-23',
    title: 'Book Title 3',
    author: 'John Due',
    isPublished: true
    }, 
]

const bookTitles = books.map(function(buku, nomor){
    return `${buku.title}, ${buku.isbn}`;
});
// console.log(bookTitles);

// filter
const checkPublished = books.filter(function(buku){
return buku.isPublished === true;
});
// console.log(checkPublished);

// sort
console.log(faculties.sort()); 

const array1 = [1, 30, 4, 21, 10000];
array1.sort(function(a,b){
    return a - b;
});
console.log(array1);


// reduce (menghitung total di dalam array)
const reducer = function(accumulator, currentValue){
    return accumulator + currentValue;
}
console.log(array1.reduce(reducer));

