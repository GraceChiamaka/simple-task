import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { StyledTag, EditBtn } from "./style.js";
import { Svg } from '../../../assets/images/svg';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';

const { EditWhiteIcon, CloseWhiteIcon } = Svg;


const TagItem = ({ text, id, color = "", onEdit, closable, editable = false }) => {
    const { handleDeleteTag } = useContext(AppContext);
    return (
        <StyledTag bgcolor={color}>
            <span>{text}</span>
            {
                editable && <EditBtn type="button" onClick={() => onEdit(id)}>
                    <img src={EditWhiteIcon} alt="editI icon" />
                </EditBtn>
            }
            {closable && <button
                type="button"
                onClick={(ev) => {
                    ev.stopPropagation();
                    handleDeleteTag(id)
                }}>
                <CloseIcon />
                {/* <img src={CloseWhiteIcon} alt="close icon" />
                 */}
            </button>}
        </StyledTag>
    );
}

export { TagItem };