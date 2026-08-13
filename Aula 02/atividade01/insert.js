const mysql = require ("mysql2");

//conexão com o MySQL
const conexão = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommerce"
});

// Dados que seram cadastrados
const nome= "Mouse";
const preco = 75.00;

//comando SQL

const insert = "INSERT INTO produtos(nome,preco) VALUES (?,?)";

//Envia os dados para o MySQL

conexão.query(insert,[nome,preco],function(erro){

    if(erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    }else{
        console.log("Produto cadastrado com sucesso!");
    }
    conexão.end();
});