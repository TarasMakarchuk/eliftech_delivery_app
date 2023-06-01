import { axiosClassic } from 'src/api/api';
import { IOrder } from 'src/types/order.interface';

type HistoryFormData = {
	email: string;
	phone: string;
};

const endpoint = '/orders';

export const CartService = {
	async getOrders() {
		const { data } = await axiosClassic.get<IOrder[]>(endpoint);

		return data;
	},

	async getOrdersByEmailAndPhone(formData: HistoryFormData) {
		const { data } = await axiosClassic.get<IOrder[]>(`${endpoint}/search`, {
			params: {
				email: formData.email,
				phone: formData.phone,
			},
		});

		return data;
	},

	async placeOrder(data: any) {
		await axiosClassic.post<IOrder>(endpoint, data);
	},
};
