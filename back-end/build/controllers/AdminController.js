"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin = require('../models/AdminModel');
const db = require('../db/db');
exports.getAdmin = (req, res, next) => {
    let sqlQuery = "SELECT * FROM cadastroAluno;";
    db.query(sqlQuery, (err, result) => {
        if (err)
            console.error(err);
        else {
            // res.send(result)
            return res.send('foi');
        }
    });
};
// exports.postUsuario = (req: Request, res: Response, next: any) =>{
//   const {nome} = req.body
//   const {sobrenome} = req.body
//   const {cidade} = req.body
//   const {estadoUR} = req.body
//   const {telefone} = req.body
//   const {celular} = req.body
//   const {curso} = req.body
//   const {email} = req.body
//   const {senha} = req.body
//   const {aluno} = req.body
//   const {
//     casado, conjugue, filhos, disciplina, salario, professor, 
//   } = req.body
//   let sqlQuery = ""
//   let listDados
//   if(aluno === 'aluno'){
//     sqlQuery = `
//       INSERT INTO 
//       cadastroAluno (nome, sobrenome, cidade, estadoUR, telefone, celular, cursos, email, senha, pontuacao, nivel, aula) 
//       VALUES ( ? , ? , ? , ? , ? , ? , ? , ?, ?, 0, 1, '1');
//     `
//     listDados =  [
//       nome, sobrenome,
//       cidade, estadoUR,
//       telefone, celular,
//       curso,
//       email, senha
//     ]
//   }
//   if(professor === 'professor'){
//     sqlQuery = `
//       INSERT INTO 
//       cadastro_professor 
//       (nome, sobrenome, cidade, estadoUR, telefone, celular, email, senha,
//        casado, conjugue, filhos, disciplina, salario) 
//       VALUES ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? );
//     `
//     listDados = [
//       nome, sobrenome,
//       cidade, estadoUR,
//       telefone, celular,
//       email, senha,
//       casado, conjugue, filhos,
//       disciplina, salario
//     ]
//   }
//   db.query(
//     sqlQuery,
//     listDados,
//     (err:any, result:any)=>{
//       const cadastroUsuario = new CadastroUsuarioModel()
//       let cadastro = cadastroUsuario.cadastrar(err, result, res)
//       return cadastro
//     }
//   )
// }
// exports.getUsuarios = (req, res, next) => {
//  Cadastro.fetchAll(cadastros => {
//    res.render('/cadastro', {
//      cad: cadastros,
//    });
//  });
// };
