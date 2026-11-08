# Mini Store — MEAN Stack Final Project

## Project Description

Mini Store is a full-stack product management application developed using the MEAN Stack (MongoDB, Express.js, Angular, and Node.js).

The application allows users to register, log in, browse products, view product details, and perform complete CRUD operations through a responsive web interface.

## Technologies Used

### Backend
- Node.js and Express.js
- MongoDB Atlas and Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- express-validator
- dotenv and CORS

### Frontend
- Angular and TypeScript
- HTML and CSS
- Angular Forms and HTTP Client
- Responsive design with media queries

### Development Tools
- Visual Studio Code
- Git and GitHub
- Postman

## Implemented Features

### User Authentication
- User registration with name, email, and password.
- Password hashing using bcryptjs.
- Login authentication with JWT.
- Protected endpoints using authentication middleware.
- Form validation and error handling.
- Logout functionality.

### Product Management
- Create products.
- Retrieve all products.
- Retrieve individual products by ID.
- Update existing products.
- Delete products.
- Validate product information using express-validator.

### Frontend
- Registration and login pages.
- Product catalog with individual cards.
- Product detail pages.
- Forms for creating and updating products.
- Delete confirmation.
- Responsive layout for desktop, tablet, and mobile devices.

## Database Models

### User
Stores the user's name, email, hashed password, and timestamps.

### Product
Stores the product's name, description, price, category, optional image URL, and timestamps.

Both models use Mongoose and MongoDB Atlas.

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Check API status |
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login and generate JWT |
| GET | `/api/auth/me` | Retrieve authenticated user |
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve product details |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

Creating, updating, and deleting products requires a valid JWT Bearer Token.

## Project Structure

```text
proyecto-final-mean-stack/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   └── server.js
├── frontend/
│   └── src/
│       └── app/
│           ├── pages/
│           └── services/
└── README.md
```

## Running the Project

### Backend

Open the backend directory and run:

```bash
npm install
npm run dev
```

The backend requires the following environment variables in a `.env` file:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`

Backend: `http://localhost:3000`

### Frontend

Open the frontend directory and run:

```bash
npm install
npm start
```

Frontend: `http://localhost:4200`

Both servers must be running for the application to function locally.

## Testing

The backend API was tested using Postman, including registration, login, JWT authentication, product CRUD operations, and input validation.

The frontend integrates these operations through Angular services and displays the results in the web interface.

## GitHub Development

Development was organized using Git branches, commits, and Pull Requests.