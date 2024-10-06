import express from 'express'
import mongoose from 'mongoose';
import { DB_NAME } from './constants';

const App = express()

;( async ()=>{
    try {
     await mongoose.connect(`process.env.${MONGODB_URI}/${DB_NAME}`) ;
     App.on("Error",(error)=>{
        console.log("Error : ",error)
        throw error
     })
     App.listen(process.env.PORT,()=>{
        console.log(`App is listen on ${process.env.PORT}`)
     })  
    } catch (error) {
        console.log("Error : ",error)
        throw error
    }

})().then(()=>{
    try {
        App.listen(process.env.PORT||8000,()=>{
            console.log(`Server is running on port: ${process.env.PORT}`);
             })
        App.on("Error",(error)=>{
            console.log("Error :",error);
            throw error     
        })
    } catch (error) {
        console.log("Error :",error);
        
    }
})