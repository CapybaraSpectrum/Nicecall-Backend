const mongoose = require('mongoose');
import * as Mongoose from 'mongoose';

let database = mongoose.Connection;

export const connect = () =>{
    const uri = 'mongodb+srv://admin:geqWZYcGYc7@cluster0.gmghy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    const mongooseOptions: Mongoose.ConnectionOptions = {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
    mongoose.connect(uri,mongooseOptions);

    database = mongoose.Connection;

    //  database.once('open', async ()=>{
    //      console.log('Conectado ao banco');
    //  });

    //  database.on("error", () => {
    //      console.log("Erro ao conectar ao banco");
    //  });
};

export const disconnect = () => {
    if (!database) {
      return;
    }
    mongoose.disconnect();
};