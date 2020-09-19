const express = require("express")
const app = express();
const bodyParser = require("body-parser")
const UserController = require("./controllers/UserController")


const port = process.env.PORT || 3002

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/user", UserController)

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`)
})