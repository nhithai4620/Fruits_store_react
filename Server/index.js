const express = require('express');
const app = express();
app.use(express.static("public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);
var mysql = require("mysql");

server.listen(5000,function(){
    console.log('Node server runing @http://localhost:5000');
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fruits_shop",
  port: "3307"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

io.on("connection",function(socket){
    //Connection people
    console.log("Có người đã kết nối :" + socket.id);
    //Disconection people
    socket.on("disconnect", function(){
        console.log("Người dùng : " + socket.id + " đã ngắt kết nối!!!!")
    })

    var sql = "SELECT * FROM Products";
    con.query(sql, function(error, results) {
        // results = JSON.stringify(results);
        // console.log(results)
        io.sockets.emit("Server-send-products",results);
    });


    socket.on("login-data", function(data){
        if (data){
            var sql = "SELECT * FROM Customers where UserName=? and PassWord=?";
            var values = [data.username,data.password];
            con.query(sql,values, function(error, results) {
                if (!results[0]){
                    console.log("fail");
                    io.sockets.emit("Login-status","fail");
                }
                else {
                    results=JSON.parse(JSON.stringify(results));
                    io.sockets.emit("Login-customer-data",results[0]);
                    io.sockets.emit("Login-status","success");
                }
            });
        }
    })

    socket.on("signup-data", function(data){
        const Id = Math.random().toString().substr(2, 10); 
        if (data){
            var sql = "insert into Customers(Id,FullName,UserName,Email,PhoneNumber,Address,Password) value(?,?,?,?,?,?,?)";
            var values = [Id, data.fullname,data.username,data.email,data.phonenumber,data.address,data.password];
            con.query(sql,values, function(error, results) {
                if (error)	{
                    console.log("fail");
                    io.sockets.emit("Sign-up-status","fail");
                }
                else {
                    console.log("success");
                    io.sockets.emit("Sign-up-status","success");
                }
            });
        }
    })

    socket.on("invoice-data", function(data){
        if (data){
            console.log(data);
           var sql1 = "insert into invoice(id,customer_id,create_at,total) value(?,?,?,?)";
           var sql2 = "insert into invoice_details(product_id,invoice_id,quantity) value(?,?,?)";
           values1 = [data.invoice_id,data.customer_id,data.date,data.total_invoice];
           con.query(sql1,values1, function(error, results) {
                if (error)	{
                    console.log(error);
                }
            });
           data.cart.map((product,index) =>{
               values2 = [product._id,data.invoice_id,product.count];
               con.query(sql2,values2, function(error, results) {
                if (error)	{
                    console.log(error);
                }
            });
           })           
        }
    })

    


    // socket.on("Client-send-data",function(data){
    //     var sql = 'insert into infor(ID,Name,Birth,Email,PhoneNumber,Province,Wards)  value(?,?,?,?,?,?,?);';
    //     var studentInfor = {};
    //     data.forEach(element => {
    //         studentInfor[element.name] =  element.value;
    //     });
      
    //     var values = [studentInfor.ID, studentInfor.Name,studentInfor.Birth,studentInfor.Email,studentInfor.PhoneNumber,studentInfor.Province,studentInfor.Wards];
    //     if (studentInfor){
    //         con.query(sql,values, function(error, results) {
    //             if (error)	{
    //                 console.log("fail");
    //                 throw error;
    //             }
    //             else {
    //                 console.log("success");
    //             }
    //         });
    //     }      
    // })
});

app.get("/", function(req,res){
    res.send({Response: "Hello I am thai"}).status(200);
})



