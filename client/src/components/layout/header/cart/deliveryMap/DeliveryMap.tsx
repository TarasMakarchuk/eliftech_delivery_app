import { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
	GoogleMap,
	Marker,
	useJsApiLoader,
	Autocomplete,
	DirectionsRenderer,
} from '@react-google-maps/api';
import { useShop } from 'src/hooks/useShop';
import { ShippingMarker } from 'src/components/layout/header/cart/deliveryMap/shippingMarker/ShippingMarker';
import { DestinationMarker } from 'src/components/layout/header/cart/deliveryMap/destinationMarker/DestinationMarker';
import { ControlButtons } from 'src/components/layout/header/cart/deliveryMap/controlButtons/ControlButtons';
import {
	Coordinates,
	defaultMapOptions,
	DeliveryMethodEnum,
	MapModesEnum,
} from 'src/components/layout/header/cart/deliveryMap/mapOptions';
import { shopsAddresses } from 'src/components/layout/header/cart/deliveryMap/shopsAddress';
import { IShop } from 'src/types/shop.interface';
import './deliveryMap.css';

export const DeliveryMap: FC = () => {
	const [libraries] = useState<any>(['places']);
	const [map, setMap] = useState(/** @type google.maps.Map */ null);
	const [center] = useState<Coordinates>({ lat: 49.444431, lng: 32.059769 });

	const { shop } = useShop();

	const [mode, setMode] = useState<number>(MapModesEnum.MOVES);
	const [directionsResponse, setDirectionsResponse] = useState(null);
	const [distance, setDistance] = useState<string>('');
	const [duration, setDuration] = useState<string>('');
	const [shippingMarkerCoordinates, setShippingMarkerCoordinates] =
		useState<any>(null);
	const [currentShopData, setCurrentShopData] = useState(shopsAddresses[2]);
	const [shippingAddress, setShippingAddress] = useState<string>('');
	const [isSelectedShippingAddressMarker, setIsSelectedShippingAddressMarker] =
		useState(false);

	const [deliveryMethod, setDeliveryMethod] = useState<string>('DRIVING');

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
		libraries,
	});

	/** @type React.MutableRefObject<HTMLInputElement> */
	const deliveryRef = useRef<any>();
	/** @type React.MutableRefObject<HTMLInputElement> */
	const destiantionRef = useRef<any>({
		value: 'вулиця Хрещатик, 8, Cherkasy, Cherkasy Oblast, Ukraine',
	});

	const mapRef = useRef(undefined);

	const onLoad = useCallback((map: any) => {
		mapRef.current = map;
		setMap(map);
	}, []);

	const onUnmount = useCallback(() => {
		mapRef.current = undefined;
	}, []);

	const currentShop: IShop[] = shop.items.filter(item => {
		if (shop.items.length) {
			if (item.id === shop.currentShopId) {
				return item.name || '';
			}
		}
	});

	useEffect(() => {
		shopsAddresses.filter(item => {
			if (shop.items.length) {
				if (item.name === currentShop[0].name) {
					setCurrentShopData(item);
				}
			}
		});
	}, []);

	async function calculateRoute(): Promise<void | null> {
		if (
			deliveryRef.current.value === '' ||
			destiantionRef.current.value === ''
		) {
			return;
		}

		const directionsService = new google.maps.DirectionsService();

		let currentTravelMode;
		deliveryMethod === DeliveryMethodEnum.WALKING
			? (currentTravelMode = await google.maps.TravelMode.WALKING)
			: (currentTravelMode = await google.maps.TravelMode.DRIVING);

		const results: any = await directionsService.route({
			origin: deliveryRef.current.value,
			destination: destiantionRef.current.value,
			travelMode: currentTravelMode,
		});

		setDirectionsResponse(results);
		setDistance(results.routes[0].legs[0].distance.text);
		setDuration(results.routes[0].legs[0].duration.text);
	}

	const onMarkerAdd = (coordinates: any): void => {
		setShippingMarkerCoordinates(coordinates);
	};

	const handleClick = useCallback(
		(location: any) => {
			if (mode === MapModesEnum.SET_MARKER) {
				const lat = location.latLng.lat();
				const lng = location.latLng.lng();
				onMarkerAdd({ lat, lng });
			}
		},
		[mode],
	);

	const handleClickDeliveryMethod = (deliveryMethod: string): void => {
		setDeliveryMethod(deliveryMethod);
	};

	const toggleMode = useCallback(() => {
		mode === MapModesEnum.MOVES
			? setMode(MapModesEnum.SET_MARKER)
			: setMode(MapModesEnum.MOVES);
		setIsSelectedShippingAddressMarker(!isSelectedShippingAddressMarker);
		isSelectedShippingAddressMarker && clearRoute();
	}, [mode]);

	function clearRoute(): void {
		setDirectionsResponse(null);
		setShippingMarkerCoordinates(null);
		setDeliveryMethod(DeliveryMethodEnum.DRIVING);
		setShippingAddress('');
		setDistance('');
		setDuration('');
		deliveryRef.current.value = '';
		destiantionRef.current.value = '';
	}

	if (isLoaded) {
		const geocoder = new google.maps.Geocoder();

		if (shippingMarkerCoordinates) {
			geocoder
				.geocode({
					location: shippingMarkerCoordinates,
				})
				.then(response => {
					if (response.results[0]) {
						setShippingAddress(response.results[0].formatted_address);
					}
				})
				.catch(e => console.log(e));
		}
	}

	const handleShippingInputChange = (event: any): void => {
		if (event) {
			setShippingAddress(event.target.value);
		}
	};

	const mapToCenter = (): void => {
		// @ts-ignore
		map.panTo(center);
		// @ts-ignore
		map.setZoom(12);
	};

	const pressedButtonStyle = {
		backgroundColor: '#e8e8e8',
		border: '1px solid lightgray',
	};

	if (!isLoaded) return <div>Loading...</div>;
	return (
		<>
			<GoogleMap
				center={center}
				zoom={12}
				mapContainerStyle={{ width: '100%', height: '100%' }}
				options={defaultMapOptions}
				onLoad={onLoad}
				onUnmount={onUnmount}
				mapContainerClassName='map-card'
				onClick={handleClick}
			>
				<Marker
					position={center}
					label={{
						text: 'Down Town',
						fontSize: '20px',
						fontWeight: 'bold',
						color: 'black',
					}}
				/>
				<ShippingMarker coordinates={shippingMarkerCoordinates} />
				<DestinationMarker
					coordinates={currentShopData.coordinates}
					icon={currentShopData.icon}
				/>
				{directionsResponse && (
					<DirectionsRenderer
						directions={directionsResponse}
						options={{ suppressMarkers: true }}
					/>
				)}
			</GoogleMap>
			<div className='map-form-wrapper'>
				<div className='map-form-container'>
					<div className='inputs-group'>
						<div>
							<Autocomplete>
								<input
									disabled={isSelectedShippingAddressMarker}
									className='destination-input'
									type='text'
									placeholder='Shipping address'
									ref={deliveryRef}
									value={shippingAddress}
									onChange={handleShippingInputChange}
								/>
							</Autocomplete>
						</div>
						<div>
							<input
								style={{ display: 'none' }}
								className='destination-input'
								type='text'
								placeholder='Destination'
								ref={destiantionRef}
								value={currentShopData.address}
								onChange={() => {}}
							/>
						</div>
					</div>
					<div className='buttons-group'>
						<ControlButtons
							toggleMode={toggleMode}
							handleClickDeliveryMethod={handleClickDeliveryMethod}
							calculateRoute={calculateRoute}
							pressedButtonStyle={pressedButtonStyle}
							isSelectedShippingAddressMarker={isSelectedShippingAddressMarker}
							DeliveryMethodEnum={DeliveryMethodEnum}
							clearRoute={clearRoute}
							mapToCenter={mapToCenter}
						/>
					</div>
				</div>
				<div className='distance-information-container'>
					<p>Distance: {distance} </p>
					<p>Delivery method: {String(deliveryMethod).toLowerCase()}</p>
					<p>Duration: {duration} </p>
				</div>
			</div>
		</>
	);
};
