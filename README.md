# Healthcare Backend API

A Node.js backend application for healthcare management system with patient-doctor mapping functionality.

## Features

- User authentication (register/login)
- Patient management
- Doctor management  
- Patient-Doctor mapping system
- Secure JWT-based authentication
- PostgreSQL database integration

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Patients
- Patient management endpoints

### Doctors  
- Doctor management endpoints

### Mappings
- Patient-Doctor mapping endpoints

## Installation

1. Clone the repository
```bash
git clone https://github.com/Adarshkumar24/healthcare_backend.git
cd healthcare_backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with:
```
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

4. Start the server
```bash
npm start
```

## Testing Screenshots

The `screenshots` folder contains proof of testing for all API endpoints:

- User Registration
- User Login  
- Doctor Management
- Patient Management
- Patient-Doctor Mappings
- Database Connection

## Project Structure

```
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # Database models
│   └── routes/          # API routes
├── screenshots/         # API testing screenshots
├── server.js           # Entry point
└── package.json        # Dependencies
```

## License

This project is licensed under the MIT License.
