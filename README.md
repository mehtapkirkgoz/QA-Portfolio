# API Testing Portfolio – Practice Software Testing

## Project Overview

This project demonstrates basic API testing activities performed on the Practice Software Testing REST API using Postman.

The purpose of this project is to practice and demonstrate fundamental API testing skills such as sending HTTP requests, validating response status codes, checking response bodies, testing authenticated endpoints, and performing positive and negative API tests.

Tested API: Practice Software Testing API

---

## Scope

The following API operations were included in this project:

- GET all products
- GET single product by ID
- Negative GET request with invalid product ID
- User login
- Bearer token authentication
- GET all users
- POST create user
- PUT update user
- DELETE user

---

## HTTP Methods Practiced

- GET
- POST
- PUT
- DELETE

---

## Authentication

Some endpoints required authentication.

The login endpoint was used to obtain an access token.

The token was stored as a Postman collection variable:

```text
{{accessToken}}
```

Authenticated requests were sent using:

```text
Authorization: Bearer {{accessToken}}
```

---

## API Tests and Assertions

Basic Postman test scripts were created to validate API responses.

Examples include:

- Verify status code is `200`
- Verify status code is `201`
- Verify status code is `404`
- Verify response contains an `id`
- Verify product ID matches the requested product
- Verify user information matches the request data
- Verify successful update response
- Verify successful delete response
- Verify error message for an invalid product ID

Example status code test:

```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```

Example response validation:

```javascript
const response = pm.response.json();

pm.test("Response contains user id", function () {
    pm.expect(response).to.have.property("id");
});
```

---

## Negative Testing

Negative API testing was also performed.

### Invalid Product ID

A request was sent using an invalid product ID.

Expected result:

```text
404 Not Found
```

Actual response:

```json
{
    "message": "Requested item not found"
}
```

Both the status code and the error message were validated using Postman tests.

---

## Dynamic Product ID

During testing, product IDs were observed to change because the demo API data can be refreshed.

To avoid manually updating the product ID, the ID of the first product returned by the products endpoint was stored as a Postman collection variable:

```text
{{productId}}
```

This variable was then used in the single product request.

---

## Requests Included

### Products

- Get All Products
- Get Product by ID
- Get Product With Invalid ID

### Users

- Login User
- Get All Users
- Create User
- Update User
- Delete User

---

## Tools Used

- Postman
- Git
- GitHub
- Practice Software Testing REST API

---

## Repository Structure

```text
api-testing-postman
│
├── README.md
│
└── postman
    └── collections
        └── Practice-Software-Testing-API.postman_collection.json
```

---

## What I Learned

During this project, I practiced how to:

- Send GET, POST, PUT, and DELETE requests
- Read API documentation
- Understand HTTP status codes
- Validate JSON response bodies
- Write basic Postman test scripts
- Perform positive and negative API testing
- Use Bearer Token authentication
- Store and use Postman collection variables
- Work with dynamic resource IDs
- Validate API error responses
- Test protected API endpoints

---

## Project Status

Completed.

This project represents my second QA portfolio project and focuses on basic API testing with Postman.

It follows my first manual testing project and will be followed by projects focusing on SQL/database validation and test automation.
