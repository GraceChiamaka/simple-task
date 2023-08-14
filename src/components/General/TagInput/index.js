import React, { useState, useContext, memo } from 'react';
import { AppContext } from '../../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { TagItem } from '../TagItem';
import { isTagDuplicate } from '../../../utils';
import { Container, ErrorText } from "./style";
import { Input } from '../Input';
import { ColorSelectContainer, ColorSelect } from '../../container';
import { colors } from '../../../utils/color';

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

	// stores value of input on change
	const handleInputChange = (ev) => {
		const { value } = ev.target;
		setTagValue({ ...tagValue, value })
	}

	// create tag
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
				onEdit={() => console.log('clicked')}
				color={color}
				closable
			/>)
		}
	}

	const validateTag = () => {
		if (tagValue.value !== "" && isTagExist) {
			setError(`${tagValue.value} tag already exists`);
			setTagValue({ color: "", value: "" })
		}
		if (tags.length === 5) {
			setError("You cant add more than 5 tags");
		}
		if (tagValue.value !== "" && !isTagDuplicated) {
			createNewTag();
			setTagValue({ color: "", value: "" });
		}
		if (tagValue.value !== "" && isTagDuplicated && !isTagExist) {
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
						bgcolor={item} />
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