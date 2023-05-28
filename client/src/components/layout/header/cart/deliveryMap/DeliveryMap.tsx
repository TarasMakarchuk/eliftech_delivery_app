import { FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './deliveryMap.css';

export const DeliveryMap: FC = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
	});

	if (!isLoaded) return <div>Loading...</div>;
	return (
		<GoogleMap
			zoom={10}
			center={{ lat: 49.444431, lng: 32.059769 }}
			mapContainerClassName='map-card'
		></GoogleMap>
	);
};
