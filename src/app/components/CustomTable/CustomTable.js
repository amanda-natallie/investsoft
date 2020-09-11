import React from "react";
import BootstrapTable from "react-bootstrap-table-next";



export default ({data, columns}) => (
  <BootstrapTable
    wrapperClasses="table-responsive"
    bordered={true}
    classes="table table-head-custom table-vertical-center overflow-hidden"
    bootstrap4
    keyField="id"
    data={data}
    columns={columns}
  />
);
