export const formatToDate = (date: Date): string => {
	const fullDate = new Date(date);
	const month =
		fullDate.getMonth() + 1 <= 9
			? `0${fullDate.getMonth() + 1}`
			: `${fullDate.getMonth() + 1}`;

	return `${fullDate.getDate()}/${month}/${fullDate.getFullYear()} ${fullDate.getHours()}:${fullDate.getMinutes()}`;
};
