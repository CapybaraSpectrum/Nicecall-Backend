import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from '../database/database';
(
    async ()=>{
        connect();
        try{
            const doc = new UserModel({
              nome: 'Gualberto',
              email: 'ggualbert@gmail.com',
              nickName: 'ggualberto',
              avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagSzcbWjqohGV4ZtHfduN-h-0jBc1zfp9Zw6lC8F3os46Ddn9h8hC3IwqWsNbcQYAZWk&usqp=CAU',
              dataNascimento: new Date(),
              senha: 'sangue bom' 
            })
           const teste = await UserModel.createUser(doc);
           console.log(teste);
            disconnect();
        } catch(e){
            console.error(e);
        }
    }
) (); 