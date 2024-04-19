const MessageDAO=require('../DAO/message-dao');

const MessageService={
    create:(payload)=>{
        console.log('data inside service',payload)
        return new Promise((resolve,reject)=>{
            MessageDAO.create(payload).then(result => {
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    // login:(payload)=>{
    //     console.log('data inside service',payload)
        
    //     return new Promise((resolve,reject)=>{
    //         MessageDAO.login(payload).then(result => {
    //         console.log('result from database in service page',result);
    //             resolve(result);
    //         }).catch(error => {
    //             reject(error);
    //         })
    //     })
    // },

    UpdateMessage:(paramsData,payload)=>{
        console.log('data inside service',payload)
        
        return new Promise((resolve,reject)=>{
            MessageDAO.UpdateMessage(paramsData,payload).then(result => {
            console.log('result from database in service page',result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getMessageByMessageId:(payload)=>{
        console.log("checking inside service in msgs",payload);

        return new Promise((resolve, reject) => {
            MessageDAO.getMessageByMessageId(payload).then(result => {
                console.log("result from data base in msg-service page",result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

  

    DeleteMessage:(condition)=>{
        console.log('data inside service',condition)
        
        return new Promise((resolve,reject)=>{
            MessageDAO.DeleteMessage(condition).then(result => {
            console.log('result from database in service page',result);
                resolve(result);
            }).catch(error => {
                reject(error);
            })
        })
    },

    getAllUsersMessages:()=>{

        console.log('data in service page');
        return new Promise((resolve,reject)=>{
            console.log('checking inside service');
            MessageDAO.getAllUsersMessages().then(result => {
            console.log('result from database in service page ',result);
                resolve(result);
                console.log(result);
            }).catch(error => {
                reject(error);
            })
        })
    }

   

}
module.exports = MessageService;