const express = require('express');
const UserService=require('../service/user-service');
const router = express.Router();

router.post('/register',(req,res)=>{
    let bodyData=req.body;
    console.log('data inside controller',bodyData);
    UserService.register(bodyData).then(result=>{
        res.send({data:'User registered successfully'});
    }).catch(error=>{
        res.send({data:Error});
    })
})


router.post('/login',(req,res)=>{
    let bodyData=req.body;
    console.log('data inside controller',bodyData);
    UserService.login(bodyData).then(result=>{
        console.log('result from service page',result);
        res.send({data:'User loggedin successfully',result});

    }).catch(error=>{
        res.send({data:Error});
    })
})

    router.put('/UpdateUser/:email',(req,res)=>{
        let bodyData=req.body;
        let paramsData=req.params;
        console.log('data inside controller',bodyData);
        UserService.UpdateUser(paramsData, bodyData).then(result=>{
            console.log('result from service page',result);
            res.send({message:'User successfully updated',data:result});
    
        }).catch(error=>{
            res.send({data:Error});
        })

})

router.get('/getAllUsers',(req,res)=>{
    UserService.getAllUsers().then(result=>{
        console.log(result);
        res.send({allUsers:result});

    }).catch(error=>{
        console.log(error);
        res.send({error});
    })

})


router.get('/getUserById/:_id',(req,res)=>{
    let Uid = req.params;

    UserService.getUserById(Uid).then(result=>{
        console.log(result);
        res.send({allUsersById:result});

    }).catch(error=>{
        console.log(error);
        res.send({error});
    })

})





router.delete('/DeleteUser/:email',(req,res)=>{
    // let bodyData=req.body;
    let paramsData=req.params;
    console.log('data inside controller',paramsData);
    UserService.DeleteUser(paramsData).then(result=>{
        console.log('result from service page',result);
        res.send({message:'User successfully deleted',data:result});

    }).catch(error=>{
        res.send({data:Error});
    })
})

module.exports=router