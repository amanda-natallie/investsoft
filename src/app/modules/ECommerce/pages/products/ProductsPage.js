import React from "react";
import { Route } from "react-router-dom";
import { ProductsLoadingDialog } from "./products-loading-dialog/ProductsLoadingDialog";
import { ProductDeleteDialog } from "./product-delete-dialog/ProductDeleteDialog";
import { ProductsDeleteDialog } from "./products-delete-dialog/ProductsDeleteDialog";
import { ProductsFetchDialog } from "./products-fetch-dialog/ProductsFetchDialog";
import { ProductsUpdateStatusDialog } from "./products-update-status-dialog/ProductsUpdateStatusDialog";
import { ProductsCard } from "./ProductsCard";
import { ProductsUIProvider } from "./ProductsUIContext";

export function ProductsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push("/gerenciar-clientes/new");
    },
    openEditProductPage: (id) => {
      history.push(`/gerenciar-clientes/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/gerenciar-clientes/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/gerenciar-clientes/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/gerenciar-clientes/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/gerenciar-clientes/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/gerenciar-clientes/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/gerenciar-clientes");
            }}
          />
        )}
      </Route>
      <Route path="/gerenciar-clientes/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/gerenciar-clientes");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-dois/fetch">
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-dois");
            }}
          />
        )}
      </Route>
      <Route path="/gerenciar-clientes/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/gerenciar-clientes");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
