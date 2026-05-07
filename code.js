//    1. SAVING DATA (For add-book.html)
const bookForm = document.getElementById('book-form');

// Add Book page...
if (bookForm) {
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from refreshing
//  1. Get values from the input boxes
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;
        const review = document.getElementById('review').value;
        const coverUrl = document.getElementById('coverUrl').value;
        // 2.Validation
        if (title === "" || author === "") {
            alert("Please fill in the required fields!");
            return;
        };
        // 3. Create a simple object
        const newBook = {
            title: title,
            author: author,
            genre: genre,
            review: review,
            coverUrl: coverUrl || "https://via.placeholder.com/150" // fallback image
        };