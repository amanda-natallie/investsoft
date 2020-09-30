export const nextStep = (props) => {
  return { type: "STEP_NEXT", props };
};

export const backStep = (props) => {
  return { type: "STEP_BACK", props };
};

export const resetStep = (props) => {
  return { type: "STEP_RESET", props };
};
