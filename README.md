<div align="center">
<img src="https://cdn-icons-png.flaticon.com/512/2599/2599636.png" height="50px" width="auto" />
<h3>
 API-NOTES
</h3>
</div>

<div align="center">
    <a href="#" target="_blank">
        Preview
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-getting-started">
        Getting Started
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-commands">
        Commands
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-license">
        License
    </a>
</div>
<div align="center">

![GitHub License](https://img.shields.io/github/license/israelhp/api-notes)
![GitHub Repo stars](https://img.shields.io/github/stars/israelhp/api-notes)
![GitHub forks](https://img.shields.io/github/forks/israelhp/api-notes)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/israelhp/api-notes)

</div>

## 🛠️ Stack

- [**Node.js**](https://nodejs.org/en)
- [**Express**](https://expressjs.com/)
- [**MongoDB**](https://www.mongodb.com/)

### Key Features

- Create new notes
- Retrieve all notes
- Retrieve a specific note by ID
- Update an existing note
- Delete a note

## 🚀 Getting Started

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Configure the connection to your MongoDB database in the `.env` file.
4. Run `npm start` to start the server.

### Usage

- Access the API through `http://localhost:3000/api-notes`.
- Use tools like Postman or cURL to interact with the API endpoints.

## 🛠️ Project Structure

```
/src
|-- /app
|   |-- /controllers
|   |   |-- noteController.js
|   |
|   |-- /services
|       |-- noteService.js
|
|-- /config
|   |-- db.js
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
|   |
|   |-- /middlewares
|   |   |-- expressRouter.js
|
|-- /utils
|   |-- helpers.js
|
|-- index.js
|-- server.js
```

### Diagram

![Diagrama](/docs/diagram.png)

## 🔑 License

This project is under the MIT License - see the [LICENSE](LICENSE) file for more details.

## 🧞 Commands

|     | Command          | Action                                       |
| :-- | :--------------- | :------------------------------------------- |
| ⚙️  | `dev` or `start` | Starts local dev server at `localhost:3000`. |

## Contact

You can reach me at [israelhurtarte@gmail.com].
