import React from "react";

export function ActivityStatusColumnFormatter(row) {
  const getClasses = () => {
    switch (row.status) {
      case "Aguardando Aprovação":
        return "success";

      case "Em andamento":
        return "warning";

      case "Finalizado":
        return "info";

      case "Cancelado":
        return "error";

      default:
        break;
    }
  }
  const getLabelCssClasses = () => {
    return `label label-lg label-light-${getClasses()} label-inline`;
  }
  return <span className={getLabelCssClasses()}>{row.status}</span>;
}
