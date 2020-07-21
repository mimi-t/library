/*
trigger error if add empty field
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
const toggleForm_button = document.querySelector('#toggle-form');
const addForm_form = document.querySelector('#add-form')
const libraryWrapper_div = document.querySelector('.library-wrapper');
const libraryArray = [book1, book2, book3, book4];

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.prototype.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read ? 'already read' : 'not read yet'}`    
    }
}

//loops through libraryArray, formats info of each book, add into HTML
const render = () => {
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
    addForm_form.classList.toggle('hidden');
    if (toggleForm_button.className == 'add-button') {
        toggleForm_button.className = 'close-button';
        toggleForm_button.innerHTML = 'Close form';
    } else {
        toggleForm_button.className = 'add-button';
        toggleForm_button.innerHTML = 'Add new book';
    }
})

//
const addBookToLibrary = function() {
    // do stuff here
}

render();
  