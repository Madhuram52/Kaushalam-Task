# MADTASKER

## Links
- [Client Repository](https://madtasker.onrender.com/)
- [Server Repository](https://madtasker-server.onrender.com)
- [PostMan API Collection (CopyLINK)](https://api.postman.com/collections/28999523-31eb0f39-361d-44f0-a310-bdc71e4f6850?access_key=PMAT-01JANEGE8FDXK9Q4GJVB9T9XS1)

## About the App
**MADTASKER** is a full-stack To-Do List application built with React/Next.js for the front-end and Node.js for the back-end. Users can create, view, edit, delete, and mark tasks as completed. The app is designed to be intuitive and responsive, ensuring a smooth user experience on both desktop and mobile devices.


## Prerequisites
Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (Version 14 or higher)
- A MongoDB database (You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution)


## Installation Process

### Back-End Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/To-Do-List-Server.git
   ```
2. Navigate into the server directory:
   ```bash
   cd To-Do-List-Server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root of the server directory with the following variables:
   ```bash
   MONGO_URI="your_mongo_uri"
   JWT_SECRET="your_jwt_secret"
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Front-End Setup
1. Navigate into the client directory:
   ```bash
   cd To-Do-List-Client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the API URL in the `utils/axios.jsx` file to point to your back-end:
   ```javascript
   const API_URL = "http://localhost:5000"; // Change this if necessary
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

Now you can access the application at `http://localhost:5173` for the front end and `http://localhost:5000` for the back end.

## Challenges Faced
During the development of MADTASKER, I faced several challenges, including:
- Ensuring seamless communication between the front-end and back-end.
- Implementing authentication securely while maintaining user-friendly features.
- Designing a responsive UI that works well on various devices.

## Conclusion
MADTASKER is a comprehensive full-stack application that demonstrates my capabilities in front-end and back-end development. The app is fully functional and meets all the project requirements outlined in the pre-screening process.


This `README.md` is structured to provide clear navigation and information about your project, making it easier for reviewers and users to understand the functionality and setup of your application.