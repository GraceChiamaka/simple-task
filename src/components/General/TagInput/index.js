import React, { useState, useContext, memo } from 'react';
import { AppContext } from '../../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { TagItem } from '../TagItem';
import { isTagDuplicate } from '../../../utils';
import { Container, ErrorText, ColorSelectContainer, ColorSelect } from "./style";
import { Input } from '../Input';


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

const TagInput = memo(() => {
	const { tags, addTagToTask, tagsContainer, addTagToContainer } = useContext(AppContext);
	const [tagValue, setTagValue] = useState({
		color: "",
		value: ""
	});
	const [error, setError] = useState("");

	const isTagExist = isTagDuplicate(tagValue.value, tags); // check if tag exist in a task
	const isTagDuplicated = isTagDuplicate(tagValue.value, tagsContainer); // check if tag exist in the tagList

	const createNewTag = () => {
		const newTag = {
			title: tagValue.value.trim(),
			id: uuidv4(),
			color: tagValue.color === "" ? getRandomColor() : tagValue.color
		}
		addTagToContainer(newTag);
		addTagToTask(newTag);
	}
	const handleInputChange = (ev) => {
		const { value } = ev.target;
		setTagValue({ ...tagValue, value })
	}

	const handleInputTag = (ev) => {
		if (ev.key === 'Enter' || ev.keyCode === 13) {
			ev.preventDefault();
			validateTag();
		}
	}

	const renderTags = (tags) => {
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

	const validateTag = () => {
		if (isTagExist) {
			setError(`${tagValue.value} tag already exists`);
			setTagValue({ color: "", value: "" })
		}
		if (tags.length === 5) {
			setError("You cant add more than 5 tags");
		}
		if (!isTagDuplicated) {
			createNewTag();
			setTagValue({ color: "", value: "" });
		}
		if (isTagDuplicated && !isTagExist) {
			addTagToTask(isTagDuplicated)
		}
		if (error !== "") setError("")
	}

	return (
		<>
			<Input
				placeholder='Enter a tag...'
				onChange={handleInputChange}
				value={tagValue.value}
				onKeyDown={handleInputTag}
				disabled={tags.length === 5}
			/>
			<ColorSelectContainer>
				{colors.map(item => (
					<ColorSelect
						key={item}
						onClick={() => setTagValue({ ...tagValue, color: item })}
						active={tagValue.color === item}
						bgColor={item} />
				)
				)}
			</ColorSelectContainer>

			{
				tags.length > 0 && <Container>{renderTags(tags)}</Container>
			}
			<ErrorText>{error}</ErrorText>
		</>

	);
})

export { TagInput };