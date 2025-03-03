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