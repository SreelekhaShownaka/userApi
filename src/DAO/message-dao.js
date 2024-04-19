const MessageModel=require('../model/message-model');
const MessageDAO={
   
    create:(payload)=>{
        console.log('data inside dao',payload);
    return new MessageModel({
        message:payload.message,
        UserId:payload.UserId
    }).save();

    },


// login:(payload)=>{
//     console.log('data inside dao',payload);
// return  MessageModel.findOne(payload,{password:0});

// },

UpdateMessage:(condition, payload)=>{
    console.log('condition for update dao',condition,'data to be updated as',payload);
return  MessageModel.updateOne(condition,{$set:payload});
},

DeleteMessage:(condition)=>{
    console.log('condition for delete dao',condition,'data to be updated as');
return  MessageModel.deleteMany(condition);
},

getAllUsersMessages:(payload) => {
    console.log('condition for get all Messages messages',payload);
    return MessageModel.find({})
    // .populate({path:'UserId',select:{password:0}});
},



getMessageByMessageId:(payload) => {
    try{
        console.log('data inside msg-dao',payload);
        return MessageModel.find(payload).populate({path:'UserId',select:{password:0}});
    }catch(error){
        console.log(error);
    }
   

    // ('UserId');
}



}


module.exports = MessageDAO;