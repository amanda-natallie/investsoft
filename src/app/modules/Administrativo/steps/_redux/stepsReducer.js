const initialState = {
  step: 0,
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STEP_NEXT":
      if (action.props.step < 6) {
        return { ...state, step: (action.props.step += 1) };
      } else {
        return { ...state };
      }

    case "STEP_BACK":
      if (action.props.step > 0) {
        return { ...state, step: (action.props.step -= 1) };
      } else {
        return { ...state };
      }

    case "STEP_RESET":
      console.log(state, action);
      return { ...state, step: 0 };

    default:
      return state;
  }
};

export default stepsReducer;
