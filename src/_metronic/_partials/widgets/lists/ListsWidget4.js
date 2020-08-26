/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { Dropdown } from "react-bootstrap";
import {
  DropdownCustomToggler,
  DropdownMenu1,
  DropdownMenu2,
} from "../../dropdowns";

export function ListsWidget4({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Agenda Online
          </h3>
          <div className="card-toolbar">
            <Dropdown className="dropdown-inline" drop="down" alignRight>
              <Dropdown.Toggle
                id="dropdown-toggle-top2"
                variant="transparent"
                className="btn btn-light btn-sm font-size-sm font-weight-bolder dropdown-toggle text-dark-75"
              >
                Adicionar Atividade
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <DropdownMenu2 />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-success align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" name="" onChange={() => {}} value="1" />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Ligar para CredPago
              </a>
              <span className="text-muted font-weight-bold">Em 2 Days</span>
            </div>
            <ItemDropdown item="" />
          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-primary align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-primary checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" onChange={() => {}} value="1" />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Fazer relatório para Aline
              </a>
              <span className="text-muted font-weight-bold">Em 3 Days</span>
            </div>
            <ItemDropdown item="" />
          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-warning align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-warning checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" value="1" onChange={() => {}} />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-size-sm font-weight-bold font-size-lg mb-1"
              >
                Enviar e-mail para clientes sobre mudança de imposto
              </a>
              <span className="text-muted font-weight-bold">Em 5 Days</span>
            </div>
            <ItemDropdown item="" />
          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-info align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-info checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" value="1" onChange={() => {}} />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Gerar certidão negativa de Cliente 2
              </a>
              <span className="text-muted font-weight-bold">Amanhã</span>
            </div>
            <ItemDropdown item="" />
          </div>

          <div className="d-flex align-items-center mb-2">
            <span className="bullet bullet-bar bg-danger align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-danger checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" value="1" onChange={() => {}} />
              <span></span>
            </label>
            <ItemDropdown item="" />
          </div>
        </div>
      </div>
    </>
  );
}

const ItemDropdown = ({ item }) => {
  return (
    <>
      <Dropdown className="dropdown-inline" alignRight>
        <Dropdown.Toggle
          variant="transparent"
          id="dropdown-toggle-top"
          className="btn btn-hover-light-primary btn-sm btn-icon"
          as={DropdownCustomToggler}
        >
          <i className="ki ki-bold-more-hor" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <DropdownMenu1 />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
