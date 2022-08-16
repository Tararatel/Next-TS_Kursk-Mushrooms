import { MapProps } from './Map.props';
import styles from './Map.module.scss';
import { YMaps, Map, Placemark, ListBox, ListBoxItem } from 'react-yandex-maps';
import { useState, useEffect } from 'react';
import { Edible } from '../../data/EdibleMushrooms/Edible';
import { MushroomType } from '../../data/Mushrooms.types';

export const MapComp = ({ className, ...props }: MapProps): JSX.Element => {
	interface MapData {
		center: number[];
		zoom: number;
	}

	const mapData: MapData = {
		center: [51.693294, 36.008414],
		zoom: 14,
	};

	const [mushrooms, setMushrooms] = useState<MushroomType[]>(
		Edible.map((item) => {
			return item;
		})
	);

	const [coordinates, setCoordinates] = useState<number[][]>([]);

	const coordinateHandler = (mushroom: MushroomType): void => {
		setCoordinates((prevState): any => {
			if (prevState.length > 0) {
				return [...prevState, ...(mushroom.coordinates as number[][])];
			} else {
				return mushroom.coordinates;
			}
		});
	};

	useEffect(() => {}, [coordinates]);

	return (
		<section className={styles.map}>
			<YMaps>
				<Map width={'100%'} height={'100%'} defaultState={mapData}>
					<ListBox
						data={{
							content: 'Выберите грибы',
						}}
					>
						{mushrooms.map((mushroom) => (
							<ListBoxItem
								key={mushroom.id}
								data={{ content: mushroom.title }}
								onClick={(): void => coordinateHandler(mushroom)}
							/>
						))}
					</ListBox>
					{coordinates.map((coordinate, idx) => (
						<Placemark key={idx} geometry={coordinate} />
					))}
				</Map>
			</YMaps>
		</section>
	);
};
