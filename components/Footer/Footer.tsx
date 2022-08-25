import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { ForwardedRef, forwardRef } from 'react';
import { P } from '../P/P';
import ImgInstagram from './instagram.png';
import ImgTelegram from './telegram.png';
import ImgLinkedIn from './linkedin.png';
import Link from 'next/link';

export const Footer = ({ className, ...props }: FooterProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const links = {
		instagram: 'https://www.instagram.com/alekseysidorov.46/',
		linkedIn: 'https://www.linkedin.com/in/aleksey-sidorov-239616172/',
		telegram: 'https://t.me/Tararatel',
	};

	const date = new Date();
	const currentDate = date.getFullYear();
	return (
		<footer className={styles.footer} {...props}>
			<div className={styles.footer__wrapper}>
				<P className={styles.footer__wrapper__text} size="verySmall" align="center">
					Если вы знаете, где встечается тот или иной гриб или у вас есть замечание, напишите мне:
				</P>
				<div className={styles.footer__wrapper__social}>
					<a href={links.instagram}>
						<Image src={ImgInstagram} width={40} height={40} objectFit="contain" color="white" alt="Instagram" />
					</a>
					<a href={links.linkedIn}>
						<Image src={ImgLinkedIn} width={40} height={40} objectFit="contain" alt="LinkedIn" />
					</a>
					<a href={links.telegram}>
						<Image src={ImgTelegram} width={40} height={40} objectFit="contain" alt="Telegram" />
					</a>
				</div>
				<P className={styles.footer__wrapper__title} size="verySmall" align="center">
					© {currentDate} Project by Aleksey Sidorov
				</P>
			</div>
		</footer>
	);
};
