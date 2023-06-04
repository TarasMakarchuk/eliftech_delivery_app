import { defaultTheme } from 'src/components/layout/header/cart/deliveryMap/mapTheme';

export const defaultMapOptions = {
	zoomControl: false,
	streetViewControl: false,
	mapTypeControl: false,
	fullscreenControl: true,
	styles: defaultTheme,
	keyboardShortcuts: false,
};

export enum MapModesEnum {
	MOVES = 0,
	SET_MARKER = 1,
}

export enum DeliveryMethodEnum {
	WALKING = 'ON FOOT',
	DRIVING = 'BY CAR',
}

export type Coordinates = {
	lat: number;
	lng: number;
};
