//    1. SAVING DATA (For add-book.html)
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
    // 4. Persistence: Save to LocalStorage
    // Get old books, add new one, save back
    let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    alert("Book Saved!");
    window.location.href = "index.html"; // Redirect to bookshelf
  });
}
