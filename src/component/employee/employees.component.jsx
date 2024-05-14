import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import EmployeeList from './employee-list/employee-list.component';
import AddEmployees from './add-employee/add-employee.component';
// import SearchEmployee from './search-employee/search-employee.component';
import { fetchEmployees } from '../../api/employeeService';
import { getEmployeesError, getEmployees, getEmployeesPending } from '../../redux/employee/employee.reducer';
import AuthenticatedComponent from '../route/authenticated.component';
import logo from '../../logo.svg';

const Employees = ({ fetchAllEmployees, employees, error, pending }) => {
    const [addEmployee, setAddEmployee] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchAllEmployees();
    }, []);

    const showNewEmpForm = () => {
        setAddEmployee(true);
    };

    const cancelAddEmployee = () => {
        setAddEmployee(false);
    };

    const searchedText = (text) => {
        setSearchText(text);
    };

    const renderHeader = () => {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome To Employee Management System</h1>
            </header>
        );
    };

    if (!pending) {
        return (
            <div>
                {renderHeader()}
                <div className="spinner-border"></div>
            </div>
        );
    }

    return (
        <div className="renderTodoList">
            {renderHeader()}
            {addEmployee ? (
                <AddEmployees cancelAddEmployee={cancelAddEmployee} />
            ) : (
                <>
                    <br />
                    {/* <SearchEmployee searchEmployee={searchedText} />
                    {error && <span className='employee-list-error'>{error}</span>} */}
                    <EmployeeList refreshParent={cancelAddEmployee} employees={employees} searchText={searchText} />
                    <button onClick={showNewEmpForm} className="btn btn-primary">New Employee</button>
                </>
            )}
        </div>
    );
};

const mapStateToProps = state => ({
    error: getEmployeesError(state),
    employees: getEmployees(state),
    pending: getEmployeesPending(state)
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllEmployees: () => dispatch(fetchEmployees())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthenticatedComponent(Employees));
