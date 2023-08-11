import React, { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { TagItem } from '../TagItem';
import "./style.css";


const colors = [
	"#98B9F5",
	"#69F58A",
	"#E7F567",
	"#F5CD76",
	"#F5737E",
	"#E9F01D"
];

const getRandomColor = () => {
	const colorIndex = Math.floor(Math.random() * colors.length);
	return colors[colorIndex];
}

const TagInput = () => {
	const { tags, addTag } = useContext(AppContext);
	const [tagValue, setTagValue] = useState('');

	const [error, setError] = useState("");


	const isTagDuplicate = (value) => {
		const trimmedValue = value.trim();
		const duplicateTag = tags.find((item) => item.title.toLowerCase() === trimmedValue.toLowerCase());
		return !!(duplicateTag);
	}

	const handleNewtag = (ev) => {

		if (ev.key === 'Enter' || ev.keyCode === 13) {
			ev.preventDefault();

			if (isTagDuplicate(tagValue)) {
				setError(`${tagValue} tag already exists`);
				setTagValue("")
			}
			if (tags.length === 5) {
				setError("You cant add more than 5 tags");
			}

			if (tagValue !== "" && !isTagDuplicate(tagValue)) {
				addTag({
					title: tagValue.trim(),
					id: uuidv4(),
					color: getRandomColor()
				});
				setTagValue("");
				if (error !== "") setError("")
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
			/>)
		}
	}

	return (
		<>
			<div className='tag-container'>
				{renderTags()}

				<input
					placeholder='Enter a tag...'
					onChange={({ target: { value } }) => setTagValue(value)}
					value={tagValue}
					onKeyDown={handleNewtag}
					disabled={tags.length === 5}
				/>

			</div>
			<p className='error-text'>{error}</p>
		</>

	);
}

export { TagInput };