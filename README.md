#StudyNotion - EdTech Platform
:rocket: [Link to website][https://educational-platform-3fa3.vercel.app/]


![Main Page](images/mainpage.png)
StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.
## Table of Contents

- [Introduction](#introduction)
- [System Architecture](#system-architecture)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [Database](#database)
  - [Architecture Diagram](#architecture-diagram)
- [API Design](#api-design)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)


## Introduction
The **Educational Platform** is a responsive web-based application built to provide a modern, interactive learning experience. It features a clean UI and user-friendly navigation, catering to students and educators accessing educational content, courses, or resources.




## System Architecture

The StudyNotion EdTech Platform is structured into three core components: the Front-end, Back-end, and Database. It adopts a classic client-server architecture, where the front-end operates as the client interface, while the back-end and database together function as the server side, managing logic, data processing, and storage.
### Front-end

The front-end of the platform is developed using ReactJS, enabling the creation of dynamic, responsive, and interactive user interfaces essential for an engaging student experience. It interacts with the back-end through RESTful API calls, ensuring smooth data exchange and functionality across the application.
#### Front End Pages

For Students:

- **Homepage:** Offers a welcoming overview of the platform with easy navigation to key sections like courses and user profile.
- **Course Catalog**: Displays all available courses with comprehensive details, including descriptions, ratings, and instructors.
- **Wishlist**: Allows students to bookmark and save courses they intend to enroll in later.
- **Cart & Checkout**: Facilitates a seamless purchasing process for selected courses.
- **Course Viewer**: Delivers structured course content including video lectures, reading material, and additional resources.
- **User Profile**: Shows personalized user data such as name, email, and enrolled courses.
- **Profile Editor**: Enables users to update their personal details and account settings.

For Instructors:

- **Instructor Dashboard**: Provides a centralized view of all published courses, student engagement, ratings, and learner feedback.
-**Analytics & Insights**: Displays detailed metrics such as course views, click-through rates, and enrollment statistics to help instructors evaluate performance.
- **Course Management**: Enables instructors to create, update, or delete courses, and manage modules, pricing, and associated media content with ease.
- **Profile Management**: Allows instructors to view and edit their personal information, professional bio, and credentials.

#### Front-end Tools and Libraries

To build the front-end, we use frameworks and libraries such as ReactJS, CSS, and Tailwind for styling, and Redux for state management.

### Back-end

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management:** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

#### Back-end Frameworks, Libraries, and Tools

The back-end of StudyNotion uses various frameworks, libraries, and tools to ensure its functionality and performance, including:

- **Node.js:** Used as the primary framework for the back-end.
- **Express.js:** Used as a web application framework, providing a range of features and tools for building web applications.
- **MongoDB:** Used as the primary database, providing a flexible and scalable data storage solution.
- **JWT (JSON Web Tokens):** Used for authentication and authorization, providing a secure and reliable way to manage user credentials.
- **Bcrypt:** Used for password hashing, adding an extra layer of security to user data.
- **Mongoose:** Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema:** Includes fields such as course name, description, instructor details, and media content.

### Database

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

![Database Schema](images/schema.png)

### Architecture Diagram

Below is a high-level diagram that illustrates the architecture of the StudyNotion EdTech platform:

![Architecture](images/architecture.png)

## API Design

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

For detailed API documentation and endpoints, refer to the [API Documentation](/api-docs).

## Installation

1. Clone the repository: `git clone https://github.com/username/repo.git`
2. Navigate to the project directory: `cd StudyNotion`
3. Install dependencies: `npm install`

## Configuration

1. Set up a MongoDB database and obtain the connection URL.
2. Create a `.env` file in the root directory with the following environment variables:
   ```
   MONGODB_URI=<your-mongodb-connection-url>
   JWT_SECRET=<your-jwt-secret-key>
   ```

## Usage

1. Start the server: `npm run dev`
2. Open a new terminal and navigate to the `client` directory: `cd client`
3. Start the React development server: `npm run dev`

