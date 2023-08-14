import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { StyledTag } from "./style.js";
import { Svg } from '../../../assets/images/svg';

const { CloseIcon } = Svg;


const TagItem = ({ text, id, color = "", onEdit, closable }) => {
    const { handleDeleteTag } = useContext(AppContext);
    return (
        <StyledTag bgcolor={color} onClick={() => onEdit(id)}>
            <span>{text}</span>
            {closable && <button
                type="button"
                onClick={(ev) => {
                    ev.stopPropagation();
                    handleDeleteTag(id)
                }}>
                <img src={CloseIcon} alt="close icon" />
            </button>}
        </StyledTag>
    );
}

export { TagItem };