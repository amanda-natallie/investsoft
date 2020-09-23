import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../../services/api";

function fetchClient(data) {
  return api.post("/clients", { data });
}

// SAGA PARA SALVAR INFORMAÇÕES NO BANCO DE DADOS. IMPORTAR FUNÇÃO O clientesActions e chamar ela com o Dispatch
function* saveClient(action) {
  try {
    yield call(fetchClient, action);
    alert("Cliente salvo com sucesso.");
  } catch (error) {
    yield put({
      type: "CLIENTES_ERROR",
      errorMessage: error.toString(),
    });
    alert(error.toString());
  }
}

export default all([takeLatest("CLIENTES_CREATE", saveClient)]);
