export const setClientes = (props) => {
  return { type: "CLIENTES_UPDATE", payload: { props } };
};

export const createCliente = (cliente, socios) => {
  return { type: "CLIENTES_CREATE", payload: { cliente, socios } };
};

export const clearClientes = (props) => {
  return { type: "CLIENTES_CLEAR_DATA", props };
};

export const setIsDisable = (props) => {
  return { type: "CLIENTES_IS_DISABLE", props };
};

export const createSocios = (props) => {
  return { type: "SOCIOS_CREATE", payload: { props } };
};
