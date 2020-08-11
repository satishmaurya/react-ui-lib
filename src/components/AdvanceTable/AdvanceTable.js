import React from "react";
import { StyledAdvanceTable } from "./AdvanceTable.styled";

    // const rowData = true ? page : rows;
const AdvanceTable = (props) => {
  const { children, column, data} = props;
  return (
    <StyledAdvanceTable column={column} data={data}>
    
        {children}

    </StyledAdvanceTable>
  );
}

export default AdvanceTable;



