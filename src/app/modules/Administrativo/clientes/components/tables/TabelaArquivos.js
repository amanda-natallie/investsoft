import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Fab, Icon } from "@material-ui/core";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";
import CustomTable from "../../../../../components/CustomTable/CustomTable";
import SVG from "react-inlinesvg";

import { useSelector, useDispatch } from "react-redux";
import { setIsDisable } from "../../../clientes/_redux/clientesActions";
import { CustomDropzone } from "../../../../../components/Dropzone/CustomDropzone";

const headerStyle = {
  backgroundColor: "#F3F6F9",
  border: 0,
  color: "#3F4254",
};

const columns = [
  {
    field: "name",
    title: "Nome",
    headerStyle: headerStyle,
    render: (row) => (
      <div className="d-flex align-items-center">
        <img
          className="table_icon no_bg"
          src={toAbsoluteUrl(row.icone)}
          alt={row.name}
        />
        <span>{row.name}</span>
      </div>
    ),
  },
  {
    field: "tipo",
    title: "Tipo",
    headerStyle: headerStyle,
  },
  {
    field: "usuario",
    title: "Usuário",
    headerStyle: headerStyle,
  },

  {
    field: "dataArquivo",
    title: "Data do Arquivo",
    headerStyle: headerStyle,
  },

  {
    field: "actions",
    title: "Ações",
    filtering: false,
    headerStyle: {
      backgroundColor: "#F3F6F9",
      border: 0,
      color: "#3F4254",
      borderRadius: "0.42rem 0 0 0.42rem",
    },

    render: (row) => (
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="btn btn-primary font-weight-bolder font-size-sm"
          style={{ marginRight: 20 }}
        >
          <GetAppIcon />
        </button>
        <button className="btn btn-danger font-weight-bolder font-size-sm">
          <DeleteIcon />
        </button>
      </div>
    ),
  },
];

const TabelaArquivos = ({ data, managerCustomer }) => {
  const inputState = useSelector((state) => state.client);

  return (
    <>
      <CustomTable data={data} columns={columns} title="Arquivos" />
      {managerCustomer === true && !inputState.isDisable && (
        <CustomDropzone managerCustomer={managerCustomer} />
      )}
    </>
  );
};

export default TabelaArquivos;
