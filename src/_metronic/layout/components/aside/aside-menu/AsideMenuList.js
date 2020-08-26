/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          <li
              className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
              aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
            </span>
              <span className="menu-text">Dashboard</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

       

          {/* Components */}
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">módulos</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          
          
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-materialbruh", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">Financeiro</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Financeiro</span>
                </span>
                </li>

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google-materialbruh", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link menu-toggle" to="/google-materialbruh">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Atividades</span>
                    <i className="menu-arrow"/>
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow"/>
                    <ul className="menu-subnav">
                      <li
                          className={`menu-item  ${getMenuItemActive(
                              "/google-material/inputs/autocomplete"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link"
                              to="/google-material/inputs/autocomplete">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Cadastrar Atividades</span>
                        </NavLink>
                      </li>
                   
                      <li
                          className={`menu-item ${getMenuItemActive(
                              "/google-material/inputs/buttons"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Ver Atividades</span>
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>
            
                <li
                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                        "/google-material/navigation", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link" to="/google-materialbruh">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Relatórios</span>
                    </NavLink>
                   </li>
              </ul>
            </div>
          </li>
          
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-materialbruh", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">Administrativo</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Administrativo</span>
                </span>
                </li>

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google-materialbruh", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link menu-toggle" to="/google-materialbruh">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Atividades</span>
                    <i className="menu-arrow"/>
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow"/>
                    <ul className="menu-subnav">
                      <li
                          className={`menu-item  ${getMenuItemActive(
                              "/google-material/inputs/autocomplete"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link"
                              to="/google-material/inputs/autocomplete">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Cadastrar Atividades</span>
                        </NavLink>
                      </li>
                   
                      <li
                          className={`menu-item ${getMenuItemActive(
                              "/google-material/inputs/buttons"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Ver Atividades</span>
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>
            
                <li
                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                        "/google-material/navigation", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link" to="/google-materialbruh">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Relatórios</span>
                    </NavLink>
                   </li>
              </ul>
            </div>
          </li>
          
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-materialbruh", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">Contábil</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Contábil</span>
                </span>
                </li>

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google-materialbruh", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link menu-toggle" to="/google-materialbruh">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Atividades</span>
                    <i className="menu-arrow"/>
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow"/>
                    <ul className="menu-subnav">
                      <li
                          className={`menu-item  ${getMenuItemActive(
                              "/google-material/inputs/autocomplete"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link"
                              to="/google-material/inputs/autocomplete">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Cadastrar Atividades</span>
                        </NavLink>
                      </li>
                   
                      <li
                          className={`menu-item ${getMenuItemActive(
                              "/google-material/inputs/buttons"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Ver Atividades</span>
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>
            
                <li
                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                        "/google-material/navigation", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link" to="/google-materialbruh">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Relatórios</span>
                    </NavLink>
                   </li>
              </ul>
            </div>
          </li>
          
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-materialbruh", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">Fiscal</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Fiscal</span>
                </span>
                </li>

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google-material/alert", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link menu-toggle" to="/google">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Atividades</span>
                    <i className="menu-arrow"/>
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow"/>
                    <ul className="menu-subnav">
                      <li
                          className={`menu-item  ${getMenuItemActive(
                              "/google-material/inputs/autocomplete"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link"
                              to="/google-material/inputs/autocomplete">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Cadastrar Atividades</span>
                        </NavLink>
                      </li>
                   
                      <li
                          className={`menu-item ${getMenuItemActive(
                              "/google-material/inputs/buttons"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Ver Atividades</span>
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>
            
                <li
                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                        "/google-material/navigation", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link" to="/google-materialbruh">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Relatórios</span>
                    </NavLink>
                   </li>
              </ul>
            </div>
          </li>
          
          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/google-materialbruh", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
            </span>
              <span className="menu-text">RH</span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">RH</span>
                </span>
                </li>

                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google-materialbruh", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link menu-toggle" to="/google-materialbruh">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Atividades</span>
                    <i className="menu-arrow"/>
                  </NavLink>
                  <div className="menu-submenu ">
                    <i className="menu-arrow"/>
                    <ul className="menu-subnav">
                      <li
                          className={`menu-item  ${getMenuItemActive(
                              "/google-material/inputs/autocomplete"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link"
                              to="/google-material/inputs/autocomplete">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Cadastrar Atividades</span>
                        </NavLink>
                      </li>
                   
                      <li
                          className={`menu-item ${getMenuItemActive(
                              "/google-material/inputs/buttons"
                          )}`}
                          aria-haspopup="true"
                      >
                        <NavLink className="menu-link" to="/google-material/inputs/buttons">
                          <i className="menu-bullet menu-bullet-dot">
                            <span/>
                          </i>
                          <span className="menu-text">Ver Atividades</span>
                        </NavLink>
                      </li>
                     
                    </ul>
                  </div>
                </li>
            
                <li
                    className={`menu-item menu-item-submenu  ${getMenuItemActive(
                        "/google-material/navigation", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                  <NavLink className="menu-link" to="/google-materialbruh">
                      <i className="menu-bullet menu-bullet-dot">
                        <span/>
                      </i>
                      <span className="menu-text">Relatórios</span>
                    </NavLink>
                   </li>
              </ul>
            </div>
          </li>
          
          
        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
