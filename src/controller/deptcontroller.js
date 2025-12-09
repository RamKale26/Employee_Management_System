
// let deptmodel=require("../models/savedeptmodel.js");

// exports.saveDept=((req,res)=>{
//     let {name}=req.body;
//     let promise=deptmodel.saveDept(name);
//     promise.then((result)=>{
//         res.render("adddept.ejs",{msg:result});
//     }).catch((err)=>{
//         res.render("adddept.ejs",{msg:err});
//     });
// });


// exports.HomePage=(req,res)=>{
//     res.render("Home.ejs");
// }

// exports.newDept=(req,res)=>{
//     res.render("adddept.ejs");
// }

// exports.getAllDept=(req,res)=>{
//     let promise=deptmodel.getAllDept();
//     promise.then((result)=>{
//         res.render("viewdept.ejs",{deptList:result});
//     });
//     promise.catch((err)=>{
//         res.send(err);
//     }); 
// }

// exports.delDept=(req,res)=>{
//     let did=parseInt(req.query.did);
//     let promise=deptmodel.delDeptById(did);
//     promise.then((result)=>{
//         let p=deptmodel.getAllDept();
//         p.then((result)=>{
//         res.render("viewdept.ejs",{deptList:result});
//     });
//         p.catch((err)=>{
//         res.send(err);
//     }); 
//     });
//     promise.catch((err)=>{
//     });
// }

// exports.updateDept=(req,res)=>{
//    res.render("updatedept.ejs",{deptName:req.query.dn,
//                                 deptId:req.query.did
//    });
// }

// exports.deptFinalUpdate=(req,res)=>{
//     let {id,name}=req.body;
//     let promise=deptmodel.deptFinalUpdate(id,name);
//     promise.then((result)=>{
//           let p=deptmodel.getAllDept();
//         p.then((result)=>{
//         res.render("viewdept.ejs",{deptList:result});
//         });
//     });
//     promise.catch((err)=>{
//         res.send("Dept Not UPdate...");
//     });
// }

// exports.searchDeptByUsingName=((req,res)=>{
//     let name=req.query.dn;
//     let promise=deptmodel.getDeptByName(name);
//     promise.then((result)=>{
//         res.json(result);
//     }).catch((err)=>{
//         res.send("Something Wrong....");
//     }); 
// });

let deptmodel = require("../models/savedeptmodel.js");

exports.saveDept = (req, res) => {
  let { name } = req.body;

  deptmodel.saveDept(name)
    .then((result) => {
      res.render("adddept.ejs", { msg: result });
    })
    .catch((err) => {
      res.render("adddept.ejs", { msg: err });
    });
};

exports.HomePage = (req, res) => {
  res.render("home.ejs");
};

exports.newDept = (req, res) => {
  res.render("adddept.ejs");
};

exports.getAllDept = (req, res) => {
  deptmodel.getAllDept()
    .then((result) => {
      res.render("viewdept.ejs", { deptList: result });
    })
    .catch((err) => res.send(err));
};

exports.delDept = (req, res) => {
  let did = parseInt(req.query.did);

  deptmodel.delDeptById(did)
    .then(() => deptmodel.getAllDept())
    .then((result) => {
      res.render("viewdept.ejs", { deptList: result });
    });
};

exports.updateDept = (req, res) => {
  res.render("updatedept.ejs", {
    deptName: req.query.dn,
    deptId: req.query.did
  });
};

exports.deptFinalUpdate = (req, res) => {
  let { id, name } = req.body;

  deptmodel.deptFinalUpdate(id, name)
    .then(() => deptmodel.getAllDept())
    .then((result) => {
      res.render("viewdept.ejs", { deptList: result });
    })
    .catch(() => res.send("Dept Not Updated"));
};

exports.searchDeptByUsingName = (req, res) => {
  let name = req.query.dn;

  deptmodel.getDeptByName(name)
    .then((result) => res.json(result))
    .catch(() => res.send("Something Wrong"));
};
