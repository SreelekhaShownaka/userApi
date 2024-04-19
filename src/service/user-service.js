const UserDAO=require('../DAO/user-dao');

const UserService={
    register:(payload)=>{
        console.log('data inside service',payload)
        return new Promise((resolve,reject)=>{
            UserDAO.register(payload).then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    login:(payload)=>{
        console.log('data inside service',payload)
        
        return new Promise((resolve,reject)=>{
            UserDAO.login(payload).then(result => {
            console.log('result from database in service page',result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    UpdateUser:(paramsData,payload)=>{
        console.log('data inside service',payload)
        
        return new Promise((resolve,reject)=>{
            UserDAO.UpdateUser(paramsData,payload).then(result => {
            console.log('result from database in service page',result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    DeleteUser:(condition)=>{
        console.log('data inside service',condition)
        
        return new Promise((resolve,reject)=>{
            UserDAO.DeleteUser(condition).then(result => {
            console.log('result from database in service page',result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getAllUsers:()=>{
        
        return new Promise((resolve,reject)=>{
            console.log('checking inside service');
            UserDAO.getAllUsers().then(result => {

                resolve(result);
                console.log(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getUserById:(Uid)=>{
        
        return new Promise((resolve,reject)=>{
            console.log('checking inside service');
            UserDAO.getUserById(Uid).then(result => {

                resolve(result);
                console.log(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

   

}
module.exports = UserService;