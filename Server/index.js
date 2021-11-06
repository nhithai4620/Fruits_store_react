const express = require('express');
const app = express();
app.use(express.static("public"));

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(5000,function(){
    console.log('Node server runing @http://localhost:5000');
})

// var mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "student",
//   port: "3307"
// });

// con.connect(function(err){
//   if(err){
//     console.log('Error connecting to Db');
//     return;
//   }
//   console.log('Connection established');
// });


io.on("connection",function(socket){
    //Connection people
    console.log("Có người đã kết nối :" + socket.id);
    //Disconection people
    socket.on("disconnect", function(){
        console.log("Người dùng : " + socket.id + " đã ngắt kết nối!!!!")
    })

    // var liststudent = [];
    // var sql = "select * from infor";
    // con.query(sql,function(err,results){
    //     if (err) throw err;
    //     liststudent = results;
    //     io.sockets.emit("Server-send-data",liststudent);
    // });  

    var message = {Name : "Nguyễn Nhĩ Thái"};
    io.sockets.emit("Server-send-data",message);

    socket.on("login-data", function(data){
        if (data){
            console.log(data);
        }
    })

    socket.on("signup-data", function(data){
        if (data){
            console.log(data);
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



