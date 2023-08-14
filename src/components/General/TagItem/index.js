import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { StyledTag } from "./style.js";
import { Svg } from '../../../assets/images/svg';

const { CloseIcon } = Svg;


const TagItem = ({ text, id, color = "", closable }) => {
    const { handleDeleteTag } = useContext(AppContext);

    const TagStyle = {
        background: color !== "" ? color : "#f4f4f4"
    }

    return (
        <StyledTag className='tag-item' style={TagStyle}>
            <span>{text}</span>
            {closable && <button type="button" onClick={() => handleDeleteTag(id)}><img src={CloseIcon} alt="close icon" /></button>}
        </StyledTag>
    );
}

export { TagItem };