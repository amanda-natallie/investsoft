export const setClientes = (props) => {
  return { type: "CLIENTES_UPDATE", payload: { props } };
};

export const createCliente = (props) => {
  return { type: "CLIENTES_CREATE", props };
};

export const clearClientes = (props) => {
  return { type: "CLIENTES_CLEAR_DATA", props };
};

export const setIsDisable = (props) => {
  return { type: "CLIENTES_IS_DISABLE", props };
};
