// const team = require('./team');

class manager {
    constructor(name, email, id, role, department, directs) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.department = department;
        this.directs = directs;
    }
    buildHTML() {
            const {
              name,
              email,
              id,
              role,
              department,
              directs
            } = mgr;
            const html =
            `
            <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <title>Team Profile</title>
              <link rel="stylesheet" href="assets/css/style.css" type="text/css">
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
              <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          </head>
          
          <body>
          
              <div class="header-div">
                  <h1 class="title">My Team</h1>
              </div>  
              
                  <div class="container-fluid" id="main-cont">      
                      <div class="row">
                          <div class="col-md-3 card-div">
                              <h3 class="card-title">${name}</h3>
                              <span class="data-text">${email}</span><br>
                              <span class="data-text">ID: ${id}</span><br>
                              <span class="data-text">Role: ${role}</span><br>
                              <span class="data-text">Department: ${department}</span><br>
                              <span class="data-text">Direct Reports: ${directs}</span><br>
                          </div>    
                      </div>
                  </div>
          
          </body>
          </html>
            `
          }
    
}

module.exports = manager;