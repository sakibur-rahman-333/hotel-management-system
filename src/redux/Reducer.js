const initState = {
  data: '',
  availableRooms: 0,
  successMail: 'Sign In',
};
const rootReducer = (state = initState, action) => {
  if (action.type === 'DATA') {
    return {
      ...state,
      data: action.value,
    };
  } else if (action.type === 'AUTH_SUCCESS') {
    return {
      ...state,
      successMail: action.value,
    };
  } else if (action.type === 'LOGOUT') {
    return {
      ...state,
      successMail: 'Sign In',
    };
  } else if (action.type === 'A_ROOM_IS_BOOKED') {
    return {
      ...state,
      availableRooms: action.value,
    };
  }
  return state;
};

export default rootReducer;
