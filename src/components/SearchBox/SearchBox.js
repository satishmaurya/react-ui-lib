import React from "react";
import StyledSearchBox from './SearchBox.styled';
import Icon from '../Icon/Icon';

const SearchBox = (props) =>{
    const { placeholder, size, bg, borderRadius, value,id, name, border, onFocus, icon, disabled } = props;
    return(
        <StyledSearchBox className="abx" borderRadius={borderRadius} bg={bg} border={border} size={size}
         onFocus={onFocus} disabled={disabled}>
            <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
                {icon && <Icon size={12} icon={'search'} /> }
        </StyledSearchBox>
    );
}

export default SearchBox;