const express=require("express");

const app=express();
app.use(express.json());
app.use("/user",require("./routes/user"));
app.set("view engine","ejs");

app.listen(5000,(err)=>err?console.log(err) : console.log("server is running"));

