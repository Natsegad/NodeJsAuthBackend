# Example
POST http://localhost:8080/login/
```json 
{
    "email":"xbusc@gmail.com",
    "password":"1313"
}
```
Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODYxYWMyYjQ2ZjYzOTEyYmE1ZDAxMCIsImlhdCI6MTY2OTc1MjI3NCwiZXhwIjoxNjY5Nzg4Mjc0fQ.ygOW92qj6rEt_c8G7hKPXpqVIqVCv3m1LZ8xVdJRjUg",
    "login": "ok"
}
```


POST http://localhost:8080/register/
```json
{
    "email":"xbusc@gmail.com",
    "password":"asdasd",
    "name":"asdasd"
}
```
Response
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODYxZTZhOTIxYTVhMTFiZDQ3ZDA3NCIsImlhdCI6MTY2OTczMzk5NCwiZXhwIjoxNjY5NzY5OTk0fQ.SUISzWTcBPg7sibFhj3pikzoiu1e0gvijUnhaeOl56A"
}
```
