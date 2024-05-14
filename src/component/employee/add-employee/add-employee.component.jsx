import React, { useState } from 'react';
import { connect } from 'react-redux';
import RoleDepartment from '../../common/role-department';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { addEmployee } from '../../../api/employeeService';
import './add-employee.style.css';

const AddEmployees = ({ addNewEmployee, cancelAddEmployee }) => {
  const [state, setState] = useState({
    firstName: '',
    employeeId: '',
    lastName: '',
    birthDate: new Date(),
    role: '',
    department: '',
    email: ''
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const onDateChange = (date) => {
    setState({
      ...state,
      birthDate: moment(date).format('DD-MM-YYYY')
    });
  };

  const onInputChange = ({ id, value }) => {
    setState({ ...state, [id]: value });
  };

  const addEmployee = () => {
    addNewEmployee({ ...state }, cancelAddEmployee);
  };

  return (
    <div className="newEmployeeForm">
      <h1 className="todoHeader">Add Employee</h1>
      <br />
      <form className="addEmployeeForm">
        <div className="form-group">
          <label className="fieldLabel">Employee ID</label>
          <input
            type="text"
            className="form-control"
            id="employeeId"
            aria-describedby="emailHelp"
            placeholder="Enter Employee Id"
            value={state.employeeId}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label className="fieldLabel">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
            value={state.firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label className="fieldLabel">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Enter Last Name"
            value={state.lastName}
            onChange={onChange}
          />
        </div>
        <div className="customDatePickerWidth">
          <label className="fieldLabel">Birth Date</label>
          <DatePicker
            className="form-control"
            selected={Date.parse(state.birthDate)}
            onChange={onDateChange}
          />
        </div>
        <br />
        <RoleDepartment
          department={state.department}
          role={state.role}
          onChange={onInputChange}
        />
        <div className="form-group">
          <label className="fieldLabel">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={onChange}
          />
        </div>
      </form>
      <br />
      <button className="btn btn-danger addEmployeeForm" onClick={addEmployee}>
        Add Employee
      </button>
      <button className="btn btn-danger addEmployeeForm" onClick={cancelAddEmployee}>
        Cancel
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewEmployee: (employee, cancelAddEmployee) => dispatch(addEmployee(employee, cancelAddEmployee))
  };
};

export default connect(null, mapDispatchToProps)(AddEmployees);
