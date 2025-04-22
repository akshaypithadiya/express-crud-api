# Express Mongo CRUD API

A RESTful API for product management built with Node.js, Express, and MongoDB. Features complete CRUD operations, error handling, and a clean, maintainable architecture.

## Features

- Create a product
- Retrieve all products
- Retrieve a single product by ID
- Update a product
- Delete a product

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) or a local MongoDB instance

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/akshaypithadiya/express-mongo-crud-api.git
cd express-mongo-crud-api
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following :

```env
DB_USER=your_mongodb_username
DB_PASS=your_mongodb_password
DB_NAME=crud-db
PORT=3000
```

### 4. Start the Server

For development mode (with automatic restart on changes) :

```sh
npm run dev
```

For production mode :

```sh
npm run serve
```

### 5. API Endpoints

#### Get all products

```http
GET /api/products
```

#### Get a product by ID

```http
GET /api/products/:id
```

#### Create a new product

```http
POST /api/products
Content-Type: application/json
{
  "name": "Product Name",
  "quantity": 10,
  "price": 99.99,
  "image": "image_url"
}
```

#### Update a product

```http
PUT /api/products/:id
Content-Type: application/json
{
  "name": "Updated Name",
  "quantity": 20,
  "price": 199.99,
  "image": "new_image_url"
}
```

#### Delete a product

```http
DELETE /api/products/:id
```

## Folder Structure

```
/express-mongo-crud-api
│── /config
│   ├── db.js            # Database connection setup
│── /models
│   ├── product.model.js # Mongoose Product schema
│── /routes
│   ├── product.routes.js # Routes for product-related API endpoints
│── /controllers
│   ├── product.controller.js # Controller functions handling requests
│── /middlewares
│   ├── errorHandler.js  # Global error handler middleware
│── /utils
│   ├── logger.js        # Logging utility (optional)
│── /public              # Static files (if needed)
│── .env                 # Environment variables
│── .gitignore           # Ignore node_modules, .env, etc.
│── package.json         # Dependencies & scripts
│── server.js            # Entry point for the application
```
