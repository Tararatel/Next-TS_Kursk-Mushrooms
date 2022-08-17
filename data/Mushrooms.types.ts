import { StaticImageData } from 'next/image';
export interface MushroomType {
	id: number;
	pathName: string;
	img: StaticImageData;
	title: string;
	text: string;
	latin: string;
	cap?: string;
	stipe?: string;
	pulp?: string;
	tubular?: string;
	source: string;
	coordinates?: number[][];
}
