// import React from 'react';
// import './StudentDashboard.css';


// const StudentDashboard = () => (
//   <div>
  
//     <div className="main">
//       <h3>Login</h3>
//     </div>
//     <div className="footer">
//       <button type="submit"><b>Upload</b></button>
//       <button type="submit"><b>Internship resources</b></button>
//     </div>
//   </div>
// );

// export default StudentDashboard;


// src/components/StudentDashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './StudentDashboard.css';

// function StudentDashboard() {
//   return (
//     <div>
//       <div className="header">
//         <img src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_100_100/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=UhtoGoVMhtwHbanvVkMuh_q3AV9otg8YVS8EuXIG1ok" alt="Image not available" />
//         <h2>VALLURUPALLI NAGESWARA RAO VIGNANA JYOTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY</h2>
//       </div>
//       <div className="main">
//         <h3><Link to="/studentlogin">Login</Link></h3>
//       </div>
//       <div className="footer">
//         <Link to="/upload"><button type="button"><b>Upload</b></button></Link>
//         <button type="button"><b>Internship resources</b></button>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;


import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

function StudentDashboard() {
  return (
    <div>
      <header>
        <div className="icon">
          <img
            src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_100_100/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=UhtoGoVMhtwHbanvVkMuh_q3AV9otg8YVS8EuXIG1ok"
            width="80px"
            alt=""
          />
        </div>
        <nav>
          <h1 className="la">
            VALLURUPALLI NAGESWARARAO VIGNANA JYOTHI INSTITUTE OF TECHNOLOGY
          </h1>
        </nav>
      </header>
      <header className="pha">
        <div className="ig">
          <h1>
            WELCOME TO STUDENT DASHBOARD
          </h1>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="options">
            <h2 className="l"><Link to="/UploadForm">Upload</Link></h2>
          </div>
          <div className="options">
            <h2 className="l"><Link to="/InternshipResources">Internship resources</Link></h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
