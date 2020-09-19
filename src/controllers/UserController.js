const { Router } = require("express");
const {findAll, save} = require("../services/userService.js")

const routes = Router();

routes.get("/", (req,res) => {
  return res.send(findAll())
})

routes.post("/", (req,res) => {
  const user = req.body
  const saveUser = save(user)

  if(saveUser){
    res.status(201).send(saveUser)
    return user;
  }

  res.status(400).send("Impossible to save besause user is invalid")
})

module.exports = routes;