import React from "react";
import StyledSearchBox from './SearchBox.styled';

const SearchBox = (props) =>{
    const { placeholder, size, bg, borderRadius, value,id, name, border, onFocus } = props;
    return(
        <StyledSearchBox borderRadius={borderRadius} bg={bg} border={border} size={size} onFocus={onFocus}>
            <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
        </StyledSearchBox>
    );
}

export default SearchBox;