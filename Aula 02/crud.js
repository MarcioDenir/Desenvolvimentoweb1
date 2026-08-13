const mysql = require ("mysql2");

//conexão com o MySQL
const conexão = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
});

// Dados que seram cadastrados
const nome= "Zero";
const email= "zero@email.com";

//comando SQL

const insert = "INSERT INTO alunos(nome,email) VALUES (?,?)";

//Envia os dados para o MySQL

conexão.query(insert,[nome,email],function(erro){

    if(erro){
        console.log("Erro ao cadastrar.");
        console.log(erro);
    }else{
        console.log("Aluno cadastrado com sucesso!");
    }
    conexão.end();
});
/*
//id do aluno que sera exluido
const id = 1;

const deletar = "DELETE FROM alunos WHERE id = ?";

conexão.query(deletar,[id], function(erro,resultado){
    if(erro){
        console.log("Erro ao excluir o aluno.");
        console.log(erro);
    }else if(resultado.affectedRows === 0){
        console.log("Aluno não encontrado.");
        }else{
            console.log("Aluno excluido com sucesso!");
          }
    conexão.end();
});*/
