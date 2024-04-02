# Review Management System

This repository contains the source code for a Review Management System, which allows admins to manage reviews and assign them to employees.

## Setup

To run this application locally, follow these steps:


1. Clone the repository to your local machine: https://github.com/deependra-shekhawat/emp_project 
2. Navigate to the project directory: cd /emp_project
3. Install dependencies using npm: npm install 
4. Start the server: node index.js
5. Open your web browser and visit http://localhost:3000 to access the application.

**Note:** Create a ".env" file in root folder and assign "DB_CONNECTION_STRING=mongodb://localhost:27017/EmployeeFeedback"

## Usage

- **Admin Dashboard**: Admins can manage users, assign reviews, and view overall statistics.
- **Employee Dashboard**: Employees can view assigned reviews, submit feedback, and update their profile.
- **Sign In/Sign Up**: Users can sign in to access their dashboard or sign up for a new account.
- **Add/Edit Employee**: Admins can add new employees to the system or edit existing employee details.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Passport.js (for authentication)
- EJS (Embedded JavaScript) for views
- Bootstrap (for styling)

## Folder Structure

- `models/`: Contains Mongoose models for User and Review.
- `public/`: Includes static assets such as CSS and client-side JavaScript.
- `routes/`: Defines routes and controller functions for handling requests.
- `views/`: Contains EJS templates for rendering HTML pages.
- `index.js`: Entry point of the application.




