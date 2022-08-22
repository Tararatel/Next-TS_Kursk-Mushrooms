import styles from './Up.module.css';
import UpIcon from './up.svg';
import { useScrollY } from '../../hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({
			opacity: y / document.body.scrollHeight,
		});
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.div className={styles.up} animate={controls} initial={{ opacity: 0 }}>
			<Image src={UpIcon} width={40} height={40} alt="top" onClick={scrollToTop} />
		</motion.div>
	);
};
