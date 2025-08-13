Final Year Project (BS, ADP) – Documentation
Title and Description
Title: Hotel Booking & Management System (Full-Stack MERN Application)
 Description:
 This project is a web-based hotel booking and management platform designed to streamline the process of room reservations, customer management, and administrative control. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it offers both client-facing and admin-facing features, including booking, user registration, contact forms, room management, and secure authentication.
Table of Contents
Chapter No 1: Introduction to the Problem
 1.1 Introduction
 1.2 Background
 1.3 Purpose
 1.4 Scope
 1.5 Objective
 1.6 Intended Audience and Reading Suggestions
 1.7 Document Conventions
Chapter No 2: Software Requirement Specification
 2.1 Overall Description
  2.1.1 Product Perspectives
  2.1.2 Product Features
  2.1.3 Design and Implementation Constraints
  2.1.4 Assumption and Dependencies
 2.2 System Features
  2.2.1 Authentication and Authorization
  2.2.2 Booking Management
  2.2.3 Room Management
  2.2.4 Contact Management
 2.3 External Interface Requirements
  2.3.1 User Interfaces
  2.3.2 Hardware Interfaces
  2.3.3 Software Interfaces
  2.3.4 Communication Interfaces
 2.4 Other Nonfunctional Requirements
  2.4.1 Performance Requirements
  2.4.2 Safety Requirements
  2.4.3 Security Requirements
Chapter No 3: Analysis (Use Case Model)
 3.1 Identifying Actors and Use Cases Using Textual Analysis
 3.2 Forming Use Case Diagram with Candidate and Use Cases
 3.3 Describing the Events Flow for Use Cases
Chapter No 4: Design
 4.1 Architecture Diagram
 4.2 ERD with Data Dictionary
 4.3 Data Flow Diagram (Level 0 and Level 1)
 4.4 Class Diagram
 4.5 Object Diagram
 4.6 Sequence Diagram
 4.7 Activity Diagram
 4.8 Collaboration Diagram
 4.9 State Transition Diagram
Chapter No 5: Implementation
 5.1 Backend Implementation
  5.1.1 Server & Configuration (server.js, db/dbconfig.js, .env, package.json)
  5.1.2 Middleware (authMiddleware.js)
  5.1.3 Models (booking.js, Contact.js, Room.js, User.js)
  5.1.4 Controllers (bookings.js, contact.js, rooms.js, user.js, utils/email.js)
  5.1.5 Routes (admin.js, adminRoutes.js, booking.js, contact.js, rooms.js, user.js)
  5.1.6 Utilities (text.js)
  5.1.7 Backend Testing & Debugging
   - Manual Testing
   - Automated Testing
   - Error Handling
5.2 Frontend Implementation
  5.2.1 Entry Points & Configuration (index.js, App.jsx, tailwind.config.js, .env)
  5.2.2 Components (Navbar.jsx, Footer.jsx, PrivateRoute.jsx)
  5.2.3 Pages
   - Homepage
   - Admin Pages (AdminDashboard.jsx, AllBookings.jsx, AllContacts.jsx, AllRooms.jsx, AllUsers.jsx, RoomForm.jsx, UpdateBookingForm.jsx, UpdateRoomForm.jsx)
   - Client Pages (About.jsx, AccountPage.jsx, BookingForm.jsx, Clientrev.jsx, Contact.jsx, ForgotPassword.jsx, Gallery.jsx, Login.jsx, NotFoundPage.jsx, Register.jsx, ResetPassword.jsx, Services.jsx)
  5.2.4 Assets & Styling (custom.css, index.css, images)
  5.2.5 Public & Build Files (index.html, favicon, manifest.json, robots.txt, build/)
  5.2.6 Frontend Testing & Debugging (Manual Testing, Error Handling, Common Issues)
Chapter No 6: Testing (Software Quality Attributes)
 (Details to be provided later)
Chapter No 7: Tools and Technologies
 7.1 Programming Languages (JavaScript, JSX, CSS)
 7.2 Operating Environment (Node.js, Browser)

List of Tables
# SRS, Database Schema, and Test Cases

