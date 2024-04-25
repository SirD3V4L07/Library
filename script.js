const bookList = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let book1 = new Book("Book Title", "Author Name", 233, false);
let book2 = new Book("Sapiens", "Yuval", 512, false);

bookList.push(book1);
bookList.push(book2);

function displayBooks(){
    
}