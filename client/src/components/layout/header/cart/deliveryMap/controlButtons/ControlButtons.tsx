import { FC } from 'react';

type Props = {
	toggleMode: () => void;
	handleClickDeliveryMethod: any;
	calculateRoute: () => void;
	clearRoute: () => void;
	mapToCenter: () => void;
	DeliveryMethodEnum: {
		WALKING: string;
		DRIVING: string;
	};
	pressedButtonStyle: {
		backgroundColor: string;
		border: string;
	};
	isSelectedShippingAddressMarker: boolean;
};

export const ControlButtons: FC<Props> = ({
	toggleMode,
	handleClickDeliveryMethod,
	calculateRoute,
	clearRoute,
	mapToCenter,
	DeliveryMethodEnum,
	pressedButtonStyle,
	isSelectedShippingAddressMarker,
}) => {
	const styledButton = isSelectedShippingAddressMarker
		? pressedButtonStyle
		: null;
	return (
		<>
			<button
				title='Add shipping address marker'
				aria-label='center back'
				onClick={toggleMode}
				style={{ ...styledButton }}
			>
				📍Add delivery address marker
			</button>
			<button
				title='Shipping method'
				aria-label='center back'
				onClick={() => handleClickDeliveryMethod(DeliveryMethodEnum.WALKING)}
			>
				🚶
			</button>
			<button
				title='Shipping method'
				aria-label='center back'
				onClick={() => handleClickDeliveryMethod(DeliveryMethodEnum.DRIVING)}
			>
				🚗
			</button>
			<button
				title='Сalculate delivery time'
				aria-label='center back'
				onClick={calculateRoute}
			>
				Go!
			</button>
			<button title='Center' aria-label='center back' onClick={mapToCenter}>
				🎯
			</button>
			<button title='Clear' aria-label='center back' onClick={clearRoute}>
				❌
			</button>
		</>
	);
};
