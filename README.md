# API_Books

This repo is a backend project which consists of building a RESTful API for a library system, incorporating three increasingly complex endpoints. The first endpoint involves retrieving all books from the database with proper error handling. The second endpoint requires adding a new book, necessitating validation, correct database insertion, and error handling for duplicate entries. The third endpoint involves updating the details of a specific book, including identification, validation, database update, and error handling for non-existent books
## Environment variables

Please create a `.env` file in the root directory of this repo and place the following two environment variables in it:

```
MONGODB_URI=
PORT=
```

I used MongoDB database to store data. So give MongoDB URL for conecting to your database.

## Installing dependencies

From your terminal:

```sh
npm install
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment


To run the app in production mode:

```sh
npm start
```
Make sure you have your mongodb database working.

### Testing
To test the API endpoints , I used postman.

# API endpoints

Three API end points</br>

Endpoint 1: Retrieve All Books </br>
Endpoint: GET /api/books</br>
## GET
**Response** </br>
Get request gives data of all books in json format</br>
Successfull response looks like below:
```
Successfull response :[
    {
        "_id": "656b38da2801ae797d473a06",
        "title": "Book 1",
        "author": "Author 1",
        "publishedYear": 2020,
        "__v": 0
    },
    {
        "_id": "656b52c62801ae797d473a0a",
        "title": "Book 2",
        "author": "Author 2",
        "publishedYear": 2021,
        "__v": 0
    }
]
if any error then response is
error :
{message : 'Internal server error!!'}
```
Endpoint 2: Add a New Book</br>
Implement an endpoint that allows the addition of a new book to the library.</br>
Endpoint: POST /api/books</br>
Request Body: JSON object representing the new book.</br>
## POST
**Response** 
```
RequestBody :
{
    "title": "Book 3",
    "author": "Author 3",
    "publishedYear": 2022
}
Response :
{
    "title": "Book 3",
    "author": "Author 3",
    "publishedYear": 2022,
    "_id": "656b535f2801ae797d473a0d",
    "__v": 0
}
```
## PUT
Endpoint 3: Update Book Details</br>
Implement an endpoint that allows updating the details of a specific book in the library.</br>
Endpoint: PUT /api/books/{id}</br>
Request Body: JSON object with updated book details.</br>
**Response**
```
RequestBody :
{
    "title": "Book 3",
    "author": "Author 3",
    "publishedYear": 2023
}
Response:
{
    "title": "Book 3",
    "author": "Author 3",
    "publishedYear": 2023,
    "_id": "656b535f2801ae797d473a0d",
    "__v": 0
}
if any error in request body then
Response:
{ error: 'Incomplete book details' }
if book not found then 
Response:
{ error: 'Book not found' }

```








## POST
