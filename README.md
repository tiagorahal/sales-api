# Sales API

> Server to connect the front sales app to the database.

## Built With

- NestJs
- Typescript
- PostgreSQL

## Getting Started
To get a local copy up and running follow these simple example steps.
- `git clone https://github.com/tiagorahal/sales-api.git`
- `cd sales-api/`
- `npm run build`
- `npm run start`
- after that to test the connection open any terminal and paste this `curl -X POST http://localhost:3001/sales -H "Content-Type: application/json" -d '{"type": "3", "date": "2021-01-15T19:19:30-03:00", "product": "CURSO DE TESTE", "value": "50", "salesperson": "Gandalf"}`

## Author

👨‍💻 **Tiago Rahal Aires**

- GitHub: [@tiagorahal](https://github.com/tiagorahal)
- Twitter: [@RahalAires](https://twitter.com/RahalAires)
- LinkedIn: [Tiago Rahal Aires](https://linkedin.com/tiagorahal)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/tiagorahal/sales-api/issues).


## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
