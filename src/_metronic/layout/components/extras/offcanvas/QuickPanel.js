/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

export function QuickPanel() {
  const [selectedTab, setSelectedTab] = useState("AuditLogs");

  const setTab = (_tabName) => {
    setSelectedTab(_tabName);
  };

  return (
    <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
      <Tab.Container defaultActiveKey={selectedTab}>
        {/*begin::Header*/}
        <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
          <Nav
            onSelect={setTab}
            as="ul"
            role="tablist"
            className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
          >
            <Nav.Item className="nav-item" as="li">
              <Nav.Link eventKey="Notifications" className={`nav-link active`}>
                Notificações
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div
            className="offcanvas-close mt-n1 pr-5"
            style={{ position: "absolute", top: "15px", right: "10px" }}
          >
            <a
              href="#"
              className="btn btn-xs btn-icon btn-light btn-hover-primary"
              id="kt_quick_panel_close"
            >
              <i className="ki ki-close icon-xs text-muted"></i>
            </a>
          </div>
        </div>
        {/*end::Header*/}

        {/*begin::Content*/}
        <div className="offcanvas-content px-10">
          <div className="tab-content">
            <div
              id="kt_quick_panel_notifications"
              role="tabpanel"
              className={`tab-pane fade pt-2 pr-5 mr-n5 scroll ps active show`}
            >
              <div className="navi navi-icon-circle navi-spacer-x-0">
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-bell text-success icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        5 novos usuários criaram relatórios
                      </div>
                      <div className="text-muted">
                        Reports baseados em vendas
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-box text-danger icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold  font-size-lg">
                        2 novos itens criados
                      </div>
                      <div className="text-muted">por Grog John</div>
                    </div>
                  </div>
                </a>

                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-psd text-primary icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold  font-size-lg">
                        79 novos PDF's gerados
                      </div>
                      <div className="text-muted">
                        Reports baseados em vendas
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-supermarket text-warning icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold  font-size-lg">
                        R$2900 em produtos vendidos
                      </div>
                      <div className="text-muted">Total dwe 234 itens</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end::Content*/}
      </Tab.Container>
    </div>
  );
}
