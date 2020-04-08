import styled, {css} from "styled-components";
import * as variable from "../../variable";
import ProgressBar from 'react-bootstrap/ProgressBar'


const ProgressStyle = styled(ProgressBar)`
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

export default ProgressStyle;