// Task 1: Creating a Book Class

class Book { // creates book class
    constructor(title, author, isbn, copies) { // creates properties and links them
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }; // returns properties in template literal
    updateCopies(quantity) {
        this.copies += quantity; // changes copies amount based on quantity
    }
}

// Task 1 Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // makes a new book
console.log(book1.getDetails()); // logs details of the book
book1.updateCopies(-1); // removes 1 from copies
console.log(book1.getDetails()); // logs details of the book

// Task 2: Creating a Borrower Class

class Borrower { // creates borrower class
    constructor(name, borrowerId, borrowedBooks) { // creates properties and links them
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; // makes borrowedBooks an array
    };
    borrowBook(bookTitle) {
        this.borrowedBooks.push(bookTitle); // adds book to borrowed array
    };
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }; // filters for book in borrowed array
};

// Task 2 Test Cases
const borrower1 = new Borrower("Alice Johnson", 201); // makes new borrower
borrower1.borrowBook("The Great Gatsby"); // adds book to borrower array
console.log(borrower1.borrowedBooks); // logs array of borrowed books
borrower1.returnBook("The Great Gatsby"); // remove book from borrower array
console.log(borrower1.borrowedBooks); // logs array of borrowed books

// Task 3: Creating a Library Class

class Library  // creates library class
    constructor(books, borrowers) { // creates two arrays 
        this.books = []; // links books array
        this.borrowers = []; // links borrowers array
    };
    addBook(book) {
        this.books.push(book) // adds book into books array
    };
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }; // finds each book in the array and logs the books details   
    addBorrower(borrower) {
        this.borrowers.push(borrower); // adds borrower into borrowers array
    };

// Task 4
    addBorrower(borrower){ // adds a method to add borrowers to library
        this.borrowers.push(borrower);
    }
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);

        if (book && borrower && book.copies > 0) { // checks conditions to lend book
            book.updateCopies(-1); // removes 1 from stock
            borrower.borrowBook(book.title);        
        } else {
            console.log("Cannot lend book.")
        }
    }