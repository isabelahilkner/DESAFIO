const fs = require('fs').promises;
const http = require ('http');


const server = http.createServer(async (req, res) => {
try{


    if (req.url ==='/'){
        res.end('Home');


    } else if(req.url ==='/sobre'){
        res.end('Meu nome é Isabela, tenho 16 anos e estudo na etec bento quirino');
       
    } else if (req.url === '/api'){
            res.end(JSON.stringify({mensagem: 'Isabela Hilkner'}))


    } else if (req.url === '/usuarios'){
            const dados = await fs.readFile('usuarios.json', 'utf-8');
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(dados);


    }else {
        res.statusCode = 404;
        res.end('Rota não encontrada')
    }
}//fechamento do try
catch(erro){
res.writeHead(500);
res.end('Erro ao ler arquivo');
}
});


server.listen(3000), () => {
    console.log('Servidor rodando na porta 3000');
}
