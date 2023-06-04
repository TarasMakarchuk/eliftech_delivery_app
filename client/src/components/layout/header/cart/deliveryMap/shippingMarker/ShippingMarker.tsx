import { FC } from 'react';
import { Marker } from '@react-google-maps/api';
import { Coordinates } from '../mapOptions';

interface Props {
	coordinates: Coordinates;
}

export const ShippingMarker: FC<Props> = ({ coordinates }) => {
	return <Marker position={coordinates} />;
};
