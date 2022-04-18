## Steps to Run
Currently, docker setup is not done. Neither the services are hosted. DB is connected to Atlas for now.

First install nodemon globally using `npm i -g nodemon`

Then, in 3 different terminals: 
```sh
cd contentService
npm run dev
```

```sh
cd dailyPassService
npm run dev
```

```sh
cd userService
npm run dev
```

Use postman for testing.




## Postman Documentation
A postman collection is present in the root directory containg a list of various APIS and how they can be called.


## Tech Used

`Node.js` as framework and `Mongo DB` as database.
Built microservices using `sync` form of communication.


## Improvements that can be done
1. Use `express-validators` to validate input.
2. Instead of passing UserID and seriesID, use cookies.
3. Creating a custom auth and validation Middleware.
4. Using `async` form of communication in microservices, implemented using event-bus like Nats.
5. Properly deploying with the help of kubernets and skaffold.

6. A well structured and designed database models and schema. Could only think of these for now.


P.S: The concept was brand new. Read different things about async and sync but was able to implement the sync method only with full understanding of clthings.
