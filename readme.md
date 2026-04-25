# Simple CRUD RESTful API with Node.js & Express

![Demo Screenshot](./public/demo.jpg)

A lightweight RESTful API built with **Node.js** and **Express** that demonstrates full **CRUD** (Create, Read, Update, Delete) operations. This project serves as a clean, beginner-friendly reference implementation for building REST APIs with Node.js.

---

## 🚀 Features

- Full CRUD operations via RESTful endpoints
- Clean project structure and modular routing
- JSON request/response format
- Easy to extend and integrate with any frontend

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework & routing |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| nodemon | Auto-restart during development |

---

## 📁 Project Structure

```
├── routes/          # API route definitions
├── models/          # Mongoose data models
├── controllers/     # Business logic / request handlers
└── package.json
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v24)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/saeedking2020/Simple-CRUD-RESTful-API-with-Node-and-Express.git
cd Simple-CRUD-RESTful-API-with-Node-and-Express
```

2. **Install dependencies**

```bash
npm install
```

3. **addresses**

```bash
npm start
```

PORT=3000
MONGO_URI=mongodb://localhost:27017/crmDB
```

4. **Start the server**

# Production
npm start
```

The API will be running at `http://localhost:3000`.

---

## 📡 API Endpoints

Base URL: `http://localhost:3000/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/contact` | Get all items |
| `GET` | `/contact/:contactId` | Get a single item by ID |
| `POST` | `/contact` | Create a new item |
| `PUT` | `/contact/:contactId` | Update an item by ID |
| `DELETE` | `/contact/:contactId` | Delete an item by ID |

### Example Request — Create Item

```http
POST /api/contact
Content-Type: application/json

{
  "name": "Sample Item",
  "description": "A simple description"
}
```

### Example Response

```json
{
  "_id": "64a1f2c3e4b0a1234567890",
  "name": "Sample Item",
  "email": "1@2.com",
  "description": "A simple description",
  "createdAt": "2024-01-01T12:00:00.000Z"
}
```

---

## 🧪 Testing the API

You can test the endpoints using:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- `curl` from the terminal

---

## 📝 License

This project is developed by Saeed Doozandeh

---

## 👤 Author

**Saeed** — [GitHub](https://github.com/saeedking2020)
**Email** — [Email](saeed.doozandehce91@gmail.com)
**LinkedIn** — [LinkedIn](https://linkedin.com/in/saeeddoozandeh)