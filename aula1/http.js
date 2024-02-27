const { createServer } = require('http');

let servidor = createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        "Content-Type": 'text/html'
    });
    resposta.write(`
        <h1>Hello World</h1>
        <p>Primeiro servidor NODE JS</p>
    
    `)
    resposta.end();
});

servidor.listen(8000); 


console.log(`Ouvindo a porta 8000`);
 
