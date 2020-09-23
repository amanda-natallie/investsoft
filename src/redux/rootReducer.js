import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import clientesReducer from "../app/modules/Administrativo/clientes/_redux/clientesReducer";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  clientes: clientesReducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
