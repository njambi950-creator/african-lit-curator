# Lugha & Lore: African Literature Curator

### Project Description
**Lugha & Lore** is a functional web application designed to help users curate and manage a personal 
collection of African literature. The project focuses on the intersection of identity, tradition,
and speculative genres like Afrofantasy. 

In many mainstream book-tracking apps, niche African genres and traditional narratives are often overlooked. 
This application solves that problem by providing a specialized, user-friendly platform where readers can 
document their literary journey, store personal reflections, and celebrate authors like Tomi Adeyemi, Ken Walibora, 
and Chimamanda Ngozi Adichie.


### How It Works
1.  **Cataloging:** The user enters book details (Title, Author, Genre, and Review) using a validated HTML form.
2.  **Persistence:** JavaScript captures the input and saves it to the browser's **localStorage**.
3.  This ensures the library remains intact even if the page is refreshed or the browser is closed.
4.  **Dynamic Display:** The application retrieves the stored data and dynamically generates "Book Cards"
5.   on the main bookshelf using DOM manipulation.
6.  **Discovery:** Users can visit the "Author Spotlight" page to learn more about the cultural significance
7.  and history of the authors featured in their collection.

### Author Information
*   **Name:** Maryann Njambi Ngugi
*   **GitHub:** 

### Setup Instructions

#### Prerequisites
*   A modern web browser (Chrome, Firefox, Safari, or Edge)
*   A text editor (e.g., VS Code) for viewing the source code.

#### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/lugha-and-lore.git](https://github.com/your-username/lugha-and-lore.git)
    cd lugha-and-lore
    ```
2.  **Launch the App:**
    Simply open the `index.html` file in your browser. No server setup or external dependencies are required.

### BDD (Behavior-Driven Development)

**Feature: User can manage a personal book collection**

*   **Scenario 1: User adds a valid book entry**
    *   **Given:** The user is on the "Add Book" page.
    *   **When:** The user enters a title, author, and genre, then clicks "Save to Library."
    *   **Then:** The book is saved and appears on the "Bookshelf" gallery.
*   **Scenario 2: User submits an incomplete form**
    *   **Given:** The user is on the "Add Book" page.
    *   **When:** The user leaves the "Title" field blank and clicks "Save."
    *   **Then:** An error message appears asking the user to fill in all required fields.
*   **Scenario 3: Data persists after refresh**
    *   **Given:** The user has added books to their library.
    *   **When:** The user refreshes the browser or closes the tab.
    *   **Then:** The previously added books are still visible on the "Bookshelf" page.

### Technologies Used
*   **HTML5:** Semantic markup (`<nav>`, `<article>`, `<section>`) for accessibility.
*   **CSS3:** Responsive design using **Flexbox** and **CSS Grid**.
*   **JavaScript (ES6):**
    *   `localStorage` for data persistence.
    *   DOM Manipulation for dynamic content rendering.
    *   Event Listeners for form handling and navigation.

### Project Structure
```text
lugha-and-lore/
│
├── index.html          # Main gallery (The Bookshelf)
├── add-book.html       # Input form (The Curator)
├── spotlight.html      # Educational content (Author Spotlight)
├── style.css           # Global styling and responsive layouts
├── script.js           # JavaScript logic for storage and rendering
└── README.md           # Project documentation
License and Copyright
Copyright © 2026 Maryann Njambi Ngugi.

This project is licensed under the MIT License.

