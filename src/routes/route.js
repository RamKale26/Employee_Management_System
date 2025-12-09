// let express = require('express');
// let deptctrl=require("../controller/deptcontroller.js");
// let empctrl=require("../controller/empctrl.js");
// let upload=require("../middleware/fileupload.js");
// // const { route } = require('../app.js');
// let router=express.Router();


// router.post("/adddept",deptctrl.saveDept);
// router.get("/",deptctrl.HomePage);
// router.get("/newdept",deptctrl.newDept);
// router.get("/viewalldept",deptctrl.getAllDept);
// router.get("/deldept",deptctrl.delDept);
// router.get("/upddept",deptctrl.updateDept);
// router.post("/updatedept",deptctrl.deptFinalUpdate);
// router.get("/searchDeptByName",deptctrl.searchDeptByUsingName);
// router.get("/newemployee",empctrl.newemp);



// router.post("/saveemp",upload.single("photo"),empctrl.saveEmployee);
// router.get("/searchEmail",empctrl.varifyEmail);
// router.get("/searchContact",empctrl.varifyContact);
// router.get("/viewEmp",empctrl.viewEmp);
// router.get("//getEmpByDeptId",empctrl.getEmployeeByDeptId);
// module.exports=router;

let express = require("express");
let deptctrl = require("../controller/deptcontroller.js");
let empctrl = require("../controller/empctrl.js");
let upload = require("../middleware/fileupload.js");

let router = express.Router();

router.get("/", deptctrl.HomePage);

router.get("/newdept", deptctrl.newDept);
router.post("/adddept", deptctrl.saveDept);

router.get("/viewalldept", deptctrl.getAllDept);
router.get("/deldept", deptctrl.delDept);
router.get("/upddept", deptctrl.updateDept);
router.post("/updatedept", deptctrl.deptFinalUpdate);
router.get("/searchDeptByName", deptctrl.searchDeptByUsingName);

router.get("/newemployee", empctrl.newemp);
router.post("/saveemp", upload.single("photo"), empctrl.saveEmployee);

router.get("/searchEmail", empctrl.varifyEmail);
router.get("/searchContact", empctrl.varifyContact);

router.get("/viewEmp", empctrl.viewEmp);
router.get("/getEmpByDeptId", empctrl.getEmployeeByDeptId);

module.exports = router;
