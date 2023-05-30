import { axiosClassic } from 'src/api/api';
import { IShop } from 'src/types/shop.interface';

const endpoint = '/shops';

export const ShopService = {
	async getShops() {
		const { data } = await axiosClassic.get<IShop[]>(endpoint);
		return data;
	},
};
