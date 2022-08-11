import { BannerProps } from './Banner.props';
import styles from './Banner.module.css';
import { P } from '../P/P';
import Image from 'next/image';
import BannerImg from './whitemushroom.jpg';

interface Text {
	title: string;
	text: string;
	translate: string;
}

export const Banner = ({ className, ...props }: BannerProps): JSX.Element => {
	const text: Text = {
		title: 'Грибы не только приятно есть, но и особое удовольствие их собирать',
		text: 'Здесь вы найдёте информацию о грибах произрастающих в Курской области и местах их сбора',
		translate: 'fungus (с латинского гриб)',
	};

	return (
		<section className={styles.banner}>
			<div className={styles.banner__wrapper}>
				<div className={styles.banner__wrapper__image}>
					<Image src={BannerImg} alt="banner" />
				</div>
				<div className={styles.banner__wrapper__info}>
					<P size="large" className={styles.banner__wrapper__info__title}>
						{text.title}
					</P>
					<P size="medium" className={styles.banner__wrapper__info__text}>
						{text.text}
					</P>
					<P size="verySmall" className={styles.banner__wrapper__info__textTr}>
						{text.translate}
					</P>
				</div>
			</div>
		</section>
	);
};
