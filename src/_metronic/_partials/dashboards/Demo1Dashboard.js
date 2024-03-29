import React from "react";
import { toAbsoluteUrl } from "../../_helpers";
import { MixedWidget14, AdvanceTablesWidget2, ListsWidget4 } from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <div className="card-stretch gutter-b">
            <img src={toAbsoluteUrl("/media/1.png")} alt="yu" />
          </div>
        </div>
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget14 className="card-stretch gutter-b" />
        </div>

        <div className="col-lg-6 col-xxl-4">
          <ListsWidget4 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-12 order-2 order-xxl-1">
          <AdvanceTablesWidget2 className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
}
