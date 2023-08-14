import { useState, useCallback, } from "react";

const useTags = () => {
	const [tagsContainer, setTagsContainer] = useState([]);
	const [tags, setTags] = useState([]);


	const addTagToContainer = useCallback((value) => {
		setTagsContainer([...tagsContainer, value]);
	}, [tagsContainer])

	const addTag = useCallback((value) => {
		setTags([...tags, value]);
	}, [tags]);

	return {
		addTag,
		addTagToContainer
	};
}


export { useTags };