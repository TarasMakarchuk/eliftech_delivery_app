import { IGoods } from 'src/types/goods.interface';

export interface IOrder {
	id: number;
	fullName: string;
	email: string;
	phone: string;
	shippingAddress: string;
	total: number;
	items: IGoods[];
	createdAt: Date;
}
