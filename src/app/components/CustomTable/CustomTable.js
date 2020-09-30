import React from "react";
import MaterialTable from "material-table";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

export default ({ data, columns, title }) => (
  <>
    <MaterialTable
      classes="table table-head-custom table-vertical-center overflow-hidden"
      data={data}
      columns={columns}
      title={title}
      options={{
        filtering: true,
        search: true,
        grouping: true
      }}
      localization={{
        pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsPerPage: "Linhas por página:"
        },
        toolbar: {
            nRowsSelected: '{0} linha(s) selecionada(s)',
            searchTooltip: "Buscar",
            searchPlaceholder: "Buscar"
        },
        header: {
            actions: 'Actions'
        },
        body: {
            emptyDataSourceMessage: 'Nenhum registro para mostrar',
            filterRow: {
                filterTooltip: 'Filtrar'
            }
        },
        grouping: {
          placeholder: "Arraste para cá um titulo de coluna para agrupar"
        }
    }}
    />
  </>
);
