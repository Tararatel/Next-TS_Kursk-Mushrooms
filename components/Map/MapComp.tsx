import { MapProps } from './Map.props';
import styles from './Map.module.css';
import cn from 'classnames';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

export const MapComp = ({ className, ...props }: MapProps): JSX.Element => {
	interface MapData {
		center: number[];
		zoom: number;
	}

	const mapData: MapData = {
		center: [51.693294, 36.008414],
		zoom: 14,
	};

	const coordinates: number[][] = [
		[51.694208, 35.998628],
		[51.692322, 36.001505],
	];

	return (
		<section className={styles.map}>
			<YMaps>
				<Map width={'100%'} height={'100%'} defaultState={mapData}>
					{coordinates.map((coordinate) => (
						<Placemark key={coordinate[0]} geometry={coordinate} />
					))}
				</Map>
			</YMaps>
		</section>
	);
};

// query={{ apikey: process.env.NEXT_PUBLIC_API_KEY }}
