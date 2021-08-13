import express from 'express';
import { communityModel } from './database/communities/community.model';
import { iCommunity } from './database/communities/community.types';
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

app.post('/community', async (req, res)=>{

    const doc = new communityModel({
        nome: req.body.nome,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        avatar: req.body.avatar
      });

   const result = await communityModel.createCommunity(doc);
   return res.send(result);
});

app.get('/community:id', async (req, res)=>{
    const id = req.params.id;
    const result = await communityModel.getCommunity(id);
    return res.send(result);
});

app.get('/communities', async (req, res)=>{
    const doc = await communityModel.find({});
    return res.send(doc);
});

app.delete('/community:id', async(req, res)=>{
    const id = req.params.id;
    const result = await communityModel.deleteCommunity(id);
    return res.send(result);
});

app.put('/community', async (req, res)=>{
    const id = req.body.id;
    const doc: iCommunity = {
        nome: req.body.nome,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        avatar: req.body.avatar
    }
    const result =  await communityModel.updateOne({_id: id}, doc);
    res.send(result);
});