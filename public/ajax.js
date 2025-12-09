// // const { createElement } = require("react");

// // const { get } = require("../src/app");

// let searchDept=(str)=>{
//     let xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
//             let jsonObj=JSON.parse(this.responseText);

//             let tableBody=document.getElementById("tblbody");
//             tableBody.innerHTML="";
//             jsonObj.forEach((element,index)=> {
//                 let row=document.createElement("tr");
//                 let col=document.createElement("td");
//                 col.innerHTML=(index+1);

//                 row.appendChild(col);
                
//                 col=document.createElement("td");
//                 col.innerHTML=element.deptname;
//                 row.appendChild(col);

//                 col=document.createElement("td");
//                 col.innerHTML="<a href='/deldept?did="+element.deptid+"'>DELETE</a>";
//                 row.appendChild(col);

//                 col=document.createElement("td");
//                 col.innerHTML="<a href='/upddept?dn="+element.deptname+"&did="+element.deptid+"'>UPDATE</a>";
//                 row.appendChild(col);

//                 tableBody.appendChild(row);
//             });
//         }
//     };
//         xhttp.open("get","/searchDeptByName?dn="+str,true);
//         xhttp.send();

// }

// // let  checkEmailExistance=(str)=>{
// //     let xhttp=new XMLHttpRequest();
// //         xhttp.onreadystatechange=function(){
// //         if(this.readyState==4 && this.status==200){
// //             alert(this.responseText);
// //         }
// //     };
// //     xhttp.open("get","/searchEmail?e="+str,true);
// //     xhttp.send();
// // } 

// let checkEmailExistance = (str) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             if (this.responseText.length>0) {
//                document.getElementById("labelMsg").innerHTML=this.responseText;
//                document.getElementById("uemail").focus();
//             } else {
//                document.getElementById("labelMsg").innerHTML="";
//             }
//         }
//     };
//     xhttp.open("GET", "/searchEmail?e=" + str,true);
//     xhttp.send();
// };

// let checkContactExistance = (str) => {
//     let xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             if (this.responseText.length>0) {
//                document.getElementById("lblc").innerHTML=this.responseText;
//                document.getElementById("uc").focus();
//             } else {
//                document.getElementById("lblc").innerHTML="";
//             }
//         }
//     };
//     xhttp.open("GET", "/searchContact?c=" + str,true);
//     xhttp.send();
// };


// let getEmployeeByDept=()=>{
//     let deptid=parseInt(document.getElementById("did").value);
//     let xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState == 4 && this.status ==200){
            
//         }
//     }
//     xhttp.open("get","/getEmpByDeptId?deptid="+deptid,true);
//     xhttp.send;
// }




function getEmployeeByDept() {
  let deptId = document.getElementById("did").value;

  if (deptId == 0) {
    document.getElementById("empResult").innerHTML = "";
    return;
  }

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/getEmpByDeptId?did=" + deptId, true);

  xhr.onload = function () {
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);
      let rows = "";

      if (data.length == 0) {
        rows = `<tr><td colspan="6" class="text-warning">No Employees Found</td></tr>`;
      } else {
        data.forEach((emp, i) => {
          rows += `
            <tr>
              <td>${i + 1}</td>
              <td>${emp.name}</td>
              <td>${emp.email}</td>
              <td>${emp.contact}</td>
              <td>${emp.sal}</td>
              <td><img src="/images/${emp.photo}" width="50"></td>
            </tr>
          `;
        });
      }

      document.getElementById("empResult").innerHTML = rows;
    }
  };

  xhr.send();
}
