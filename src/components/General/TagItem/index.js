import React, {useContext} from 'react';
import { AppContext } from '../../../context/AppContext';
import "./style.css";
import { Svg } from '../../assets/svg';

const { CloseIcon } = Svg;


const TagItem = ({ text, id, color="", closable }) => {
    const { handleDeleteTag } = useContext(AppContext);
    const TagStyle = {
        background: color !== ""? color: "#f4f4f4"
    }

    return ( 
        <div className='tag-item' style={TagStyle}>
            <span>{text}</span>
           {closable&& <button type="button" onClick={() => handleDeleteTag(id)}><img src={CloseIcon} alt="close icon" /></button>}
        </div>
     );
}
 
export  {TagItem};