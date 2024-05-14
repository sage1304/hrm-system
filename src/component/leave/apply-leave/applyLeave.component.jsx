import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyLeave } from '../../../redux/leave/leave.action';
import AuthenticatedComponent from '../../route/authenticated.component';
// import { applyLeave } from '../../redux/leave/leave.action';
// import {applyLeave} from '../../api/employeeService';
import './applyLeave.style.css';

const LeaveApplicationForm = ({ userId }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const leaveDetails = { leaveType, startDate, endDate, reason };
    dispatch(applyLeave(userId, leaveDetails));
    // Reset form fields after submission
    setLeaveType('');
    setStartDate('');
    setEndDate('');
    setReason('');
  };

  return (
    <div className="leave-form-container">
      <h2>Leave Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Leave Type:</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
            <option value="">Select Leave Type</option>
            <option value="sick">Sick Leave</option>
            <option value="annual">Annual Leave</option>
            <option value="casual">Casual Leave</option>
          </select>
        </div>
        <div>
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div>
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div>
          <label>Reason:</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button type="submit">Apply</button>
      </form>

    </div>
  );
};

export default AuthenticatedComponent(LeaveApplicationForm);
