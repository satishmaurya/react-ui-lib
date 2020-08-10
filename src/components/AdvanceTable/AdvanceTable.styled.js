import styled, {css} from "styled-components";
import Table from 'react-bootstrap/Table'


export const StyledAdvanceTable = styled(Table)`
    ${props=>
        props.size==="xs"
        ? css `
            ${'' /* height:.15rem; */}
            background: red;
        `
        :props.size==="sm"
        ? css `
        height:.30rem;
        `
        :props.size==="md"
        ? css `
        background: red !important;
        height:.50rem;
        `
        :props.size==="lg"
        ? css `
        height:2rem;
        `
        :css `
        height:1rem;
        `
    }
`
export const StyledTableSuffix = styled.span`
  color: #000;
  margin-left: 4px;
  font-weight: bold;
`;

export const StyledTablePrefix = styled.span`
  margin-right: 4px;
`;