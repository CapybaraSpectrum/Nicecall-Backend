import express from 'express';
import { connect, disconnect } from './database/database' ;
import { UserModel } from './database/users/users.model';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})
connect();

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

app.patch('/users/nome', async (req, res) =>{
    const {nome, id} = req.body;
    UserModel.updateNome(id,nome);
    return res.send('ok');
});

app.get('/users', async (req, res) =>{
    const users = await UserModel.getUsers();
    res.send(users);
}); 

app.delete('/users', (req, res) =>{
    const id = req.body.id;
    UserModel.deleteUser(id);
    res.send('ok');
});

app.put('/users', (req, res)=>{
    const {id, nome, nickName, avatar, senha, dataNascimento, email} = req.body;
    const user = {
        nome: nome,
        nickName: nickName,
        avatar: avatar,
        senha: senha,
        dataNascimento: dataNascimento,
        email: email
    };
    UserModel.updateUser(id,user);
    res.send('ok');
})