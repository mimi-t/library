//------------------------------ sample objects for development-----------------------------------------
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
//------------------------------------------------------------------------------------------------------

const addBook_form = document.querySelector('#add-book');
const toggleForm_button = document.querySelector('#toggle-form');
const formContainer_div = document.querySelector('.form-container')
const addFormWrapper_div = document.querySelector('#add-form-wrapper');
const libraryWrapper_div = document.querySelector('.library-wrapper');
const libraryArray = [book1, book2, book3, book4];

//book constructor
const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//clear library wrapper's contents
const clearLibraryWrapper = () => {
    libraryWrapper_div.innerHTML = "";
}

const removeBook = (index) => {
    //delete book from libraryArray at that index, render updated array
    libraryArray.splice(index, 1);
}

const changeReadStatus = (index) => {
    libraryArray[index].read = !libraryArray[index].read;
}

//loops through libraryArray, formats info of each book, add into HTML
const render = () => {
    clearLibraryWrapper();
    libraryArray.forEach((book, index) => {
        let book_div = document.createElement('div');
        book_div.className = 'book'
        book_div.dataset.index = index;
        book_div.innerHTML = `<div class="title"><h2>${book.title}</h2></div>
        <div class="author"><h3>${book.author}</h3></div>
        <div class="pages"><p>${book.pages} pages</p></div>
        <div class="button-bar">
            <button class="read-button ${book.read ? 'already-read' : 'to-read'}">${book.read ? 'Already read' : 'To read'}</button>
            <button class="bin-button"><img src="images/trash.svg" alt="bin icon"></button>
        </div>`;
        libraryWrapper_div.appendChild(book_div);

        //adds event listenter for removing books
        book_div.querySelector('.bin-button').addEventListener('click', (e) => {
            let index = e.currentTarget.parentNode.parentNode.dataset.index;
            removeBook(index);
            render();
        })

        //adds event listenter for changing read status
        book_div.querySelector('.read-button').addEventListener('click', (e) => {
            let index = e.currentTarget.parentNode.parentNode.dataset.index;
            changeReadStatus(index);
            render();
        })
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

//adds a book to the libraryArray
const addBookToLibrary = function(form) {
    let readStatus = form['read-status'].value === "already-read" ? true : false;
    libraryArray.push(new Book(form.title.value, form.author.value, form.pages.value, readStatus));
}

//triggers when 'add book' button is clicked (adds book to libraryArray and updates HTML)
formContainer_div.addEventListener('submit', (e) => {
    event.preventDefault();
    addBookToLibrary(addBook_form.elements);
    render();
    formContainer_div.reset();
});

render();  