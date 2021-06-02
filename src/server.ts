import express from "express"
import getClient from "./client/elasticSearch";

const app = express()

app.get('/',async (request,response)=>{
  const client = getClient();

  const result = await client.index({
    index:'elastic_test',
    type: 'type_elastic_test',
    body:{
      user: 'Alisson',
      password: '123456ABC',
      email: 'alissonjrananias@gmail.com'
    }
  })

  return response.json(result)
})

app.listen(3333,()=> console.log("Running.."))