import React, { useState, useContext } from 'react';
import { TagItem } from '../TagItem';
import { AppContext } from '../../../context/AppContext';
import {v4 as uuidv4} from 'uuid'
import "./style.css";

const colors = [
    "#98B9F5",
    "#69F58A",
    "#E7F567",
    "#F5CD76",
    "#F5737E"
]

const TagInput = () => {
    const { tags, addTag } = useContext(AppContext);
    const [tagValue, setTagValue] = useState('');


    const handleCreateTag = (ev) => {
        if (ev.key === 'Enter' || ev.keyCode === 13) {
            ev.preventDefault();
            if (tagValue !== "") {
                addTag({
                    title: tagValue,
                    id: uuidv4(),
                    color: getRandomColor()
                });
                setTagValue("");
            }
        
        }
    }

    const renderTags = () => {
        if (tags.length > 0) {
            return tags.map(({ title, id, color }) => <TagItem
                key={id}
                id={id}
                text={title}
                color={color}
                closable
            />
            )
        }
    }
   
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    return ( 
        <div className="tag-input-container">
            {renderTags()}
            <input
                placeholder='Type to create tag..'
                id="tagValue"
                onChange={({ target: { value } }) => setTagValue(value)}
                value={tagValue}
                onKeyDown={handleCreateTag}
            />
        </div>
     );
}
 
export  {TagInput};