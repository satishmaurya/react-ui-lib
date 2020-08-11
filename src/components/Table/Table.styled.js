import styled, {css} from "styled-components";
import Table from 'react-bootstrap/Table'


const StyledTable = styled(Table)`
    ${props=>
        props.size==="xs"
        ? css `
            height:.15rem;
        `
        :props.size==="sm"
        ? css `
        height:.30rem;
        `
        :props.size==="md"
        ? css `
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

export default StyledTable;