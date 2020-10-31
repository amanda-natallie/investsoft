/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";

export function AdvanceTablesWidget2({ className }) {
  

  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Atividades em Andamento
          </span>
        </h3>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th className="p-0" style={{ width: "50px" }} />
                <th className="p-0" style={{ minWidth: "200px" }} />
                <th className="p-0" style={{ minWidth: "100px" }} />
                <th className="p-0" style={{ minWidth: "125px" }} />
                <th className="p-0" style={{ minWidth: "110px" }} />
                <th className="p-0" style={{ minWidth: "150px" }} />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light mr-1">
                    <span className="symbol-label">
                      <SVG
                        src={toAbsoluteUrl("/media/svg/misc/006-plurk.svg")}
                        className="h-50 align-self-center"
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Cadastro de Cliente
                  </a>
                </td>
                <td className="text-right">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    CredPago
                  </span>
                  <span className="text-muted font-weight-bold">
                    Curitiba, PR
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-muted font-weight-500">
                    Administrativo
                  </span>
                </td>
                <td className="text-right">
                  <span className="label label-lg label-light-primary label-inline">
                    Aguardando Aprovação
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <SVG
                        className="h-50 align-self-center"
                        src={toAbsoluteUrl("/media/svg/misc/015-telegram.svg")}
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Nova Obra
                  </a>
                </td>
                <td className="text-right">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Cliente 002
                  </span>
                  <span className="text-muted font-weight-bold">
                    Araucária, PR
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-muted font-weight-500">
                    Administrativo
                  </span>
                </td>
                <td className="text-right">
                  <span className="label label-lg label-light-warning label-inline">
                    Enviado a Receita
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <SVG
                        className="h-50 align-self-center"
                        src={toAbsoluteUrl("/media/svg/misc/003-puzzle.svg")}
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Protocolo
                  </a>
                </td>
                <td className="text-right">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Cliente 004
                  </span>
                  <span className="text-muted font-weight-bold">
                    Curitiba, PR
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-muted font-weight-500">
                    Administrativo
                  </span>
                </td>
                <td className="text-right">
                  <span className="label label-lg label-light-success label-inline">
                    Finalizado
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <SVG
                        className="h-50 align-self-center"
                        src={toAbsoluteUrl("/media/svg/misc/005-bebo.svg")}
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    Certificado Digital
                  </a>
                </td>
                <td className="text-right">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Cliente 003
                  </span>
                  <span className="text-muted font-weight-bold">
                    Joinville, SC
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-muted font-weight-bold">
                    Recursos Humanos
                  </span>
                </td>
                <td className="text-right">
                  <span className="label label-lg label-light-danger label-inline">
                    Cancelado
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
              <tr>
                <td className="pl-0 py-4">
                  <div className="symbol symbol-50 symbol-light">
                    <span className="symbol-label">
                      <SVG
                        className="h-50 align-self-center"
                        src={toAbsoluteUrl(
                          "/media/svg/misc/014-kickstarter.svg"
                        )}
                      ></SVG>
                    </span>
                  </div>
                </td>
                <td className="pl-0">
                  <a
                    href="#"
                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                  >
                    CPOM
                  </a>
                  {/* <div>
                    <span className="font-weight-bolder">Email:</span>{" "}
                    <a
                      className="text-muted font-weight-bold text-hover-primary"
                      href="#"
                    >
                      ktr@demo.com
                    </a>
                  </div> */}
                </td>
                <td className="text-right">
                  <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                    Cliente 005
                  </span>
                  <span className="text-muted font-weight-bold">
                    São Paulo, SP
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-muted font-weight-500">
                    Administrativo
                  </span>
                </td>
                <td className="text-right">
                  <span className="label label-lg label-light-warning label-inline">
                    Em andamento
                  </span>
                </td>
                <td className="text-right pr-0">
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Settings-1.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm mx-3">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Write.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                  <a href="#" className="btn btn-icon btn-light btn-sm">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/General/Trash.svg"
                        )}
                      ></SVG>
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
