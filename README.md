# book-api
Node.js Book API

# Books
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/books | `GET` | Empty | List all books. |
| /api/books/new | `POST` | {'title':'foo', 'category':'bar', year:1990, author:"id", point: 9.7 } | Create a newbooks. |
| /api/movies/book_id | `GET` | Empty | Get abooks. |
| /api/movies/book_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a books with new info. |
| /api/books/book_id | `DELETE` | Empty | Delete a book. |
| /api/books/top10 | `GET` | Empty | Get the top 10 books. |
| /api/books/between/:start_year/:end_year | `GET` | Empty | Books between two dates. |
 
# Authors
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /api/authors | `GET` | Empty | List all authors. |
| /api/authors | `POST` | { name: 'foo', surname:'bar', bio:'lorem ipsum' } | Create a new author. |
| /api/authors/:author_id | `GET` | Empty | Get a author. |
| /api/authors/:author_id | `PUT` | {'name':'foo', 'surname':'bar', 'bio': 'lorem'} | Update a author with new info. |
| /api/authors/:author_id | `DELETE` | Empty | Delete a author. |
| /api/authors/:author_id/best10book | `GET` | Empty | The director's top 10 books. |
 
# Index
 
| Route | HTTP Verb | POST body | Description |
| --- | --- | --- | --- |
| /register | `POST` | { username: 'foo', password:'1234' } | Create a new user. |
| /authenticate | `POST` | { username: 'foo', password:'1234' } | Generate a token. |
