import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLDivElement> {
	data: 'Edible' | 'Inedible';
}
