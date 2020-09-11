/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };

  return (
    <div
      id="kt_header_menu"
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/dashboard"
          )}`}
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/pagina-um"
          )}`}
        >
          <NavLink className="menu-link" to="/cadastrar-clientes">
            <span className="menu-text">Cadastro de Cliente</span>
          </NavLink>
        </li>
        <li
          className={`menu-item menu-item-rel ${getMenuItemActive(
            "/pagina-dois"
          )}`}
        >
          <NavLink className="menu-link" to="/gerenciar-clientes">
            <span className="menu-text">Consulta de Clientes</span>
          </NavLink>
        </li>
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
