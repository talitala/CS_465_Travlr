# CS_465_Travlr_Getaways_Booking_Site

## Architecture

In this full stack project, I worked with both traditional frontend development using Express with HTML and JavaScript, as well as a single-page application (SPA). The Express-based frontend renders pages on the server and sends fully built HTML to the client, which is simpler but less dynamic. In contrast, the SPA loads a single HTML page and dynamically updates content using JavaScript, creating a smoother and faster user experience without constant page reloads. The SPA approach is more modern and efficient for interactive applications, while Express HTML is useful for simpler, server-rendered pages.

The backend used a NoSQL MongoDB database because it is flexible and works well with JSON-like data structures. Since the application data is not strictly relational and may evolve over time, MongoDB allows for easier scaling and modification without requiring a rigid schema. This makes it ideal for full stack JavaScript applications using the MEAN stack.

---

## Functionality

JSON differs from JavaScript in that it is a lightweight data format used strictly for storing and transmitting data, while JavaScript is a full programming language used to create logic and interactivity. JSON ties together the frontend and backend because it is the standard format used to send data between them through API requests and responses. For example, the frontend sends requests in JSON format, and the backend processes and returns data in JSON, allowing both sides to communicate efficiently.

During the development process, I refactored code multiple times to improve functionality and efficiency, such as reorganizing API calls into reusable services and breaking UI elements into smaller components. This made the code more readable, easier to maintain, and reduced duplication. Reusable UI components are especially beneficial because they allow consistent design, faster development, and easier updates across the application.

---

## Testing

In a full stack application, methods such as GET, POST, PUT, and DELETE are used to interact with API endpoints, which are specific routes that handle requests and return responses. Testing these endpoints ensures that data is correctly retrieved, created, updated, or deleted. As security layers like authentication are added, testing becomes more complex because requests may require tokens or permissions to access certain endpoints. This means developers must test not only functionality but also access control, ensuring that only authorized users can perform specific actions. Understanding how methods, endpoints, and security interact is essential for building a reliable and secure application.

---

## Reflection

This course has helped me move closer to my professional goals by giving me hands-on experience with full stack development and strengthening my ability to build complete, functional applications. I developed skills in frontend and backend integration, API design, database management, and debugging. I also improved my ability to structure code, refactor for efficiency, and think through application architecture. These skills make me a more marketable candidate because I can now confidently work across the full stack, understand how different parts of an application connect, and contribute to real-world software development projects.
