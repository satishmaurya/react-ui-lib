import React from "react";
import StyledSearchBox from './SearchBox.styled';
import {Icon} from '../Icon';


const SearchBox = (props) =>{
  
    const { placeholder, size, bg, borderRadius, value,id, name, border,icon, onFocus } = props;
   
    return(
        <StyledSearchBox borderRadius={borderRadius} bg={bg} border={border} size={size} onFocus={onFocus}>
            <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
              <Icon style={{position:"absolute", right:"20px"}} icon={icon}></Icon>
        </StyledSearchBox>
    );
}

export default SearchBox;