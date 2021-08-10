import express from 'express';
import { connect } from './database/database' ;
import { UserModel } from './database/users/users.model';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = connect();

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})

app.post('/users', async (req, res)=>{
    const doc = new UserModel({
        nome: req.body.nome,
        email: req.body.email,
        nickName: req.body.nickName,
        avatar: req.body.avatar,
        dataNascimento: req.body.dataNascimento,
        senha: req.body.senha
      });
   const result = await UserModel.createUser(doc);
   return res.send(result);
});
