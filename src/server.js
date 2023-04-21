const express = require("express")

const app =  express()


app.post("/users", (request,response) =>{
  const { page, limit } = request.query
  response.send(`Página: ${page} e Limite: ${limit}`)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))