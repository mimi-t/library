/*
this.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'already read' : 'not read yet'}`    
}
clear field after add new book
*/

//------------------------------ sample objects for development, delete later ------------------------------
book1 = {title: 'Six of Crows',
author: 'Leigh Bardugo',
pages: '465',
read: true
}

book2 = {title:'Manufacturing Consent: The Political Economy of the Mass Media',
author: ' Edward S. Herman, Noam Chomsky',
pages: '412',
read: false
}

book3 = {title:'No Longer Human',
author: 'Osamu Dazai',
pages: '176',
read: false
}

book4 = {title:'Maybe You Should Talk to Someone: A Therapist, Her Therapist, and Our Lives Revealed',
author: 'Lori Gottlieb',
pages: '415',
read: true
}
//----------------------------------------------delete later-------------------------------------------------
const addBook_form = document.querySelector('#add-book');
const submitForm_button = document.querySelector('#submit-form');
const toggleForm_button = document.querySelector('#toggle-form');
const addFormWrapper_div = document.querySelector('#add-form-wrapper')
const libraryWrapper_div = document.querySelector('.library-wrapper');
const libraryArray = [book1, book2, book3, book4];

//book constructor
const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//clear library wrapper inner HTML
const clearLibraryWrapper = () => {
    libraryWrapper_div.innerHTML = "";
}

//loops through libraryArray, formats info of each book, add into HTML
const render = () => {
    clearLibraryWrapper();
    libraryArray.forEach((book) => {
        let book_div = document.createElement('div');
        book_div.className = 'book'
        book_div.innerHTML = `<div class="title"><h2>${book.title}</h2></div>
        <div class="author"><h3>${book.author}</h3></div>
        <div class="pages"><p>${book.pages} pages</p></div>
        <div class="button-bar">
            <button class="${book.read ? 'already-read' : 'to-read'}">${book.read ? 'Already read' : 'To read'}</button>
            <button class="bin-button"><img src="images/trash.svg" alt="bin icon"></button>
        </div>`;
        libraryWrapper_div.appendChild(book_div);
    });
}

//toggle add new book form
toggleForm_button.addEventListener('click', (e) => {
    addFormWrapper_div.classList.toggle('hidden');
    if (toggleForm_button.className == 'add-button') {
        toggleForm_button.className = 'close-button';
        toggleForm_button.innerHTML = 'Close form';
    } else {
        toggleForm_button.className = 'add-button';
        toggleForm_button.innerHTML = 'Add new book';
    }
})

//adds a book to the library
const addBookToLibrary = function(form) {
    let readStatus = form['read-status'].value === "already-read" ? true : false;
    libraryArray.push(new Book(form.title.value, form.author.value, form.pages.value, readStatus));
}

submitForm_button.addEventListener('click', (e) => {
    event.preventDefault();
    addBookToLibrary(addBook_form.elements);
    render();
});

render();
  