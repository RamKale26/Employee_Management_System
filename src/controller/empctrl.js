
// let dbmodel=require("../models/savedeptmodel.js");
// let empCrud=require("../models/empcrudmodel.js");
// exports.newemp=(req,res)=>{
//     let promise=dbmodel.getAllDept();
//     promise.then((result)=>{
//          res.render("newemp.ejs",{deptList:result,msg:""});             
//     });
// }

// exports.saveEmployee=(req,res)=>{
//     let{name,email,contact,sal,deptid}=req.body;
//     let filename=req.file.filename;
//     let promise=empCrud.saveEmployee(name,email,contact,sal,filename,deptid);
//     promise.then((result)=>{
//         let p=dbmodel.getAllDept();
//         p.then((r)=>{
//             res.render("newemp.ejs",{deptList:r,msg:""});
//         });
//     });
//     promise.catch((err)=>{
//         res.send(err);
//     })
// }

// exports.varifyEmail=(req,res)=>{
//     let userEmail=req.query.e; 
//     let promise=empCrud.varifyEmail(userEmail);
//     promise.then((result)=>{
//        if(result.length>0){
//         res.send("Email Already Existed...");
//        }
//        else{
//         res.send("");
//        }
//     });
// }

// exports.varifyContact=(req,res)=>{
//     let userContact=req.query.c;
//     let promise=empCrud.varifyContact(userContact);
//     promise.then((result)=>{
//         if(result.length>0){
//             res.send("Contact Already Existed...");
//         }
//         else{
//             res.send("");
//         }
//     });
// }

// exports.viewEmp=(req,res)=>{
//      let p=dbmodel.getAllDept();
//         p.then((r)=>{
//             res.render("viewEmp.ejs",{deptList:r,msg:""});
//         });
// }

// exports.getEmployeeByDeptId=(req,res)=>{
//     let deptId=parseInt(req,res,deptId)
//     console.log(deptId);
// }   

let dbmodel = require("../models/savedeptmodel.js");
let empCrud = require("../models/empcrudmodel.js");

exports.newemp = (req, res) => {
  dbmodel.getAllDept().then((result) => {
    res.render("newemp.ejs", { deptList: result, msg: "" });
  });
};

exports.saveEmployee = (req, res) => {
  let { name, email, contact, sal, deptid } = req.body;
  let filename = req.file.filename;

  empCrud.saveEmployee(name, email, contact, sal, filename, deptid)
    .then(() => dbmodel.getAllDept())
    .then((r) => {
      res.render("newemp.ejs", { deptList: r, msg: "Employee Added Successfully" });
    })
    .catch((err) => res.send(err));
};

exports.varifyEmail = (req, res) => {
  empCrud.varifyEmail(req.query.e).then((result) => {
    res.send(result.length > 0 ? "Email Already Existed..." : "");
  });
};

exports.varifyContact = (req, res) => {
  empCrud.varifyContact(req.query.c).then((result) => {
    res.send(result.length > 0 ? "Contact Already Existed..." : "");
  });
};

exports.viewEmp = (req, res) => {
  dbmodel.getAllDept().then((r) => {
    res.render("viewEmp.ejs", { deptList: r });
  });
};

exports.getEmployeeByDeptId = (req, res) => {
  let deptId = parseInt(req.query.did);

  empCrud.getEmpByDeptId(deptId)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
