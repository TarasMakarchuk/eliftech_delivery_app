import { axiosClassic } from 'src/api/api';
import { IGood } from 'src/types/good.interface';

const endpoint = '/goods';

export const GoodService = {
	async getGoods() {
		const { data } = await axiosClassic.get<IGood[]>(endpoint);
		return data;
	},
};
