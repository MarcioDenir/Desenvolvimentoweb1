const mysql = require ("mysql2");

//conexão com o MySQL
const conexão = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommerce"
});

//id do produto que sera exluido
const id = 3;

const deletar = "DELETE FROM produtos WHERE id = ?";

conexão.query(deletar,[id], function(erro,resultado){
    if(erro){
        console.log("Erro ao excluir o produto.");
        console.log(erro);
    }else if(resultado.affectedRows === 0){
        console.log("produto não encontrado.");
        }else{
            console.log("produto excluido com sucesso!");
          }
    conexão.end();
});