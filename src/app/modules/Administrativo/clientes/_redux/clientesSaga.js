import { call, put, all, takeLatest } from "redux-saga/effects";
import api from "../../../../../services/api";

// SAGA PARA SALVAR INFORMAÇÕES NO BANCO DE DADOS. IMPORTAR FUNÇÃO O clientesActions e chamar ela com o Dispatch
function* saveClient({ payload }) {
  try {
    // yield call(fetchClient, action);
    const props = payload;
    const { cliente, socios } = props;

    const response = yield call(api.post, "/clients", cliente);
    const clientData = response.data;

    const socio = yield call(
      api.post,
      `/cliente/associate/${clientData.id}`,
      socios
    );
    console.log(socio.data);

    alert("Cliente e Socios, salvos com sucesso.");
  } catch (error) {
    yield put({
      type: "CLIENTES_ERROR",
      errorMessage: error.toString(),
    });
    alert(error.toString());
  }
}

export default all([takeLatest("CLIENTES_CREATE", saveClient)]);
