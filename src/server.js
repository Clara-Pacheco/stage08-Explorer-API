require("express-async-errors")

const AppError = require("./utils/AppError")
const { request, response } = require("express")
const express = require("express")

const routes = require("./routes/index")

const app =  express()
app.use(express.json())
app.use(routes)

app.use((error, request, response, next) => {
  // Para um erro gerado do lado do cliente

  if( error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  // Para um erro gerado do lado do servidor

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })

})


const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))