## SRS (Software Requirements Specification) – Table Overview

- **User**
  - Stores user information (name, email, password, role, etc.)
- **Room**
  - Stores room details (room number, type, price, status, etc.)
- **Booking**
  - Stores booking information (user, room, dates, status, etc.)
- **Contact**
  - Stores contact form submissions (name, email, message, etc.)

---

## Database Schema (MongoDB Collections)

- **users**
  - _id, name, email, password, role, createdAt, updatedAt
- **rooms**
  - _id, roomNumber, type, price, status, description, createdAt, updatedAt
- **bookings**
  - _id, userId, roomId, checkIn, checkOut, status, createdAt, updatedAt
- **contacts**
  - _id, name, email, message, createdAt

---

## Test Cases (Sample)

- **User Registration**
  - Input: Valid/invalid user data
  - Expected: User created or error returned
- **User Login**
  - Input: Correct/incorrect credentials
  - Expected: JWT token or error
- **Room Creation**
  - Input: Room details by admin
  - Expected: Room added to DB
- **Booking a Room**
  - Input: User, room, dates
  - Expected: Booking created, room status updated
- **Contact Form**
  - Input: Name, email, message
  - Expected: Contact saved, email sent


List of Figures
Figure 4.1 – System Architecture Diagram


Figure 4.2 – Entity Relationship Diagram (ERD)


Figure 4.3 – Data Flow Diagram (Level 0)


Figure 4.4 – Data Flow Diagram (Level 1)


Figure 4.5 – Class Diagram


Figure 4.6 – Sequence Diagram for Room Booking


Figure 4.7 – Activity Diagram for User Login


Figure 4.8 – State Transition Diagram for Booking Status

Chapter No 1: Introduction to the Problem
1.1 Introduction
The hospitality industry is rapidly evolving, with digital transformation at its core. Modern hotels require efficient, user-friendly, and secure systems to manage bookings, customer data, and administrative operations. The Hotel Booking & Management System is a full-stack web application designed to streamline hotel operations, enhance customer experience, and provide robust administrative control. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this system offers a comprehensive solution for both hotel guests and administrators, enabling seamless room reservations, user management, and real-time communication.

1.2 Background
Traditionally, hotel management relied on manual processes or legacy software, often resulting in inefficiencies, double bookings, and poor customer service. With the rise of online travel and digital expectations, hotels must adopt modern solutions to remain competitive. The need for a centralized, web-based platform that integrates booking, user registration, room management, and secure authentication has become essential. This project addresses these needs by leveraging modern web technologies and best practices in software engineering.

1.3 Purpose
The primary purpose of this project is to develop a robust, scalable, and user-friendly hotel booking and management platform. The system aims to:

Simplify the process of room reservations for guests.
Provide hotel staff and administrators with tools to manage rooms, bookings, and customer data efficiently.
Ensure secure authentication and authorization for different user roles (admin, client).
Offer a responsive and intuitive user interface for both clients and administrators.
Serve as a learning and demonstration platform for full-stack web development using the MERN stack.
1.4 Scope
This project covers the design, development, and deployment of a web-based hotel management system with the following features:

User registration, login, and profile management.
Room listing, search, and booking functionality.
Admin dashboard for managing rooms, bookings, users, and contacts.
Contact form for customer inquiries.
Secure authentication and role-based access control.
Responsive frontend with modern UI/UX.
Backend API for all core operations, integrated with a MongoDB database.
Basic testing and error handling for reliability.
The system is intended for small to medium-sized hotels but can be extended for larger operations.

1.5 Objective
The main objectives of the Hotel Booking & Management System are:

To automate and streamline hotel booking and management processes.
To minimize manual errors and double bookings.
To provide a secure, role-based access system for different types of users.
To enhance customer satisfaction through a smooth and transparent booking experience.
To enable hotel staff to efficiently manage rooms, bookings, and customer communications.
To demonstrate the application of the MERN stack in a real-world project.
1.6 Intended Audience and Reading Suggestions
This documentation is intended for:

