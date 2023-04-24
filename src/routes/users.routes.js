const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersController = new UsersController()

const usersRoutes = Router()


function myMiddleware(request,response,next){

  console.log("Passou pelo middleware!")

  if(!request.body.isAdmin){
    return response.json({"message": "usuário não autorizado"})
  }

  next()

}


usersRoutes.post("/", myMiddleware, usersController.create )

module.exports = usersRoutes