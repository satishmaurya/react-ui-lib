import React from "react";
import StyledSearchBox from './SearchBox.styled';
import {Icon} from '../Icon';
import {Box} from '../Box';


const SearchBox = (props) =>{
  
    const { placeholder, size, bg, borderRadius, value,id, name, border, icon, onFocus,
    onClick, isError, disabled, hint, width, className, searchIcon } = props;
  const iconStyle = {
    position:"absolute",
    left:"8px",
    top: '8px',
  } 
    return(
        <StyledSearchBox className={className} borderRadius={borderRadius} bg={bg} border={border} size={size}
         onFocus={onFocus} onClick={onClick} isError={isError} disabled={disabled} width={width}>
           {searchIcon ?
           (
             <Box className="icon-search">
              <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
               <Icon style={{...iconStyle}} icon={icon} size={size}></Icon> 
               {isError && <p>{hint}</p> }
             </Box>
           ): (
             <>
            <input type="text" placeholder={placeholder} id={id}
                value={value} name={name} />
                {isError && <p>{hint}</p> }
                </>
           )

           }
        </StyledSearchBox>
    );
}

export default SearchBox;