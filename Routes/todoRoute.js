const express = require("express");
const app   = express();
const router = express.Router();
const todoModel = require("../model/todoModel.js");


//===========get Todo Data=========
router.get("/",(req,res)=>{
    todoModel.find({},(err,data)=>{
        if(err){
            res.send(err).status(400);
        }else{
            res.send(data).status(200);
        }
    })
})


//====get data by ID=========
router.get("/:id",(req,res)=>{
    let id = req.params.id;
    todoModel.find({_id:id},(err,data)=>{
        if(err){
            res.send(err).status(400);
        }else{
            res.send(data).status(200);
        }
    })
})
//=============post Todo Data=========
router.post("/",(req,res)=>{
    const {todoData} = req.body;
    let errArr =[];

    if(!todoData){
        errArr.push("Required : Todo Data");

    };

    let todoObj = new todoModel(

        {
            todoData,
            createdAt : new Date(),
        });
        
        todoObj.save((err,result)=>{
            if(err){
                res.send(err).status(400);
            }else{
                res.send(result).status(200);
            }
        });
});

//============delete todo data===========
router.delete("/:id", (req, res) => { 
    let id = req.params.id;
    todoModel.remove({_id: id}).then((res)=>{
        res.send("user deleted sucessfully").status(200);
        
    }).catch((err)=>{
        res.send(err).status(400);
    });
});
//==========edit data ===========
router.put("/:id", (req, res) => {
    let id = req.params.id;
    const {todoData}= req.body;
    todoModel.findOneAndUpdate({_id:id},{
        $set:{
            
              todoData,            
        }
    }).then((result)=>{
    
        res.send("User data updated").status(200)
        
    }).catch((err)=>{
        res.send(err).status(400);
    })

})


//============delete todo data===========
router.delete("/", (req, res) => { 
    
    todoModel.remove({}).then((res)=>{
        res.send("todo deleted sucessfully").status(200);
        
    }).catch((err)=>{
        res.send(err).status(400);
    });
});








//=============module export=======
module.exports = router;