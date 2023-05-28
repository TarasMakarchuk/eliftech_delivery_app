import { axiosClassic } from 'src/api/api';
import { IGoods } from 'src/types/goods.interface';

const endpoint = '/goods';

export const GoodService = {
	async getGoods() {
		const { data } = await axiosClassic.get<IGoods[]>(endpoint);
		return data;
	},
};
