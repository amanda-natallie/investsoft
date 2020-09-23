export const setClientes = (props) => {
  return { type: "CLIENTES_UPDATE", props };
};

export const createCliente = (props) => {
  return { type: "CLIENTES_CREATE", props };
};

export const clearClientes = (props) => {
  return { type: "CLIENTES_CLEAR_DATA", props };
};
