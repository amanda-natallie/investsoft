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
      history.push("/pagina-dois/new");
    },
    openEditProductPage: (id) => {
      history.push(`/pagina-dois/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/pagina-dois/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/pagina-dois/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/pagina-dois/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push("/pagina-dois/updateStatus");
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path="/pagina-dois/deleteProducts">
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-dois");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-dois/:id/delete">
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/pagina-dois");
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
      <Route path="/pagina-dois/updateStatus">
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-dois");
            }}
          />
        )}
      </Route>
      <ProductsCard />
    </ProductsUIProvider>
  );
}
