# CS465
**Author: Shauntel Hall**
**Technologies Used**
MongoDB
Express.js
Angular
Node.js
Mongoose
JSON Web Tokens
Bootstrap

This project is a full stack travel booking web application developed using the MEAN stack. It includes both a customer-facing website and a secure administrator single-page application for managing travel data. The application allows users to browse travel packages, while administrators can securely log in to create, update, and manage trips using a dynamic interface connected to a MongoDB database.

**Architecture**
The customer-facing side is built using Express with HTML, CSS, and Handlebars templates. This approach uses server-side rendering, where routes and controllers handle requests and generate HTML views dynamically. The administrator side is built as an Angular single-page application. Unlike the Express site, Angular runs entirely on the client side and updates the interface dynamically using components and services without reloading the page. This creates a more interactive and responsive experience.
The backend uses Node.js and Express to manage routing, business logic, and API endpoints, while MongoDB is used as a NoSQL database to store trip data. MongoDB was chosen because it is flexible and works well with JSON-like data structures. This made it easier to store and manage travel data without needing a rigid schema, and it integrates naturally with JavaScript-based applications.

**Functionality**
JSON plays a key role in connecting the frontend and backend. While JavaScript is used to build application logic, JSON is used as a data format to transfer information between the server and the client. The backend sends trip data as JSON, and the Angular frontend consumes that data to render the UI dynamically. Throughout development, several parts of the application were refactored to improve functionality and efficiency. 
For example, Static HTML pages were converted into Handlebars templates to dynamically render data.
Backend logic was moved into controllers to follow MVC structure. The Angular application was broken into reusable components like trip cards and forms. Reusable UI components improved the project by: reducing duplicate code, making updates easier,improving maintainability and scalability.

**Testing**
Testing involved verifying both the API and the frontend application. API endpoints were tested using Postman to ensure proper request and response behavior. This included: GET requests to retrieve trip data, POST requests to add new trips, PUT requests to update existing trips, and
DELETE requests to remove trips.
Security added an additional layer of complexity. Protected routes required a valid JWT token, which meant requests without a token returned unauthorized errors and requests with a valid token were successful. On the frontend, testing involved confirming that data was correctly retrieved and displayed,  new trips appeared after being added, updates were reflected immediately, admin features were only available after logging in. This demonstrated how methods, endpoints, and authentication all work together in a full stack application.

**Reflection**
This course has helped me significantly in progressing toward my goal of becoming a software developer. Before this project, I had limited experience with full stack development. Through this course, I gained hands-on experience working with both frontend and backend technologies and learned how they connect through APIs. Some of the key skills I developed were building RESTful APIs using Express, working with MongoDB and Mongoose, creating a single-page application using Angular, implementing authentication using JWT, debugging and troubleshooting across the full stack.
This project also improved my ability to structure applications, refactor code, and think through problems systematically. Overall, it has made me a more confident and well-rounded candidate for entry-level development roles.

**How to Run the Project**
Backend:
cd travlr
npm install
npm start

Frontend:
cd app_admin
ng serve

Then open-> http://localhost:4200
