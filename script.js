
let myLibrary = [];
let bookshelf = document.getElementById("bookshelf");
let darkBack = document.getElementById('dark');
let formContainer = document.getElementById('formElement');

function showForm() {
    formContainer.style.display = 'block';
    darkBack.style.display = 'block';
}

let cancelBtn = document.getElementById("CancelBtn");
let submitBtn = document.getElementById("SubmitBtn");
cancelBtn.addEventListener("click", cancel);
submitBtn.addEventListener("click", submit);

function submit() {

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    addBookToLibrary(title, author, pages, read);
    formContainer.style.display = 'none';
    darkBack.style.display = 'none';
    displayBooks();
}

function cancel() {
    formContainer.style.display = 'none';
    darkBack.style.display = 'none';
}

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read); 
    myLibrary.push(newBook);
}

addBookToLibrary("The knife of never letting go", "Patrick Ness", 496, "read");
addBookToLibrary("Monsters of men", "Patrick Ness", 602, "read");
addBookToLibrary("The hunger games", "Suzanne Collins", 374, "not read");
addBookToLibrary("Catching fire", "Suzanne Collinss", 400, "read");
addBookToLibrary("Mockingjay", "Suzanne Collins", 390, "not read");
addBookToLibrary("The ballad of songbirds and snakes", "Suzanne Collins", 517, "read");
addBookToLibrary("Divergent", "Veronica Roth", 487, "read");
addBookToLibrary("Insurgent", "Veronica Roth", 525, "read");
addBookToLibrary("Allegiant", "Veronica Roth", 526, "not read");

function displayBooks() {
    bookshelf.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        let title = document.createTextNode(`Title: ${myLibrary[i].title}`);
        let author = document.createTextNode(`Author: ${myLibrary[i].author}`);
        let pages = document.createTextNode(`Pages: ${myLibrary[i].pages}`);
        let read = document.createTextNode(`Read: ${myLibrary[i].read}`);

        let del = document.createTextNode(`Remove book`);
        let readval = document.createTextNode(`Read`);

        let bookContainer = document.createElement('div');
        bookContainer.classList.add("book");

        let titlep = document.createElement('p');
        titlep.appendChild(title);
        bookContainer.appendChild(titlep);

        let authorp = document.createElement('p');
        authorp.appendChild(author);
        bookContainer.appendChild(authorp);
        
        let pagesp = document.createElement('p');
        pagesp.appendChild(pages);
        bookContainer.appendChild(pagesp);

        let readp = document.createElement('p');
        readp.appendChild(read);
        bookContainer.appendChild(readp);

        let delBtn = document.createElement('button');
        delBtn.appendChild(del);
        bookContainer.appendChild(delBtn);
        delBtn.addEventListener("click", function() {
            myLibrary.splice(i, 1);
            displayBooks();
        });

        let readBtn = document.createElement('button');
        readBtn.appendChild(readval);
        bookContainer.appendChild(readBtn);
        readBtn.addEventListener("click", function() {

            if(myLibrary[i].read == "read") {
                myLibrary[i].read = "not read";
            }

            else {
                myLibrary[i].read = "read";
            }
            displayBooks();
        });
        
        bookshelf.appendChild(bookContainer);


    }
}

displayBooks();
