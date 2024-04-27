const bookList = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function displayBooks() {
    let isValid = false;
        
    isValid = formValidation();
    if (isValid) {
        insertBook();
        resetTiles();
        updateTiles();
    }
    
}

function updateTiles() {
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

function insertBook() {
    let newBook = new Book(
        document.getElementById("title-input").value,
        document.getElementById("author-input").value,
        document.getElementById("pages-input").value,
        false
        );
    bookList.push(newBook);
}

function formValidation() {
    let form = document.getElementById("form-element");
    let inputs = form.querySelectorAll("input[required]");
    let isValid = true;

    inputs.forEach(function(input) {
        if (!input.value.trim()) { // Check if the input is empty
            input.classList.add("invalid");
            isValid = false;
        } else {
            input.classList.remove("invalid");
        }
        
    });

    return isValid;
}

function resetTiles() {
    document.getElementById("tiles").innerHTML = `
    <div id="book-form" class="book-tile">
    <p>New Book</p>
    <form method="post" id="form-element">
    <input type="text" name="title" id="title-input" placeholder="Title" required/>
    <input type="text" name="author" id="author-input" placeholder="Author" required/>
    <input type="number" name="pages" id="pages-input" placeholder="Pages" required/>
    <button type="submit" onclick="displayBooks()">Submit</button>
    </form>
    </div>
    `;
}

resetTiles();