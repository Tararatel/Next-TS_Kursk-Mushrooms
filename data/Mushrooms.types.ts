import { StaticImageData } from 'next/image';

export interface MushroomType {
	id: number;
	pathName: string;
	img: StaticImageData;
	title: string;
	text: string;
	latin: string;
	coordinates?: number[][];
}
