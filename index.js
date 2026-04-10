import express from "express"

const app = express ();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    res.send("certo")
})

app.get("/nome/:nome", (req,res)=>{
const {nome} = req.params
    res.send(`Seja Bem Vindo ${nome}`)

})

app.listen(3004,()=>{
    console.log("Atividade 4 ")
})
// Boa tarde