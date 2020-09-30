import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import clientesReducer from "../app/modules/Administrativo/clientes/_redux/clientesReducer";
import stepsReducer from "../app/modules/Administrativo/steps/_redux/stepsReducer";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  client: clientesReducer,
  step: stepsReducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
