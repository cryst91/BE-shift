const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = 3600;

app.get("/",(req,res) => {
    return res.send("Hello Menggg World!");
});

// PATH = path (alamat) misal localhost:3600/meng
// handler = function nya

//method - GET
app.get("/meng", (req,res) => {
    return res.send("Hello Meng!");
});

// dynamic route query
app.get("/meng-query", (req, res) => {
    return res.send("dynamic routing query " + req.query.name);
});
//.name harus sama dengan KEY nya di postman
  
//   dynamic route params
app.get("/meng-params/:name", (req, res) => {
    return res.send("dynamic routing params " + req.params.name);
}); 

//return JSON
app.get("/json", (req,res) => {
    return res.json({ name: "Meng Meng", role: "Student" });
});

//status code
// app.get("/status-code", (req,res) => {
//     return res.status(200).json({ status: "success", message: "data berhasil diolah" });
// });

app.get("/status-code", (req,res) => {
    return res.status(404).json({ status: "failed", message: "data tidak ditemukan" });
});

//method - POST
app.post("/meng", (req,res) => {
    return res.send("POST Henlo MENG!");
});

app.put("/meng", (req,res) => {
    return res.send("PUT Henlo MENG!");
});

app.delete("/meng", (req,res) => {
    return res.send("DELETE Henlo MENG!");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
