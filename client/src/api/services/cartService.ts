import { axiosClassic } from 'src/api/api';
import { IOrder } from 'src/types/order.interface';

const endpoint = '/orders';

export const CartService = {
	async getOrders() {
		await axiosClassic.get<IOrder[]>(endpoint);
	},

	async placeOrder(data: any) {
		await axiosClassic.post<IOrder>(endpoint, data);
	},
};
