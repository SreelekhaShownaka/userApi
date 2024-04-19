const UserModel=require('../model/user-model');
const UserDAO={
    register:(payload)=>{
        console.log('data inside dao',payload);
    return new UserModel({
        name:payload.name,
       email:payload.email,
        age:payload.age,
       password:payload.password
    }).save();

    },


login:(payload)=>{
    console.log('data inside dao',payload);
return  UserModel.findOne(payload,{password:0});

},

UpdateUser:(condition, payload)=>{
    console.log('condition for update dao',condition,'data to be updated as',payload);
return  UserModel.updateOne(condition,{$set:payload});
},

DeleteUser:(condition)=>{
    console.log('condition for delete dao',condition,'data to be updated as');
return  UserModel.deleteOne(condition);
},

getAllUsers:() => {
    return UserModel.find({});
},

getUserById:(Uid) => {
    return UserModel.findOne({_id:Uid});
}
}


module.exports = UserDAO;