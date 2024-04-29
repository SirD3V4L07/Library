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
        updateTiles();
    }
    
}

function updateTiles() {
    resetTiles();
    for (let i = 0; i < bookList.length; i++) {
        let tileClass = bookList[i].read ? "read" : "unread";
        document.getElementById("tiles").innerHTML += `
        <div class="book-tile ${tileClass}">
        <p title="${bookList[i].title}">${bookList[i].title}</p>
        <p title="${bookList[i].author}">${bookList[i].author}</p>
        <p>${bookList[i].pages} pages</p>
        <div class="read-status"><p>Read</p><a src="#" class="read-button" data-index="${i}"><img src="./media/read${bookList[i].read}.png"></a></div>
        <a src="#" class="trash-button" data-index="${i}"><div class="trash"><a src="#" class="trash-button" data-index="${i}"><img src="./media/trash.png"></div></a>
        </div>
        `;
    }
    changeReadStatus();
    deleteBook();
    displayStats();
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
        // Check if the input is empty
        if (!input.value.trim()) { 
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

function changeReadStatus() {
    let readButtons = document.querySelectorAll(".read-button");

    readButtons.forEach(function(readButton) {
        readButton.addEventListener("click", function(event) {
            // Prevent the default anchor behavior 
            event.preventDefault(); 
            // Call your function here
            let index = parseInt(readButton.getAttribute("data-index"));
            bookList[index].read = !bookList[index].read;
            
            updateTiles();
        });
    });
}

function deleteBook() {
    let deleteButton = document.querySelectorAll(".trash");
    
    deleteButton.forEach(function(deleteButton) {
        deleteButton.addEventListener("click", function(event) {
            // Prevent the default anchor behavior 
            event.preventDefault(); 
            let index = parseInt(deleteButton.getAttribute("data-index"));
            let confirmation = window.confirm("Are you sure you want to delete this book?");

            if (confirmation) {
                bookList.splice(index,1);
                updateTiles();
            }
            
        });
    });
}

function displayStats() {
    let totalBooks = document.getElementById("total-books");
    let readBooks = document.getElementById("read-books");
    let unreadBooks = document.getElementById("unread-books");
    let timeBooks = document.getElementById("time-books");
    let readCount = 0;
    let unreadCount = 0;
    let hoursCount = 0;

    for (i = 0; i < bookList.length; i++) {
        if (bookList[i].read == false) {
            unreadCount += 1;
        } 
        if (bookList[i].read == true) {
            readCount += 1;
            hoursCount += parseInt(bookList[i].pages);
            console.log(hoursCount);
        }
    }

    if (readCount > 0) {
        hoursCount = (hoursCount / 60).toFixed(2);
    }

    totalBooks.innerHTML = `Total Books: ${bookList.length}`;
    readBooks.innerHTML = `Read Books: ${readCount}`;
    unreadBooks.innerHTML = `Unread Books ${unreadCount}`;
    timeBooks.innerHTML = `Reading time: ${hoursCount} hrs`;
}

function testSettings() {
     /**Temporary for tests */

     let newBook = new Book(
        "Sapiens",
        "Yuval Noah Harari",
        "512",
        false
        );
    bookList.push(newBook);

     document.getElementById("tiles").innerHTML += `
     <div class="book-tile ">
     <p title="${bookList[0].title}">${bookList[0].title}</p>
        <p title="${bookList[0].author}">${bookList[0].author}</p>
     <p>${bookList[0].pages} pages</p>
     <div class="read-status"><p>Read</p><a src="#" class="read-button" data-index="0"><img src="./media/read${bookList[0].read}.png"></a></div>
     <a src="#" class="trash-button" data-index=""><div class="trash"><a src="#" class="trash-button" data-index=""><img src="./media/trash.png"></div></a>
     </div>
     `;
     changeReadStatus()
     deleteBook();
}


resetTiles();
testSettings();
displayStats();