export const isTagDuplicate = (value = "", tags) => {
	const trimmedValue = value.trim();
	return tags.find((item) => item.title.toLowerCase() === trimmedValue.toLowerCase());
}