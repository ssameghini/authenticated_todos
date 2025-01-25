# Authentication and resource management

You are an elite Software Engineer hired by Abstergo Industries to create a REST API in Node.js that handles authentication and authorization for a resource. The goal is to implement a secure API where users can create, retrieve, update, and delete their own resources, ensuring that they can only access their own data.

For this first iteration of our product, we are going to simplify a bit our requirements:

## Problem statement

----> Develop registration and authentication endpoints and logic: our users should be able to create an account with a unique username and password.

----> For every incoming request, check if it's coming from an authenticated user. Unauthenticated users should not be able to access protected routes.

----> Resource Management: implement create and read operations for a "to do list". Each item has a title. Also, each item belongs to a user. 

----> Implement a mechanism that ensures users can only access and modify their own resources. For example, a user should only be able to read or create their own items and not read those created by other users or create items on behalf of other users.

### Hints

----> Users passwords should be securely stored.

----> Implement input validation to ensure that requests are properly formatted and contain the information we expect.

----> Focus on building a secure and maintainable application with a clean code structure.

----> Your server should return appropriate HTTP response codes depending on each situation.

----> Tests are a plus! Unit tests, integration tests, whichever you want to use to ensure your application is secure and your code does what it pretends to do, we love it!

### Your Task

Implement the authentication and resource management system in Node.js based on the constraints published above. 
There isn't a standard way to do it, feel free to code it yourself or use external libraries. 
