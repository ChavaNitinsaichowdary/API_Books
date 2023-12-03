# API_Books
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
**Response**

Endpoint 3: Update Book Details</br>
Implement an endpoint that allows updating the details of a specific book in the library.</br>
Endpoint: PUT /api/books/{id}</br>
Request Body: JSON object with updated book details.</br>






## POST
