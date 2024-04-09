
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

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
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



