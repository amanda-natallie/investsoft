import React from "react";
import { Route } from "react-router-dom";
import { CustomersLoadingDialog } from "./customers-loading-dialog/CustomersLoadingDialog";
import { CustomerEditDialog } from "./customer-edit-dialog/CustomerEditDialog";
import { CustomerDeleteDialog } from "./customer-delete-dialog/CustomerDeleteDialog";
import { CustomersDeleteDialog } from "./customers-delete-dialog/CustomersDeleteDialog";
import { CustomersFetchDialog } from "./customers-fetch-dialog/CustomersFetchDialog";
import { CustomersUpdateStateDialog } from "./customers-update-status-dialog/CustomersUpdateStateDialog";
import { CustomersUIProvider } from "./CustomersUIContext";
import { CustomersCard } from "./CustomersCard";

export function CustomersPage({ history }) {
  const customersUIEvents = {
    newCustomerButtonClick: () => {
      history.push("/pagina-um/new");
    },
    openEditCustomerDialog: (id) => {
      history.push(`/pagina-um/${id}/edit`);
    },
    openDeleteCustomerDialog: (id) => {
      history.push(`/pagina-um/${id}/delete`);
    },
    openDeleteCustomersDialog: () => {
      history.push(`/pagina-um/deleteCustomers`);
    },
    openFetchCustomersDialog: () => {
      history.push(`/pagina-um/fetch`);
    },
    openUpdateCustomersStatusDialog: () => {
      history.push("/pagina-um/updateStatus");
    }
  }

  return (
    <CustomersUIProvider customersUIEvents={customersUIEvents}>
      <CustomersLoadingDialog />
      <Route path="/pagina-um/new">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-um/:id/edit">
        {({ history, match }) => (
          <CustomerEditDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-um/deleteCustomers">
        {({ history, match }) => (
          <CustomersDeleteDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-um/:id/delete">
        {({ history, match }) => (
          <CustomerDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-um/fetch">
        {({ history, match }) => (
          <CustomersFetchDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <Route path="/pagina-um/updateStatus">
        {({ history, match }) => (
          <CustomersUpdateStateDialog
            show={match != null}
            onHide={() => {
              history.push("/pagina-um");
            }}
          />
        )}
      </Route>
      <CustomersCard />
    </CustomersUIProvider>
  );
}
