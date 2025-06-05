const mysql=require('mysql2');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'dbms',
    database:'blogdb'
});

connection.connect((err)=>{
    if(err)throw err;
    console.log('connected to Mysql Database');
});
module.exports=connection;