let express = require("express");

let app = express();

app.get("/", (req,res)=> {
    res.send('Primeiro rota com Express');
});

app.get("/salgados", (req,res)=> {
    console.log("olá pessoal");
    res.send('Salgadao gostoso');
});

app.listen(8000,()=> {
    console.log('A API está funcionando na porta 8000');
});
