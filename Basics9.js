// Objects

let input = 'tech';


let alien = {
    name: 'Sukhman',
    tech: 'JS',
    'work exp': 5
}

console.log(alien);

console.log("++++++++++++++++++++++++++++++++++++");


let ten ={
    books: 5,
    Pencil: 1,
    Subject: 'English',
    laptop: {
        cpu: '17',
        ram: '4',
        brand: 'Asus'
    }

}

console.log(ten.laptop);
console.log(ten.laptop.brand);
console.log(ten.laptop.brand.length);

delete ten.laptop;

console.log(ten);