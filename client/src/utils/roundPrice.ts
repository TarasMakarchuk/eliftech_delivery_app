export const roundPrice = (price: number): number =>
	Number(Math.round(price * 100) / 100);
