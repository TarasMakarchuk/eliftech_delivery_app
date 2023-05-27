import { useTypedSelector } from './useTypedSelector';

export const useShop = () => {
	const shop = useTypedSelector(state => state.shop);

	return { shop };
};
