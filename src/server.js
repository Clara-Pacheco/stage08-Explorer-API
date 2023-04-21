const express = require("express")

const app =  express()


app.post("/users", (request,response) =>{

  const { name, email, password } =request.body
  
  response.send(`Você chamou o POST`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))