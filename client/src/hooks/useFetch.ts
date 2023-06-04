import { useEffect } from 'react';

export const useFetch = (
	getData: Function,
	addData: Function,
	setLoading: Function,
) => {
	useEffect(() => {
		const fetchData = async () => {
			setLoading({ isLoading: true });
			try {
				const data = await getData();
				if (data) {
					addData({ items: data });
				}
			} catch (e) {
				console.log(e);
			}
			setLoading({ isLoading: false });
		};
		fetchData();
	}, []);
};
