//    1. add-book.html
const bookForm = document.getElementById("book-form");

// Add Book page...
if (bookForm) {
  bookForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page from refreshing
    //  1. Get values from the input boxes
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const review = document.getElementById("review").value;
    const coverUrl = document.getElementById("coverUrl").value;

    // 2.Validation
    if (title === "" || author === "") {
      alert("Please fill in the required fields!");
      return;
    }
    // 3. Create a simple object
    const newBook = {
      title: title,
      author: author,
      genre: genre,
      review: review,
      coverUrl: coverUrl || "https://via.placeholder.com/150", // fallback image
    };
    // 4.Saving to LocalStorage
    // Getting old books, add new one, save back
    let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    //stringify because local storage saves stirngs not objects

    alert("Book Saved");
    window.location.href = "index.html"; // Move user to bookshelf
  });
}
// 2. SHOWING DATA-index.html
const displayArea = document.getElementById("book-display-area");
// If we are on the Bookshelf page...
if (displayArea) {
  // 1. Get data from LocalStorage
  const savedBooks = JSON.parse(localStorage.getItem("myLibrary")) || [];
  // 2. Loop through the books and create HTML for each
  savedBooks.forEach((book, index) => {
    // Create a new div element (DOM Manipulation)
    const card = document.createElement("div");
    card.className = "book-card";
    // Set the internal HTML (Side-by-side layout)
    card.innerHTML = `
            <div class="card-image-box">
                <img src="${book.coverUrl}">
            </div>
            <div class="card-info-box">
                <h3>${book.title}</h3>
                <p>By: ${book.author}</p>
                <span class="genre-tag">${book.genre}</span>
                <p>${book.review}</p>
                <button onclick="deleteBook(${index})">Remove</button>
            </div>
        `;

    // Add the card to the page
    displayArea.appendChild(card);
  });
}
const spotlightStats = document.getElementById("spotlight-stats");
if (spotlightStats) {
  const books = JSON.parse(localStorage.getItem("myLibrary")) || [];
  spotlightStats.innerHTML = `<h3>You have cataloged ${books.length} books.</h3>`;
}
//3. DELETING DATA
function deleteBook(index) {
  let myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  myLibrary.splice(index, 1); // Remove item at this index
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary)); // Save back
  location.reload(); // Refresh page to see it's gone
}
