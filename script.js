let myLibrary = [];

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.prototype.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'already read' : 'not read yet'}`    
    }
}

const addBookToLibrary = function() {
    // do stuff here
  }
  