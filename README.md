# MyTournaments
This is a simple api to manage tournaments. It is written in Node.js and uses (**MAYBE** _NestJS_) as a framework along with Typescript.

## Why?
I created this project to help my local yu-gi-oh community to manage their tournaments and can be used by any other community that needs to manage their tournaments.

## Has a frontend?
Not _yet_, but I'm planning to create a frontend using Vue.js or React.js.
### Why?
To be honest i'm much more familiar with React.js, but i'm planning to use Vue.js because i want to learn more about it and i think it is a good opportunity to learn it.

## The architecture
The project is using a clean architecture, so it is easy to change the database or the framework used. Thats why i'm also using Domain Driven Design to separate the business logic from the framework.
(_If you're reading this on the beginning of the project, probably i'm still doing the DDD part at the folder `core`_)
### The Workflow
This is how i'm working on the project, is not the functional requirements, but the steps that i'm following to create the project.

1. Do the business logic in the **domain layer**
2. Create the **use cases** in the application layer and the tests
3. Choose the **framework** that i'll use to deal with the **HTTP requests**
4. Choose the **database** and create the repository that i'll use to deal with the database (_By the way, the repository is in the infrastructure layer and working with local memory for now, i'm using the repository pattern to make it easy to change the database in the future_)
5. Create the infrastructure local with **Docker and Docker Compose** to up the database and any other service that i'll need
6. Create the **controller** that will call the use cases and return the response to the client and the tests
7. Create the **routes** that will call the controller
9. (_Optional_) Use GraphQL to create separate queries and mutations and make it easy to create a frontend
10. (_Optional_) Create the frontend


## Tests
The project is using Vitest to run the tests. To run the tests, just run the command `npm run test`.
Also all features that are created i did a TDD approach.