const mongoose=require('../../database');
const Schema=mongoose.Schema;

const MessageSchema=new Schema({

message:{
    type:String,
    required:true
},

UserId:{
    type: Schema.Types.ObjectId,
    ref:'users',
    required:true
},

messagedOn:{
    type:Date,
    default:Date.now()

}

})

module.exports=mongoose.model('messages',MessageSchema);

 