const mongoose = require('mongoose');

exports.dbData = async () =>{
    try{
       const con = await mongoose.connect(process.env.uri);
    console.log('mongodb connected'+con.connection.host)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}