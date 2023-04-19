const express = require("express")

const app =  express()

app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params
  response.send(`
  Message's ID: ${id},
  User's name: ${user}
  `)
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))