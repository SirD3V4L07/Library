const bookList = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

/*
let book1 = new Book("Mastery", "Robert Greene", 600, false);
let book2 = new Book("Sapiens", "Yuval Noah Harari", 512, false);

bookList.push(book1);
bookList.push(book2);
*/

function displayBooks() {
    
    let newBook = new Book(
        document.getElementById("title-input").value,
        document.getElementById("author-input").value,
        document.getElementById("pages-input").value,
        false
        );
    bookList.push(newBook);

    resetTiles();
    for (let i = 0; i < bookList.length; i++) {
        document.getElementById("tiles").innerHTML += `
        <div class="book-tile">
        <p>${bookList[i].title}</p>
        <p>${bookList[i].author}</p>
        <p>${bookList[i].pages} pages</p>
        <div class="read-status"><p>Read</p><img src="./media/notread.png"></div>
        </div>
        `;
    }
}

function resetTiles() {
    document.getElementById("tiles").innerHTML = `
    <div id="book-form" class="book-tile">
    <p>New Book</p>
    <form method="post">
    <input type="text" name="title" id="title-input" placeholder="Title" />
    <input type="text" name="author" id="author-input" placeholder="Author" />
    <input type="number" name="pages" id="pages-input" placeholder="Pages" />
    <button type="submit" onclick="displayBooks()">Submit</button>
    </form>
    </div>
    `;
}

resetTiles();