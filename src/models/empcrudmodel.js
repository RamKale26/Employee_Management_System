
// let db=require("../../db.js");
// const { request } = require("../app.js");

// exports.saveEmployee=(...empData)=>{
//     return new Promise((resolve,reject)=>{
//         db.query("insert into employee values('0',?,?,?,?,?,?)",[...empData],(err,result)=>{
//             if(err){
//                 reject("Not Save");
//             }
//             else{
//                 resolve("Save SuccessFully...");
//             }
//         });
//     })
// }

// exports.varifyEmail=(userEmail)=>{
//     return new Promise((resolve,reject)=>{
//       db.query("select * from employee where email=?",[userEmail],(err,result)=>{
//         if(err){
//             reject(err);
//         }
//         else{
//             resolve(result);
//         }
//       });
//     });
// }


// exports.varifyContact=(userContact)=>{
//     return new Promise((resolve,reject)=>{
//         db.query("select * from employee where contact=?",[userContact],(err,result)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(result);
//             }
//         });
//     });
// }

let db = require("../../db.js");

exports.saveEmployee = (name, email, contact, sal, filename, deptid) => {
  return new Promise((resolve, reject) => {
    db.query(
      "insert into employee values('0',?,?,?,?,?,?)",
      [name, email, contact, sal, filename, deptid],
      (err, result) => {
        if (err) reject("Not Save");
        else resolve("Save Successfully...");
      }
    );
  });
};

exports.varifyEmail = (userEmail) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from employee where email=?",
      [userEmail],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

exports.varifyContact = (userContact) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from employee where contact=?",
      [userContact],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

exports.getEmpByDeptId = (deptId) => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from employee where deptid=?",
      [deptId],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};
