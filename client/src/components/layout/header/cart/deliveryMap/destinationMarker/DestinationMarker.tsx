import { FC } from 'react';
import { Marker } from '@react-google-maps/api';
import { imageApiPath } from 'src/api/consts/apiPaths';

interface Props {
	coordinates: { lat: number; lng: number };
	icon: string;
}

export const DestinationMarker: FC<Props> = ({ coordinates, icon }) => {
	return <Marker position={coordinates} icon={imageApiPath + icon} />;
};
