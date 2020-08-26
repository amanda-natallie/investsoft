/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";

export function FileTable({ className }) {
  return (
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 py-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Arquivos
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            Arquivos do Cliente
          </span>
        </h3>
        <div className="card-toolbar">
          <a
            href="#"
            className="btn btn-info font-weight-bolder font-size-sm mr-3"
          >
            Novo Arquivo
          </a>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-0 pb-3">
        <div className="tab-content">
          <div className="table-responsive">
            <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
              <thead>
                <tr className="text-left text-uppercase">
                  <th className="pl-7" style={{ minWidth: "250px" }}>
                    <span className="text-dark-75">descrição</span>
                  </th>
                  <th style={{ minWidth: "100px" }}>nome</th>
                  <th style={{ minWidth: "100px" }}>usuário</th>
                  <th style={{ minWidth: "130px" }}>uso</th>
                  <th style={{ minWidth: "80px" }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/001-boy.svg"
                              )}
                            />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                        >
                          Cartão CNPJ
                        </a>
                        <span className="text-muted font-weight-bold d-block">
                          Cartão CNPJ retirado do site da Receita Federal
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      CNPJ.pdf
                    </span>
                    <span className="text-muted font-weight-bold">
                      02/07/2020
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Priscila
                    </span>
                    <span className="text-muted font-weight-bold">Fiscal</span>
                  </td>
                  <td>
                    <img
                      src={toAbsoluteUrl("/media/logos/stars.png")}
                      alt="image"
                      style={{ width: "5.5rem" }}
                    />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Alto uso
                    </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a
                      href="#"
                      className="btn btn-light-success font-weight-bolder font-size-sm"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 py-0">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/018-girl-9.svg"
                              )}
                            />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                        >
                          CPF Socio
                        </a>
                        <span className="text-muted font-weight-bold d-block">
                          CPF do Sr. Paulo Guedes
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      CPF_Guedes.png
                    </span>
                    <span className="text-muted font-weight-bold">
                      05/08/2020
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Aline
                    </span>
                    <span className="text-muted font-weight-bold">
                      Gerencia
                    </span>
                  </td>
                  <td>
                    <img
                      src={toAbsoluteUrl("/media/logos/stars.png")}
                      alt="image"
                      style={{ width: "5.5rem" }}
                    />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Alto uso
                    </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a
                      href="#"
                      className="btn btn-light-success font-weight-bolder font-size-sm"
                    >
                      Download
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pl-0 py-8">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-50 symbol-light mr-4">
                        <span className="symbol-label">
                          <span className="svg-icon h-75 align-self-end">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/avatars/047-girl-25.svg"
                              )}
                            />
                          </span>
                        </span>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                        >
                          CPF Socio
                        </a>
                        <span className="text-muted font-weight-bold d-block">
                          CPF Sr. Flávio Bolsonaro
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      CPF.jpg
                    </span>
                    <span className="text-muted font-weight-bold">
                      01/06/2020
                    </span>
                  </td>
                  <td>
                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                      Suzane
                    </span>
                    <span className="text-muted font-weight-bold">
                      Administração
                    </span>
                  </td>
                  <td>
                    <img
                      src={toAbsoluteUrl("/media/logos/stars.png")}
                      alt="image"
                      style={{ width: "5.5rem" }}
                    />
                    <span className="text-muted font-weight-bold d-block font-size-sm">
                      Alto uso
                    </span>
                  </td>
                  <td className="pr-0 text-right">
                    <a
                      href="#"
                      className="btn btn-light-success font-weight-bolder font-size-sm"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
