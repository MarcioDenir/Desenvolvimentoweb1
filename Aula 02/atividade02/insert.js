const mysql = require("mysql2");

const conexão = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"biblioteca"
});

//dados que seram cadastrados

const titulo = "A Arte da Guerra";
const autor = "Sun Tzu";

// inserir dados

const insert ="INSERT INTO LIVROS(titulo,autor) VALUES(?,?)";

conexão.query(insert,[titulo,autor],function(erro){
    if(erro){
        console.log("erro ao cadastrar!")
        console.log(erro)
        
    }else{
        console.log("livro cadastrado com sucesso!")
    }
    conexão.end()
});