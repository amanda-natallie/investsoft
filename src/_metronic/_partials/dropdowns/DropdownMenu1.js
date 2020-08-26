/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function DropdownMenu1() {
  return (
    <>
      {/*begin::Navigation*/}
      <ul className="navi navi-hover">
        <li className="navi-header font-weight-bold py-5">
          <span className="font-size-lg">Categoria:</span>
          <i
            className="flaticon2-information icon-md text-muted"
            data-toggle="tooltip"
            data-placement="right"
            title="Click to learn more..."
          ></i>
        </li>
        <li className="navi-separator mb-3 opacity-70"></li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">
              <span className="label label-xl label-inline label-light-success">
                Interno
              </span>
            </span>
          </a>
        </li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">
              <span className="label label-xl label-inline label-light-danger">
                Cliente
              </span>
            </span>
          </a>
        </li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">
              <span className="label label-xl label-inline label-light-warning">
                Fiscal
              </span>
            </span>
          </a>
        </li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">
              <span className="label label-xl label-inline label-light-primary">
                Pedido Cliente
              </span>
            </span>
          </a>
        </li>
        <li className="navi-item">
          <a href="#" className="navi-link">
            <span className="navi-text">
              <span className="label label-xl label-inline label-light-dark">
                Staff
              </span>
            </span>
          </a>
        </li>
        <li className="navi-separator mt-3 opacity-70"></li>
        <li className="navi-footer pt-5 pb-4">
          <a className="btn btn-clean font-weight-bold btn-sm" href="#">
            <i className="ki ki-plus icon-sm"></i>
            Adicionar
          </a>
        </li>
      </ul>
      {/*end::Navigation*/}
    </>
  );
}
