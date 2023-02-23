<h1 align="center">Project Car Shop</h1>

<div align="center">
  <p align="center">
    In this project, the principles of Object Oriented Programming (OOP) were applied to build an API with a CRUD to manage a car dealership using the MongoDB database.
</div>

# About The Project

This project was developed during the Backend Module of Trybe's Web Development Course.

<br/>

During this section of the course, I learned how to structure a TypeScript API in the MSC architecture, applying the OOP pillars and using the Mongoose ODM to connect with a MongoDB database.
APIs made in MSC architecture and following OOP principles, facilitate both application scalability and maintenance. In the development phase of an application, we should be concerned with being able to create and develop an API so that it can grow or undergo changes, such as replacing the database used, for example, without the need for a structural change in the application.

<br/>

Skills Developed:

* Exercise knowledge of the pillars of Object Oriented Programming: Inheritance, Abstraction, Encapsulation and Polymorphism;
* Exercise the use of Composition;
* Implement, in TypeScript: Classes, Instances, Attributes, Methods and Objects;
* Exercise the creation and use of Interfaces;
* Apply knowledge of MongoDB, Typescript and OOP to create an API with CRUD.

<br/>


# Built With

* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
* ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Tests

* ![Mocha.js](https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown)
* ![Chai.js](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red)
* ![Sinon.js](https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon)

## Documentation
* ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

<br/>

# Getting Started

## Prerequisites

To run this project, you'll need to first install [Node.js](https://nodejs.org/en/) and [Docker](https://www.docker.com).

## Installation

1. Clone the repository.
  ```bash
    git clone git@github.com:BryanEF00/trybe-car-shop.git
  ```
  * Open the repository folder you just cloned:
    ```bash
      cd trybe-car-shop
    ```

2. Install dependencies and initialize the project.
  * Install dependencies:
    ```bash
      npm install
    ```

  * Run the node and mongodb services:
    ```bash
      docker-compose up -d
    ```

    * These services will initialize a container called `car_shop` and another called `car_shop_db`.

  * Run the `car_shop` container:
    ```bash
      docker exec -it car_shop bash
    ```
    * Install dependencies [if needed] with `npm install`.

  * At the interactive terminal start the server:
    ```bash
      npm run dev
    ```

3. Running tests.
  * **ALL** commands available in `package.json` (npm start, npm test, npm run dev, ...) must be executed **INSIDE** the container, that is, in the terminal that appears after executing the command:
  
  * The routes for the "/motorcycles" endpoint were optional requirements, therefore, only the routes for the "/cars" endpoint are considered for test coverage.
    ```bash
      docker exec -it car_shop bash
    ```
  
  * To run all unit tests:
    
    ```bash
      npm run test:dev
    ```

  * To run unit tests coverage:
    ```bash
      npm run test:coverage
    ```

# API Documentation
  You can find the API Documentation with `Swagger UI` at: [http://localhost:3001/docs](http://localhost:3001/docs).
