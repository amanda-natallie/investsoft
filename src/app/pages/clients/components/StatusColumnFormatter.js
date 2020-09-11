import React from "react";




export function StatusColumnFormatter(cellContent, row) {
  const getClasses = () => {
   switch (row.tipo) {
     case "Ativo":
       return "success"
       
     case "Inativo":
       return "error"
       
     case "Eventual":
       return "info"
       
     case "Doméstico":
       return "warning"
       
   
     default:
       break;
   }
  }
  console.log("row", row)
  const getLabelCssClasses = () => {
    return `label label-lg label-light-${getClasses()} label-inline`;
  };
  return (
    <span className={getLabelCssClasses()}>
      {row.tipo}
    </span>
  );
}
