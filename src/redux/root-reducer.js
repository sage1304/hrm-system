import { combineReducers } from 'redux';

import employeeReducer from './employee/employee.reducer'
import leaveReducer from './leave/leave.reducer';
import loginReducer from './login/login.reducer';


export default combineReducers({
    employee: employeeReducer,
    leave: leaveReducer,
    login: loginReducer

});

