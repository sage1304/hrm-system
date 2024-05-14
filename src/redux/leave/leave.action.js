export const APPLY_LEAVE = 'APPLY_LEAVE';

export const applyLeave = (userId, leaveDetails) => ({
  type: APPLY_LEAVE,
  payload: { userId, leaveDetails },
});
