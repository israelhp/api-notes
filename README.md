# API Notes

## Description

API Notes is a task management application based on an API developed with Node.js and Express. It allows users to perform CRUD (Create, Read, Update, Delete) operations on notes.

## Technologies Used

- Node.js
- Express
- MongoDB (or the database of your choice)

## Key Features

- Create new notes
- Retrieve all notes
- Retrieve a specific note by ID
- Update an existing note
- Delete a note

## Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Configure the connection to your MongoDB database in the `.env` file.
4. Run `npm start` to start the server.

## Usage

- Access the API through `http://localhost:3000/api-notes`.
- Use tools like Postman or cURL to interact with the API endpoints.

## Project Structure

```
/src
|-- /app
|   |-- /controllers
|   |   |-- noteController.js
|   |
|   |-- /services
|       |-- noteService.js
|
|-- /core
|   |-- /entities
|   |   |-- noteEntity.js
|   |
|   |-- /repositories
|       |-- noteRepository.js
|
|-- /interfaces
|   |-- /api
|   |   |-- expressRouter.js
|
|-- /config
|   |-- config.js
|
|-- /utils
|   |-- helpers.js
|
|-- index.js
|-- server.js
```

## Diagram

![Diagrama](/docs/diagram.png)

## Licencia

This project is under the MIT License - see the [LICENSE](LICENSE) file for more details.

## Contacto

You can reach me at [israelhurtarte@gmail.com].
