//    1. SAVING DATA (For add-book.html)
const bookForm = document.getElementById('book-form');

// Add Book page...
if (bookForm) {
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from refreshing
