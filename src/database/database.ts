const mongoose = require('mongoose');
import * as Mongoose from 'mongoose';


let database = mongoose.Connection;

export const connect = () =>{
    const uri = 'mongodb+srv://admin:geqWZYcGYc7@cluster0.gmghy.mongodb.net/Nicecall?retryWrites=true&w=majority';
    const mongooseOptions: Mongoose.ConnectionOptions = {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
    mongoose.connect(uri,mongooseOptions);

    database = mongoose.Connection;
    
};

export const disconnect = () => {
    if (!database) {
      return;
    }
    mongoose.disconnect();
};