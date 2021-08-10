import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from '../database/database';

(
    async ()=>{
        connect();
        const users = [
            {nome: 'Wallace Lima',
             nickName:'LDSWallace',
             dataNascimento: new Date('1999-07-08T03:00:00.000+00:00'),
             email: 'wallace@gmail.com',
             senha: 'senhasegura',
            }
        ];

        try{
            for(const user of users){
                await UserModel.create(user);
                console.log(`Usuario {user.nickname} foi criado`)
            }
            disconnect();
        } catch(e){
            console.error(e);
        }
    }
) ();