import React from 'react';
import { Link, BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import './App.css';
import Employees from './component/employee/employees.component';
import Applyleave from './component/leave/apply-leave/applyLeave.component';
import Reviewleave from './component/leave/review-leave/reviewLeave.component';
import Login from './component/employee/login'

function App(props) {
  //persist logged in status & the user cookies

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/employee">Employees</Link></li>
              <li><Link to="/leave/apply">Apply Leave</Link></li>
              <li><Link to="/leave/review">Review Leave</Link></li>

            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/login" element={<Login />} />
            <Route path="/leave/apply" element={<Applyleave />} />
            <Route path="/leave/review" element={<Reviewleave />} />
            <Route path="/employee" element={<Employees />} />
          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;