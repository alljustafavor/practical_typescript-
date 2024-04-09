
let awesomeName:string = 'shakeAndBake';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName); 

// awesomeName = 50;

let amount:number = 50;
amount = 12

let isAwesome = true;
isAwesome = false;

// section challenge 
let myName:string = "   Joe     ";
myName = myName.trim();

let score:number = 100;
score--

let isOver21:boolean = true;
isOver21 = false

// Union Types

let tax:number | string = 10;
tax = 100;
tax = '$1.00';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

let random; // no info to infer a type

const bookss = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of bookss) {
  if (book === '1984') {
    foundBook = book;
    break
  }
}

console.log(foundBook);

// section challenge

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;
discount = '20%';

// Arrays <3

let prices: number[] = [100, 75, 42];
// prices.push('hello')

let fruit: string[] = ['apple', 'orange'];

let array: (string | boolean)[] = ['apple', true, 'orange', false];

// sections challenge

let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot');

let colors: string[] = ['red', 'green', 'blue'];
/* colors.push(true); */

/* let mixedArr: (number | string)[] = [true] */

// Objects

let car:{brand: string, year: number} = { brand: 'toyota', year: 2020 };

let book = {title: 'book', cost: 20};
let pen = {title: 'pen', cost: 10};
let notebook = {title: 'notebook'};

let items:{readonly title: string, cost?: number}[] = [book, pen, notebook];
// items[0].title = 'new book';

// section challenge

let bike: {brand: string, year: number} = {brand: 'yamaha', year: 2021}
let laptop: {brand: string, year: number} = {brand: 'dell', year: 2024}

