const express  = require("express") ;
const app = express() ;

app.use(express.json()) ;

app.get( "/health" , (req , res) => {
    res.status(200).json({
        status : "ok" 
    }) 
}) ;


const PORT  =  process.env.PORT || 3001 ;    // choosing the port 

app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`); 
} ) ; 
 



