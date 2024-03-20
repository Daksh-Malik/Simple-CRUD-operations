import express from 'express'
import { getAllData, getData, createData, deleteData, updateData } from './database.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get("/read",async (req,res) => {
    const data = await getAllData()
    res.send(data)
})

app.get("/read/:id",async (req,res) => {
    const id = req.params.id;
    const data = await getData(id);
    res.send(data);
})

app.post("/create", async (req,res) => {
    const {name,age,country,position,wage} = req.body;
    const data = await createData(name,age,country,position,wage);
    res.status(201).send(data);
})

app.delete("/delete/:id", async (req,res) => {
    const id = req.params.id;
    await deleteData(id);
    res.send("Successfully Deleted!");
})

app.put("/update/:id", async (req,res) => {
    const id = req.params.id;
    await updateData(req.body.name,req.body.age,req.body.country,req.body.position,req.body.wage,id);
    res.send();
})

//handling all the errors at once
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, ()=>{
    console.log("Server is running at port 8080")
})