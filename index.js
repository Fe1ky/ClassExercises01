// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, isbn, pages, checkouts){
      this.title = title;
      this.author = author;
      this.copyrightDate = copyrightDate;
      this.isbn = isbn;
      this.pages = pages;
      this.checkouts = checkouts;
    }
}


// Define your Manual and Novel classes here:

class Novel extends Book {
  constructor(title, author, copyrightDate, isbn, pages, checkouts){
    super(title, author, copyrightDate, isbn, pages, checkouts);
  }
    discarded(){
      if(this.checkouts > 100 ){
        return 'Yes';
      }
      return 'No';
    }
}

class Manual extends Book {
  constructor(title, author, copyrightDate, isbn, pages, checkouts){
    super(title, author, copyrightDate, isbn, pages, checkouts);
  }
    discarded(currentYear){
      if(currentYear - this.copyrightDate > 5 ){
        return 'Yes';
      }
      return 'No';
    }
}

// Declare the objects for exercises 2 and 3 here:

let prideAndPre = new Novel('Pride and Prejudice', 'Jane Austen',1813 , 1111111111111, 432, 32);
let tssbm = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1);

console.log(prideAndPre);
console.log(prideAndPre.discarded());
console.log(tssbm);
console.log(tssbm.discarded(2021));
// Code exercises 4 & 5 here:

console.log(`should ${prideAndPre.title} be discarded? ${prideAndPre.discarded()}`);
console.log(`should ${tssbm.title} be discarded? ${tssbm.discarded(2021)}`);

prideAndPre.checkouts = prideAndPre.checkouts + 5
console.log(`with 5 additional checkouts ${prideAndPre.title} has now been checked out ${prideAndPre.checkouts} times`);
