//    1. SAVING DATA (For add-book.html)
const bookForm = document.getElementById('book-form');

// Add Book page...
if (bookForm) {
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from refreshing
 1. Get values from the input boxes
        const title = document.getElementById('title').value;
        const author = 