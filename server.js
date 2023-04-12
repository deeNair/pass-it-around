const express =require('express');

//create express app
const app= express();
const   PORT = 3000;



app.get('/',(req,res)=>{
    res.send(`<h1>99 bottles of beer</h1><li> <a href=${98}>Take one down pass it around</a> </li>`);
    
})

app.get('/:number_of_bottles',(req,res)=>{

    if(req.params.number_of_bottles == 0){
       res.send(`<h1><a href=${'/'}>home</a></h1>`)
    }
    else{
        res.send(`<h1>${req.params.number_of_bottles} bottles of beer</h1><a href=${req.params.number_of_bottles-1}>Take one down pass it around</a>`)
    }
 
    /**res.send(`<div><h1>${req.params.number_of_bottles} bottles of beer</h1> <h1> ${req.params.number_of_bottles == 0} ? <a href=${'/'}>home</a>:<a href=${req.params.number_of_bottles-1}>Take one down pass it around</a> </h1></div>`)*/
    

})

app.listen(3000,function(){
    console.log(`listening to port :${PORT}`);
})

