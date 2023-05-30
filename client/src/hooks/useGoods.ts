import { useTypedSelector } from './useTypedSelector';

export const useGoods = () => {
	const goods = useTypedSelector(state => state.goods);

	return { goods };
};
