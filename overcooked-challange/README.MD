## The overcooked challenge

You are the chosen software engineer to develop an order processing system for a famous cooking tools platform in Node.js. 
The system needs to handle the processing of incoming orders in a specific way based on certain criteria that are exposed below. The key challenge is to manage the order processing flow efficiently.

### Problem statement:

You have a stream of incoming orders that need to be processed by your system. Each order is represented as an object with the following properties:

```typescript
class Order {
  orderId: string | number; // A unique identifier for the order. Could it be a string or number, your choose.
  orderDetails: string; // For simplicity, we are going to represent the order's details as a string, where our customer will describe their needs. The max length is 200.
  customerId: string | number; // The customer's unique identifier. Could it be a string or number, your choose.
  createdAt: Date // The timestamp when the order was placed.
}
```

The orders should be processed based on their priority, which is determined by the customer type. There are three customer types: 
* Regular
* VIP
* Overcooked

### The processing priority is as follows:

----> Overcooked customers should be served first, followed by VIP customers, and then Regular customers.

----> Within each customer type, orders should be processed in the order they were received


### Hints:

----> The processing time for each order is represented as an integer in milliseconds.

---->	The system should process orders in such a way that it maximizes efficiency and ensures that Overcooked customers are given the highest priority.

----> Your server should return appropriate HTTP response codes depending on each situation.

----> Tests are a plus! Unit tests, integration tests, whichever you want to use to ensure your application is secure and your code does what it pretends to do, we love it!

### Your Task:
Implement the order processing system in Node.js based on the constraints published above. 
There isn't a standard way to do it, feel free to code it yourself or use external libraries. 
