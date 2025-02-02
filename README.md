# Nestjs

# Run App Localy

### create file .env from .env.example

```
cp .env.example .env
```

### edit .env

```
nano .env
```

### install requirement

```
npm install
```

### run migration

```
npm run migration:run
```

### run app

```
npm run start:dev
```

### open app & documentation

```
http://localhost:3000
```


# Access Endpoint Demo

### Register

```bash
POST http://194.233.69.244:2050/register
```

```json
# payload 
{
    "email": "user@gmail.com",
    "password": "password",
    "fullname": "User"
}
```

```json
# response
{
    "statusCode": 201,
    "message": "Success",
    "error": null,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzM4NTAzMjkzLCJleHAiOjE3Mzg1ODk2OTN9.IphstG5JE5HLiC0aHd6iLIQIQCCSOsHDhlje48-1jJ8",
        "user": {
            "id": 5,
            "email": "user@gmail.com",
            "fullname": "User",
            "role": "user",
            "is_active": true,
            "created_by": null,
            "created_at": "2025-02-02T13:34:44.267Z",
            "updated_by": null,
            "updated_at": "2025-02-02T13:34:44.267Z",
            "deleted_at": null
        }
    }
}
```

### Login

```bash
POST http://194.233.69.244:2050/login
```

```json
# payload
{
    "email": "user@gmail.com",
    "password": "password",
    "fullname": "User"
}
```

```json
# response
{
    "statusCode": 201,
    "message": "Success",
    "error": null,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzM4NTAzMjkzLCJleHAiOjE3Mzg1ODk2OTN9.IphstG5JE5HLiC0aHd6iLIQIQCCSOsHDhlje48-1jJ8",
        "user": {
            "id": 5,
            "email": "user@gmail.com",
            "fullname": "User",
            "role": "user",
            "is_active": true,
            "created_by": null,
            "created_at": "2025-02-02T13:34:44.267Z",
            "updated_by": null,
            "updated_at": "2025-02-02T13:34:44.267Z",
            "deleted_at": null
        }
    }
}
```

## Gift

untuk endpoint /gift \nget & get by id → bisa diakses tanpa token\npost, put, delete by id → perlu jwt token

### Get All

```json
GET http://194.233.69.244:2050/gift?per_page=2&page=1&sort_column=count_rating&sort=ASC
```

```json
# response 
{
    "statusCode": 200,
    "message": "Success",
    "error": null,
    "data": {
        "data": [
            {
                "id": 2,
                "name": "Samsung Galaxy S10",
                "description": "Generasi 10",
                "price": 10000000,
                "stock": 2,
                "count_rating": 3,
                "count_review": 10,
                "is_active": true,
                "created_by": null,
                "created_at": "2025-02-02T08:59:51.747Z",
                "updated_by": null,
                "updated_at": "2025-02-02T08:59:51.747Z",
                "deleted_at": null
            },
            {
                "id": 3,
                "name": "Samsung Galaxy S11",
                "description": "Generasi 11",
                "price": 11000000,
                "stock": 6,
                "count_rating": 3.1,
                "count_review": 11,
                "is_active": true,
                "created_by": null,
                "created_at": "2025-02-02T09:02:27.400Z",
                "updated_by": null,
                "updated_at": "2025-02-02T09:02:27.400Z",
                "deleted_at": null
            }
        ],
        "meta": {
            "page": 1,
            "per_page": 2,
            "total_data": 5,
            "total_page": 3
        }
    }
}
```

### Get By Id

```json
GET http://194.233.69.244:2050/gift/1
```

```json
# response 
{
    "statusCode": 200,
    "message": "Success",
    "error": null,
    "data": {
        "id": 1,
        "name": "Samsung Galaxy S9",
        "description": "Generasi 9",
        "price": 9000000,
        "stock": 0,
        "count_rating": 4.653125,
        "count_review": 9,
        "is_active": true,
        "created_by": null,
        "created_at": "2025-02-02T08:59:18.550Z",
        "updated_by": null,
        "updated_at": "2025-02-02T13:17:20.370Z",
        "deleted_at": null
    }
}
```

### Create

```json
POST http://194.233.69.244:2050/gift
--header 'Authorization: bearer <token>'
```

```json
# payload
{
    "name": "Samsung Galaxy S25",
    "description": "Generasi 25",
    "price": 25000000,
    "stock": 25,
    "count_rating": 2.5,
    "count_review": 25
}
```

```json
# response
{
    "statusCode": 201,
    "message": "Success",
    "error": null,
    "data": {
        "name": "Samsung Galaxy S25",
        "description": "Generasi 25",
        "price": 25000000,
        "stock": 25,
        "count_rating": 2.5,
        "count_review": 25,
        "created_by": null,
        "updated_by": null,
        "id": 7,
        "is_active": true,
        "created_at": "2025-02-02T13:56:56.928Z",
        "updated_at": "2025-02-02T13:56:56.928Z",
        "deleted_at": null
    }
}
```

### Create Redeem

```json
POST http://194.233.69.244:2050/gift/1/redeem
--header 'Authorization: bearer <token>'
```

