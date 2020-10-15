const initialState = {
  isError: false,
  isLoading: false,
  errorMessage: "",
  isDisable: true,
  clienteInformation: {},
  sociosInformation: [],
};

const clientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLIENTES_IS_DISABLE": {
      return {
        ...state,
        isDisable: !action.props.isDisable,
      };
    }
    case "CLIENTES_IS_LOADING": {
      return {
        isLoading: action.isLoading,
        clienteInformation: { ...state.clienteInformation },
      };
    }
    case "CLIENTES_ERROR": {
      return {
        isError: true,
        errorMessage: action.errorMessage,
      };
    }
    // case "CLIENTES_UPDATE":
    //   return {
    //     clienteInformation: {
    //       ...state.clienteInformation,
    //       ...action.clienteInformation,
    //     },
    //   };

    case "CLIENTES_UPDATE": {
      const { props } = action.payload;

      console.log(state, action);

      return {
        ...state,
        clienteInformation: {
          ...state.clienteInformation,
          ...props,
        },
      };
    }
    case "CLIENTES_CLEAR_DATA": {
      return initialState;
    }

    case "SOCIOS_CREATE": {
      const { props } = action.payload;

      console.log(state, action);

      return {
        ...state,
        sociosInformation: [...state.sociosInformation, ...props],
      };
    }

    default:
      return state;
  }
};

export default clientesReducer;
