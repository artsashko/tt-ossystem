import { initialState } from "./store";

const SET_ROLE = 'setRole';

export const setRole = value => ({
  type: SET_ROLE,
  value,
});

const roleReducer = (state = initialState.role, action) => {
  switch (action.type) {
    case SET_ROLE:
      return action.value;
    default:
      return state;
  }
};

export default roleReducer;
