import express from "express"
import getClient from "./client/elasticSearch";
import DBController from "./DBController";
import PhotoController from "./PhotoController";

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

app.get('/db/create',DBController.create)

app.get('/photos/create', PhotoController.create);
app.get('/photos/findAll', PhotoController.findAll);
app.get('/photos/findById/:id', PhotoController.findById);
app.get('/photos/createPhoto', PhotoController.createPhoto);

app.get('/photos/findByQuery', PhotoController.findByQuery);

app.listen(3333,()=> console.log("Running.."))