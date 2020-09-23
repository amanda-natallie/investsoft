const initialState = {
  isError: false,
  isLoading: false,
  errorMessage: "",
  isDisable: true,
  clienteInformation: {},
};

const clientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLIENTES_IS_DISABLE":
      return {
        isDisable: action.isDisable,
        clienteInformation: { ...state.clienteInformation },
      };
    case "CLIENTES_IS_LOADING":
      return {
        isLoading: action.isLoading,
        clienteInformation: { ...state.clienteInformation },
      };

    case "CLIENTES_ERROR":
      return {
        isError: true,
        errorMessage: action.errorMessage,
      };
    case "CLIENTES_UPDATE":
      return {
        clienteInformation: {
          ...state.clienteInformation,
          ...action.clienteInformation,
        },
      };
    case "CLIENTES_CLEAR_DATA":
      return initialState;
    default:
      return state;
  }
};

export default clientesReducer;
