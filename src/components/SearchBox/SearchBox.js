import React from "react";
// import {Styled SearchBox,StyledForm} from "./SearchBox.styled";
import StyledSearchBox from './SearchBox.styled';

const SearchBox = (props) =>{
    const { placeholder,children, size, bg, borderRadius, value,id, name } = props;
    return(
//             // <StyledForm inline>
//                 <StyledSearchBox borderRadius={borderRadius} bg={bg} 
//                       {...props} >
// <input type="text" placeholder="Search.." />
//                 {/* {children} */}
//                 </StyledSearchBox>
            // </StyledForm>
            <StyledSearchBox>
                <input type="text" placeholder={placeholder} id={id}
                    value={value} name={name} borderRadius={borderRadius} />
            </StyledSearchBox>
    );
}

export default SearchBox;