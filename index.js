//DOM stuff
const form = document.querySelector("#content-form");
const btn = document.querySelector('.add-book');
//DOM stuff

let myLibrary = [];

function Book(title, author, page, read) {
    //the constructor
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(book) {
    //do stuff here
    myLibrary.push(book);
}

function removeChildrenFromDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
function displayBook() { //might have to handle edge case for when there are no elements in the array

    let div = document.querySelector(".card-section");
    removeChildrenFromDiv(div);

    for (i = 0; i < myLibrary.length; i++) {


        let card = document.createElement("div");
        card.setAttribute("class", "card");

        //TITLE 
        //create the p element which will be the title
        let title = document.createElement('p');
        //create a strong element and add whatevet needs to be bold using textContent
        let boldPartTitle = document.createElement('strong');
        boldPartTitle.textContent = "TITLE: ";
        //append them as children to the p tag instead of directly changing textContent
        title.appendChild(boldPartTitle);
        //the book title is created using textNode and not textContent to append as a child to p tag
        let bookTitle = document.createTextNode(`${myLibrary[i].title}`);
        title.appendChild(bookTitle);

        //Author
        let author = document.createElement('p');
        let boldPartAuthor = document.createElement('strong');
        boldPartAuthor.textContent = "AUTHOR: ";
        author.appendChild(boldPartAuthor);

        let bookAuthor = document.createTextNode(`${myLibrary[i].author}`);
        author.appendChild(bookAuthor);

        //Pages
        let pages = document.createElement('p');
        let boldPartPages = document.createElement('strong');
        boldPartPages.textContent = "PAGES: ";

        pages.appendChild(boldPartPages);

        let bookPageNumber = document.createTextNode(`${myLibrary[i].page}`);
        pages.appendChild(bookPageNumber);

        //Read
        let read = document.createElement('p');
        let boldPartRead = document.createElement('strong');
        boldPartRead.textContent = "READ: ";
        read.appendChild(boldPartRead);

        let bookRead = document.createTextNode(`${myLibrary[i].read}`);
        read.appendChild(bookRead);

        //Remove-button
        let remove = document.createElement('button');
        let boldPartRemove = document.createElement('strong');
        boldPartRemove.textContent = "REMOVE";
        remove.style.background = "lightpink";
        remove.setAttribute("id", "rmv-btn");
        remove.appendChild(boldPartRemove);


        //append the attributes to the card 
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(remove);
        div.appendChild(card);
    }
    const remove_btn = document.getElementById('rmv-btn');
    remove_btn.addEventListener('click', (e) => {
        console.log(e.target);
    })

}

function removeBook(index) {
    myLibrary.splice(index, 1);
}


btn.addEventListener('click', (e) => {
    form.style.display = "block";
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author-name").value;
    let pages = document.querySelector("#pages").value;
    let checkbox = document.querySelector("#read").checked;

    // console.log(`Title: ${title}, Author: ${author}, Number of Pages: ${pages}, Read?: ${checkbox}`);

    let book = new Book(title, author, pages, checkbox);
    addBookToLibrary(book);
    displayBook();

    form.style.display = "none";

    //sets the form inputs to be clear again 
    document.querySelector("#title").value = "";
    document.querySelector("#author-name").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
})

