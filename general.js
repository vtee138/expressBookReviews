const axios = require('axios');
const baseURL = 'http://localhost:5000';

// 1. Get all books (Async/Await)
const getAllBooks = async () => {
    try {
        const response = await axios.get(`${baseURL}/`);
        console.log("All Books:", response.data);
    } catch (error) {
        console.error("Error fetching all books:", error.message);
    }
};

// 2. Get book by ISBN (Promise)
const getBookByISBN = (isbn) => {
    axios.get(`${baseURL}/isbn/${isbn}`)
        .then(response => console.log(`Book ISBN ${isbn}:`, response.data))
        .catch(error => console.error("Error fetching by ISBN:", error.message));
};

// 3. Get book by Author (Async/Await)
const getBookByAuthor = async (author) => {
    try {
        const response = await axios.get(`${baseURL}/author/${author}`);
        console.log(`Books by ${author}:`, response.data);
    } catch (error) {
        console.error("Error fetching by author:", error.message);
    }
};

// 4. Get book by Title (Promise)
const getBookByTitle = (title) => {
    axios.get(`${baseURL}/title/${title}`)
        .then(response => console.log(`Book titled ${title}:`, response.data))
        .catch(error => console.error("Error fetching by title:", error.message));
};