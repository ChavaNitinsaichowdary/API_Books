# API_Books
# API endpoints
Three API end points
Endpoint 1: Retrieve All Books
Implement an endpoint that retrieves a list of all books in the library from the database.

Endpoint: GET /api/books
Evaluation Criteria:
Correct retrieval of all books from the database.
Proper error handling for database connection issues.

Endpoint 2: Add a New Book
Implement an endpoint that allows the addition of a new book to the library.
Endpoint: POST /api/books
Request Body: JSON object representing the new book.
Evaluation Criteria:
Proper validation of the request payload.
Correct insertion of the new book into the database.
Appropriate handling of errors, such as duplicate book entries.

Endpoint 3: Update Book Details
Implement an endpoint that allows updating the details of a specific book in the library.
Endpoint: PUT /api/books/{id}
Request Body: JSON object with updated book details.

## GET
**Response** 
Get request gives data of all books in json format
Successfull response looks like below:
books : [
  { title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
  { title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
];
if any error then response is:
{message : 'Internal server error!!'}




## POST
