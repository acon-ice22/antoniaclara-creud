const express=require("express");
const req = require("express/lib/request");

const app= express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("oioio ");
});

app.get("/contatos/:id", (req, res)=> {
    const id = req.params.id;
 return res.json({
    id: id,
    nome:"clara;",
    email:"clara@jesusmariajose.com"
});
});
app.post("/contatos/:id", (req,res)=> {
    let nome= req.body.nome;
    let email= req.body.email;
return res.json({
    nome,
    email
})
});

app.put("/contatos/:id", (req,res)=> {
    const {id}=req.params;
    const {nome, email}=req.body;
   
return res.json({
    id,
    nome,
    email
})
});
app.delete("/contatos/:id", (req,res)=> {
    const {id}=req.params;
    const {nome, email}=req.body;
   
return res.json({
    id,
    nome,
    email
})
});
app.listen(3000, ()=> {
    console.log("servidor iniciado")
});