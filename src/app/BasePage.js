import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { PaginaUm } from "./pages/PaginaUm";
import { PaginaDois } from "./pages/PaginaDois";
import { GerenciarClientesPage } from "./pages/clients/GerenciarClientesPage";
import { AlteratedGerenciarClientesPage } from "./pages/clients/AlteratedGerenciarClientesPage";
import { CadastrarClientesPage } from "./pages/clients/CadastrarClientesPage";
import { DashboardPage } from "./pages/DashboardPage";

const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/pagina-um" component={PaginaUm} />
        <ContentRoute path="/pagina-dois" component={PaginaDois} />
        <ContentRoute
          path="/gerenciar-clientes"
          component={GerenciarClientesPage}
        />

        <ContentRoute
          path="/gerenciar-clientes2"
          component={AlteratedGerenciarClientesPage}
        />

        <ContentRoute
          path="/cadastrar-clientes"
          component={CadastrarClientesPage}
        />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
