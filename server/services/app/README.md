# p2-iproject-server
Individual Project - Server

## Endpoints

List of Available Endpoints:

- `POST /register`
- `POST /login`

- `GET /items`
- `DELETE /items/:itemId`
- `GET /items/:itemId` 
- `POST /items` 
- `PUT /items/:itemId` 

- `GET /categories`
- `DELETE /categories/:categoryId`
- `GET /categories/:categoryId` 
- `POST /categories` 
- `PUT /categories/:categoryId` 

- `GET /ingredients`
- `GET /users`

### POST /register

#### Description

- Create New User Data

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

#### Response

_200 - OK_

```json
{
    "username": String,
    "email": String,
    "role": String
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

_400 - Bad Request_

```json
{
    "message": "Email and password are required"
}
```


### POST /login

#### Description

- Logging into application 

#### Request

- Body

  ```json

  {
    "email": String,
    "password": String,
  }

  ```

#### Response

_200 - OK_

```json
{
  {
    "access_token": String,
    "username": String,
    "role": String,
    "userId": Integer
}
}
```

_400 - Bad Request_

```json
{
    "message": "Email and password are required"
}
```



### GET /items

#### Description

- Get All Items Data

#### Response

_200 - OK_

```json
[
  {
    "id": Integer,
    "name": String,
    "description": String,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": {
      "id": Integer,
      "username": String,
      "email": String,
      "role": String,
      "phoneNumber": String,
      "address": String,
      "createdAt": Date,
      "updatedAt": Date
    },
    "Category": {
      "id": Integer,
      "name": String,
      "createdAt": Date,
      "updatedAt": Date
    }
  },
  ...
  
]
```

### DELETE /items/:itemId

#### Description

- Delete One Item Data By Id

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Params
  ```json
  {
    "itemId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
"message" : "${itemName} (id ${itemId}) is successfully deleted"
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### GET /items/:itemId

#### Description

- Delete One Item Data By Id

#### Request



- Params
  ```json
  {
    "itemId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
    "id": Integer,
    "name": String,
    "description": String,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "User": {
      "id": Integer,
      "username": String,
      "email": String,
      "role": String,
      "phoneNumber": String,
      "address": String,
      "createdAt": Date,
      "updatedAt": Date
    },
    "Category": {
      "id": Integer,
      "name": String,
      "createdAt": Date,
      "updatedAt": Date
    }
  }
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### POST /items

#### Description

- Create New Data Item

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Body
  ```json
  {
    "name": String,
    "description": String,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "ingredients": [
      {
        "name": String,
      },
      ...
    ]
  }
  ```
#### Response

_200 - OK_

```json
{
  "message": `Item  is successfully created`,
  "data" : {
    "id": Integer,
    "name": String,
    "description": String,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
  }
}

```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### PUT /items/:itemId

#### Description

- Edit Item Data By Id

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Body
  ```json
  {
    "name": String,
    "description": String,
    "price": Integer,
    "imgUrl": String,
    "authorId": Integer,
    "categoryId": Integer,
    "ingredients": [
      {
        "name": String,
      },
      ...
    ]
  }
  ```

- Params
  ```json
  {
    "itemId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
  "message" : `Item is successfully updated`
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```


### GET /categories

#### Description

- Get All Categories Data

#### Response

_200 - OK_

```json
[
  {
    "id": Integer,
    "name": String,
    "createdAt": Date,
    "updatedAt": Date
  },
  ...
]
```

### DELETE /categories/:categoryId

#### Description

- Delete One Category Data By Id

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Params
  ```json
  {
    "categoryId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
  "message": `Category  is successfully deleted`,
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### GET /categories/:categoryId

#### Description

- Get One Category Data By Id

#### Request



- Params
  ```json
  {
    "categoryId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
    "id": Integer,
    "name": String,
    "createdAt": Date,
    "updatedAt": Date
}
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### POST /categories

#### Description

- Create New Data Category

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Body
  ```json
  {
    "name": String,
  }
  ```
#### Response

_200 - OK_

```json
{
  "message": `Category is successfully created`,
}

```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```

### PUT /categories/:categoryId

#### Description

- Edit Category Data By Id

#### Request

- Headers
  ```json
  {
    "access_token": String
  }
  ```

- Body
  ```json
  {
    "name": String,
  }
  ```

- Params
  ```json
  {
    "categoryId": Integer,
  }
  ```
#### Response

_200 - OK_

```json
{
    "id": Integer,
    "name": String,
    "createdAt": Date,
    "updatedAt": Date
  },
```

_401 - Unauthorized_

```json
{
    "message": "Invalid Token"
}
```




### GET /ingredients

#### Description

- Get All Ingredients Data

#### Response

_200 - OK_

```json
[
  {
    "id": Integer,
    "name": String,
    "itemId": Integer,
    "createdAt": Date,
    "updatedAt": Date,
    "Item": {
      "id": Integer,
      "name": String,
      "description": String,
      "price": Integer,
      "imgUrl": String,
      "authorId": Integer,
      "categoryId": Integer,
      "createdAt": Date,
      "updatedAt": Date
    }
  },
  ...
]
```

### GET /users

#### Description

- Get All Users Data

#### Response

_200 - OK_

```json
[
  {
    "id": Integer,
    "username": String,
    "email": String,
    "role": String,
    "phoneNumber": String,
    "address": String,
    "createdAt": Date,
    "updatedAt": Date,
    "Items": [
      {
        "id": Integer,
        "name": String,
        "description": String,
        "price": Integer,
        "imgUrl": String,
        "authorId": Integer,
        "categoryId": Integer,
        "createdAt": Date,
        "updatedAt": Date
      },
      ...
    ]
  },
  ...
]
```



### Global Error

#### Response

_500 - Internal Server Error_

```json
{
  "statusCode": 500,
  "error": {
    "message": "Internal Server Error"
  }
}
```
