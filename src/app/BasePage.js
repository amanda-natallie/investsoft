import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import {
  GerenciarClientes,
  CadastrarClientes,
} from "./modules/Administrativo/clientes";

import { DashboardPage } from "./pages/DashboardPage";

export default function BasePage() {

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute
          path="/gerenciar-clientes"
          component={GerenciarClientes}
        />

        <ContentRoute
          path="/cadastrar-clientes"
          component={CadastrarClientes}
        />

        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