```json
# response success
{
    "statusCode": 201,
    "message": "Success",
    "error": null,
    "data": {
        "id": 2,
        "name": "Samsung Galaxy S10",
        "description": "Generasi 10",
        "price": 10000000,
        "stock": 1, // stock berkurang
        "count_rating": 3,
        "count_review": 10,
        "is_active": true,
        "created_by": null,
        "created_at": "2025-02-02T08:59:51.747Z",
        "updated_by": null,
        "updated_at": "2025-02-02T14:00:45.921Z",
        "deleted_at": null
    }
}
```

```json
# response failed
{
    "statusCode": 500,
    "message": "Stock not ready",
    "error": "Error",
    "data": {}
}
```

### Create Rating

```json
POST http://194.233.69.244:2050/gift/1/rating
--header 'Authorization: bearer <token>'
```

```json
# payload
{
    "rating": 5
}
```

```json
# response 
{
    "statusCode": 201,
    "message": "Success",
    "error": null,
    "data": {
        "id": 2,
        "name": "Samsung Galaxy S10",
        "description": "Generasi 10",
        "price": 10000000,
        "stock": 1,
        "count_rating": 4.5, // rating berubah
        "count_review": 10,
        "is_active": true,
        "created_by": null,
        "created_at": "2025-02-02T08:59:51.747Z",
        "updated_by": null,
        "updated_at": "2025-02-02T14:01:56.537Z",
        "deleted_at": null
    }
}
```

### 

### Update By Id

```json
POST http://194.233.69.244:2050/gift/1
--header 'Authorization: bearer <token>'
```

```json
# payload
{
    "description": "Update deskripsi"
}
```

```json
# response
{
    "statusCode": 200,
    "message": "Success",
    "error": null,
    "data": {
        "id": 1,
        "description": "Update deskripsi",
        "created_by": null,
        "updated_by": null,
        "updated_at": "2025-02-02T13:58:34.877Z"
    }
}
```

### Delete By Id

```json
DELETE http://194.233.69.244:2050/gift/1
--header 'Authorization: bearer <token>'
```

```json
# response
{
    "statusCode": 200,
    "message": "Success",
    "error": null
}
```

## User

untuk endpoint /user\nsemua method get, post, put, delete memerlukan token

### Get All

```json
GET http://194.233.69.244:2050/user
--header 'Authorization: bearer <token>'
```

```json
# response
{
    "statusCode": 200,
    "message": "Success",
    "error": null,
    "data": [
        {
            "id": 1,
            "email": "akatgelar@gmail.com",
            "fullname": "Gelar Aditya",
            "role": "user",
            "is_active": true,
            "created_by": null,
            "created_at": "2025-02-02T07:58:40.373Z",
            "updated_by": null,
            "updated_at": "2025-02-02T07:58:40.373Z",
            "deleted_at": null
        },
        {
            "id": 5,
            "email": "admin@gmail.com",
            "fullname": "Admin",
            "role": "user",
            "is_active": true,
            "created_by": null,
            "created_at": "2025-02-02T14:03:12.899Z",
            "updated_by": null,
            "updated_at": "2025-02-02T14:03:12.899Z",
            "deleted_at": null
        }
    ]
}
```

### Get By Id

```json
GET http://194.233.69.244:2050/user/5
--header 'Authorization: bearer <token>'
```

```json
# response
{
    "statusCode": 200,
    "message": "Success",
    "error": null,
    "data": {
        "id": 5,
        "email": "admin@gmail.com",
        "fullname": "Admin",
        "role": "user",
        "is_active": true,
        "created_by": null,
        "created_at": "2025-02-02T14:03:12.899Z",
        "updated_by": null,
        "updated_at": "2025-02-02T14:03:12.899Z",
        "deleted_at": null
    }
}
```

### Create

```json
POST http://194.233.69.244:2050/user
--header 'Authorization: bearer <token>'
```

```json
# payload
{  
    "username": "gelar",
    "password": "password",
    "fullname": "gelar aditya",
    "role": "viewer",
    "is_active": true
}
```

```json
# response 
{
    "message": "Create data successful",
    "status_code": 200,
    "success": 1,
  "data": {
      "email": "admin@gmail.com",
      "fullname": "Admin",
      "created_by": null,
      "updated_by": null,
      "id": 5,
      "role": "user",
      "is_active": true,
      "created_at": "2025-02-02T14:03:12.899Z",
      "updated_at": "2025-02-02T14:03:12.899Z",
      "deleted_at": null
    }
}
```

### Update by Id

```json
Put http://194.233.69.244:2050/user/5
--header 'Authorization: bearer <token>'
```

```json
# payload
{  
    "fullname": "Administrator"
}
```

```json
# response 
{
    "message": "Create data successful",
    "status_code": 200,
    "success": 1,
    "data": {
      "email": "admin@gmail.com",
      "fullname": "Administrator",
      "created_by": null,
      "updated_by": null,
      "id": 5,
      "role": "user",
      "is_active": true,
      "created_at": "2025-02-02T14:03:12.899Z",
      "updated_at": "2025-02-02T14:03:12.899Z",
      "deleted_at": null
    }
}
```

### Delete By Id

```json
DELETE http://194.233.69.244:2050/user/5
--header 'Authorization: bearer <token>'
```


\

# Developer notes

### after create module / entitiy, generate migration

```
npm run migration:generate
```

### run migration

```
npm run migration:run
```

### create resource

```
nest g res user
nest g module auth
nest g controller auth
nest g service auth
```

###