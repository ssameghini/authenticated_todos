## The external provider integration.

You are tasked with implementing a secure webhook endpoint in Node.js. Webhooks allow external services to send real-time data to your server, but it's crucial to ensure that the incoming requests are both authentic and have not been tampered with. 

Your goal is to create a webhook endpoint that can verify the authenticity of incoming requests.

### Problem statement:

Create a Node.js server with an endpoint (for example: "/webhook"), that listens for POST requests, also, implement a mechanism to secure it by validating these incoming requests. 

The server should accept JSON payloads with the following structure:

```typescript
class Webhook {
  event: string; // The event name you are listening to.
  sentAt: Date // The timestamp when the webhook was sent.
  data: EventDataType1 | EventDataType2 | EventDataType3 // For simplicty, we are going to define only 3 different types of events that we could listen to.
}
```

Implement a secure way to generate and verify the signature for incoming requests. You can use a secret key to generate the signature and verify it on the server. Make sure that only valid requests with the correct signature are accepted.

Besides authorizing only trusted webhooks, keep in mind that the team that develops the product we are integrating with
is composed by humans, this means their product could fail at any time and suffer downtimes, and if so, it could mean they will send all of
the delayed webhooks together. We need to be aware and ready to handle thousands of requests and process them in order without affecting
our final customers and without losing any piece of information as it could lead to inconsistencies in our database.

### Hints:

----> You should consider implementing request validation using a signature or any other secure method of your choice.

---->	The server will receive more than one event type, so you should consider processing each type of event separately.

----> Our provider is flexible! So feel free to develop any solution that could allow us to integrate the webhooks in a secure way.

----> Your server should return appropriate HTTP response codes depending on each situation.

----> Tests are a plus! Unit tests, integration tests, whichever you want to use to ensure your application is secure and your code does what it pretends to do, we love it!

### Your Task:
Implement the webhook integration in Node.js based on the constraints published above. 
There isn't a standard way to do it, feel free to code it yourself or use external libraries. 
