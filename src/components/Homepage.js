import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div>
      <header>
        <div className="icon">
          <img
            src="https://media.licdn.com/dms/image/C560BAQFKt8O5GdaFjw/company-logo_100_100/0/1680080095222/vnr_vignanajyothiinstituteofengineeringandtechnology_logo?e=2147483647&v=beta&t=UhtoGoVMhtwHbanvVkMuh_q3AV9otg8YVS8EuXIG1ok"
            width="80px"
            alt="Institute Logo"
          />
        </div>
        <nav>
          <ul>
            <h1 className="la times-new-roman">
              VALLURUPALLI NAGESWARARAO VIGNANA JYOTHI INSTITUTE OF TECHNOLOGY
            </h1>
          </ul>
        </nav>
      </header>
      <header className="pha">
        <div className="ig">
          <h1>
            WELCOME TO VNRVJIET INTERNSHIP MODULE
          </h1>
        </div>
      </header>
      <main>
        <div className="row">
          <div className="options">
            <h2 className="l">
              <Link to="/StudentDashboard">Students</Link>
            </h2>
          </div>
          <div className="options">
            <h2 className="l">
              <Link to="/FacultyDashboard">Faculty</Link>
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
