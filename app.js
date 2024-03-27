import express from "express"

const PORT = process.env.PORT || 8001;
const app = express();

app.get("/",(req,res)=>{
    return res.json({message:"Hey, I am node js in container 🐳!!"});
})

app.listen(PORT,()=>{
    console.log(`Server is running at port number:${PORT}`);
    
})