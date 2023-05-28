import { IGood } from 'src/types/good.interface';

export interface IOrder {
	id: number;
	fullName: string;
	email: string;
	phone: string;
	shippingAddress: string;
	total: number;
	items: IGood[];
}
