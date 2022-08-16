import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface DescriptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLDivElement> {
	edibleData: 'porcini' | 'podberezovik';
}
