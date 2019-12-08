class manager {
    constructor(name, email, id, role, department, directs) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.department = department;
        this.directs = directs;
    }

//     createMgrEl(mgrData) {

//         const {
//             name,
//             email,
//             id,
//             role,
//             department,
//             directs
//         } = mgrData;

//         const mgrEl =
// `    
//         <div class="row">
//             <div class="col-md-3 card-div" id="mgr-row">
//                 <!-- <h3 class="card-title">${name}</h3>
//                 <span class="data-text">${email}</span><br>
//                 <span class="data-text">ID: ${id}</span><br>
//                 <span class="data-text">Role: ${role}</span><br>
//                 <span class="data-text">Department: ${department}</span><br>
//                 <span class="data-text">${directs} direct reports</span><br> -->
//             </div>    
//         </div>
// `
//         htmlString.push(mgrEl);
//         }
}
// var htmlEnd = `
// </div>
// </body>
// </html>`;

module.exports = manager;
// module.exports = manager.createMgrEl();