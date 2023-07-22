export const capitalizeFirstLetter = (letter = 'Default') => {
	const letterToArray = letter.split('');
	const firstLetter = letterToArray[0].toUpperCase();

	letterToArray[0] = firstLetter;
	return letterToArray;
};
