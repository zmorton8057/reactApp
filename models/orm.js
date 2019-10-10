const connection = require('./connection.js')

const orm = {
// findAllMantras only takes in one input, a callback that allows you to do whatever you want with the data
// it selects the entire mantra table
    findAllMantras : (cb)=>{
        connection.query('select * from mantras',function(err,response){
            if(err) throw err;
            cb(response);
        })
    },
    // this function allows you to find mantra by primary OR secondary emotion, it takes in an emotion as a string as the 1st argument 
    // and a call back with an argument so that you can do whatever you want with the returned data
    findMantraByEmotion: (emotion,cb)=>{
        connection.query('select * from mantras where primaryEmotion = $1 or secondaryEmotion = $2',[emotion, emotion],function(err,response){
            if(err) throw err;
            cb(response)
        });
    },
}

module.exports=orm;