Developers and Students: Interested in learning about full-stack web development, especially with the MERN stack.
Hotel Owners and Managers: Looking for a modern, customizable hotel management solution.
Project Evaluators and Instructors: Assessing the design, implementation, and testing of a software engineering project.
Future Contributors: Developers who may extend or maintain the system.
Reading Suggestions:

Start with the Introduction and SRS chapters to understand the problem and requirements.
Review the Analysis and Design chapters for system architecture and data modeling.
Refer to the Implementation and Testing chapters for technical details and quality assurance.
Use the appendices for database schema, test cases, and additional resources.
1.7 Document Conventions
Bold text is used for emphasis and key terms.
Italics are used for definitions and important notes.
Code, file names, and commands are shown in monospace.
Diagrams and tables are referenced as “Figure” and “Table” respectively.
All technical terms are explained upon first use.
The document follows a modular structure, with each chapter focusing on a specific aspect of the project.




Chapter No 2: Software Requirement Specification
2.1 Overall Description
The Hotel Booking & Management System is a full-stack web application designed to automate and streamline the process of hotel room reservations, customer management, and administrative operations. The system is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and provides both client-facing and admin-facing interfaces. It supports secure authentication, role-based access, and a modern, responsive user experience. The system is intended for small to medium-sized hotels but is scalable for larger operations.

2.1.1 Product Perspectives
System Context:
The system is a standalone web application, accessible via modern web browsers. It interacts with users (guests, admins) and stores data in a MongoDB database. The backend exposes RESTful APIs for all core operations, and the frontend consumes these APIs for dynamic, real-time interaction.
Relation to Existing Systems:
The system is designed to replace manual or legacy hotel management processes. It can be integrated with third-party services (e.g., email, payment gateways) in the future.
User Environment:
Users access the system via desktop or mobile browsers. Admins manage hotel operations through a secure dashboard, while guests interact with booking and contact features.
2.1.2 Product Features
User Management:

Registration, login, and profile management for guests and admins.
Secure password storage and JWT-based authentication.
Role-based access control (admin, client).
Room Management:

Add, update, delete, and view room details (number, type, price, status, description).
Room availability tracking and status updates.
Booking Management:

Search for available rooms by date and type.
Book rooms, view booking history, and manage reservations.
Admins can view, update, or cancel bookings.
Contact Management:

Contact form for guest inquiries.
Admins can view and respond to contact messages.
Dashboard & Analytics:

Admin dashboard with summaries of bookings, rooms, users, and contacts.
Visual indicators for room occupancy and booking trends.
Security:

JWT authentication, password hashing, and secure API endpoints.
Input validation and error handling.
Responsive UI/UX:

Modern, mobile-friendly design using React and Tailwind CSS.
Intuitive navigation and feedback for all user actions.
2.1.3 Design and Implementation Constraints
Technology Stack:

Must use MongoDB, Express.js, React.js, and Node.js (MERN).
Tailwind CSS for frontend styling.
JWT for authentication.
Hosting & Deployment:

Designed for deployment on cloud platforms (e.g., Vercel, Heroku, Netlify, or custom VPS).
Must support HTTPS for secure communication.
Browser Compatibility:

Must work on all major browsers (Chrome, Firefox, Edge, Safari).
Scalability:

Designed for small to medium hotels, but codebase should allow for future scaling.
Data Privacy:

User data must be securely stored and not exposed to unauthorized users.
Open Source Libraries:

Only reputable, well-maintained open source libraries should be used.
2.1.4 Assumptions and Dependencies
Assumptions:

Users have access to a stable internet connection and a modern web browser.
Admins have basic technical knowledge to operate the dashboard.
The hotel has a policy for room management and booking rules.
Dependencies:

Node.js and npm for backend and frontend development.
MongoDB instance (local or cloud, e.g., MongoDB Atlas).
Email service for contact form notifications (e.g., SMTP, Gmail).
Environment variables for sensitive configuration (database URI, JWT secret, etc.).
Third-party libraries for UI (Tailwind CSS), authentication (jsonwebtoken, bcrypt), and HTTP requests (axios or fetch).