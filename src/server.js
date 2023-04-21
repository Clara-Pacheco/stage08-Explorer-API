const express = require("express")

const app =  express()
app.use(express.json())


app.post("/users", (request,response) =>{

  const { name, email, password } =request.body
  
  response.send(`
  User's name: ${name},
  User's email: ${email},
  User's password: ${password}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))