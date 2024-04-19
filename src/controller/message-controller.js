const express = require('express');
const MessageService=require('../service/message-service');
const router = express.Router();

router.post('/create',(req,res)=>{
    let bodyData=req.body;
    console.log('data inside controller',bodyData);
    MessageService.create(bodyData).then(result=>{
        res.send({data:'Message created successfully'});
    }).catch(error=>{
        res.send({data:Error});
    })
})


// router.post('/login',(req,res)=>{
//     let bodyData=req.body;
//     console.log('data inside controller',bodyData);
//     MessageService.login(bodyData).then(result=>{
//         console.log('result from service page',result);
//         res.send({data:'Message loggedin successfully',result});

//     }).catch(error=>{
//         res.send({data:Error});
//     })
// })

    router.put('/UpdateMessage/:_id',(req,res)=>{
        let bodyData=req.body;
        let paramsData=req.params;
        console.log('data inside controller',bodyData);
        MessageService.UpdateMessage(paramsData, bodyData).then(result=>{
            console.log('result from service page',result);
            res.send({message:'Message successfully updated',data:result});
    
        }).catch(error=>{
            res.send({data:Error});
        })

})

router.get('/getAllUsersMessages',(req,res)=>{
   let bodyData=req.params;
   console.log('data inside controller',bodyData);
    MessageService.getAllUsersMessages(bodyData).then(result=>{
        console.log('result from service page',result);
        res.send({allUsersMessages:result});

    }).catch(error=>{
        console.log(error);
        res.send({error});
    })

})



router.delete('/DeleteMessage/:_id',(req,res)=>{
    // let bodyData=req.body;
    let paramsData=req.params;
    console.log('data inside controller',paramsData);
    MessageService.DeleteMessage(paramsData).then(result=>{
        console.log('result from service page',result);
        res.send({message:'Message successfully deleted',data:result});

    }).catch(error=>{
        res.send({data:Error});
    })
})

router.get('/getMessageByMessageId/:UserId',(req,res)=>{
    let bodyData = req.params;
    console.log('data inside controller',bodyData);
    MessageService.getMessageByMessageId(bodyData).then(result=>{
        console.log('result from service page', result)
        res.send({message:'all messages and user details by id',data:result});
    }).catch(error=>{
        res.send({data:error});
    })
})




module.exports=router