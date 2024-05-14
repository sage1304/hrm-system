import { APPLY_LEAVE } from './leave.action';

const initialState = {
  leaveApplications: {},
};

const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_LEAVE:
      const { userId, leaveDetails } = action.payload;
      return {
        ...state,
        leaveApplications: {
          ...state.leaveApplications,
          [userId]: [...(state.leaveApplications[userId] || []), leaveDetails],
        },
      };
    default:
      return state;
  }
};

export default leaveReducer;
