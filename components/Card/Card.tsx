import { CardProps } from './Card.props';
import styles from './Card.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { P } from '../P/P';
import BelyImg from './bely.jpg';
import PodberezovikImg from './podberezovik.jpg';
import PodosinovikImg from './podosinovik.jpg';
import SiroejkaImg from './siroejka.jpg';
import MaslonokImg from './maslenok.jpg';
import LisichkaImg from './lisichka.jpg';
import OpenokImg from './openok.jpg';
import SinykImg from './sinyk.jpg';
import RyadovkaImg from './ryadovka.jpg';

export const Card = ({ className, ...props }: CardProps): JSX.Element => {
	const data = [
		{
			img: BelyImg,
			title: 'Белый гриб',
			text: 'Белый гриб считается царём грибов не только из-за его внушительного размера, но и благодаря его вкусу и питательности.',
			latin: 'Bolétus edúlis',
		},
		{
			img: PodberezovikImg,
			title: 'Подберёзовик',
			text: 'Подберезовики – очень распространенный вид съедобных грибов, принадлежащий к семейству болетовых',
			latin: 'Leccinum',
		},
		{
			img: PodosinovikImg,
			title: 'Подосиновик',
			text: 'Подосиновик — съедобный гриб, который относится к роду Leccinum, или Обабок.',
			latin: 'Leccinum',
		},
		{
			img: SiroejkaImg,
			title: 'Сыроежка',
			text: 'Сыроежка – род пластинчатых грибов семейства cыроежковые. Это семейство насчитывает более тридцати видов.',
			latin: 'Russulaceae',
		},
		{
			img: MaslonokImg,
			title: 'Маслёнок',
			text: 'Маслята - одни из самых популярных съедобных грибов. Свое название они получили благодаря блестящей липкой пленке, покрывающей шляпку.',
			latin: 'Boletaceae',
		},
		{
			img: LisichkaImg,
			title: 'Лисичка',
			text: 'Лисичка — гриб с самой яркой и запоминающейся внешностью. Шляпка и ножка составляют одно целое, цвет от светло-желтого до желто-оранжевого цвета.',
			latin: 'Cantharēllus cibārius',
		},
		{
			img: OpenokImg,
			title: 'Опята',
			text: 'Опёнок представляет из себя небольшой гриб бежевого цвета, но шляпка может быть разных цветов, зависит это от субстрата, на котором растёт гриб. Варьируется цвет от медово-жёлтого и доходит до тёмно-серого.',
			latin: 'Armillaria mellea',
		},
		{
			img: SinykImg,
			title: 'Синяк',
			text: 'Съедобные, но редкие грибы – синяки, которые раньше высоко ценились нашими предками, растут во всех странах СНГ. Гриб синяк очень легко узнать на лесных просторах. Синяк имеет характерные отличия, среди которых способность приобретать синий оттенок , считается самым выразительным.',
			latin: 'Gyróporus cyanéscens',
		},
		{
			img: RyadovkaImg,
			title: 'Рядовка',
			text: 'Грибы рядовки – это собирательное название целого отряда грибов, включающего в себя как съедобные, так и ядовитые виды. В основном все они съедобные: и серая рядовка, и тополевая, и исполин, и мацутаке, и массивная, и желтая.',
			latin: 'Tricholoma',
		},
	];

	return (
		<>
			{data.map((card) => (
				<div className={styles.card} key={card.title}>
					<div className={styles.card__img}>
						<Image src={`${card.img.src}`} width={387} height={284} objectFit="cover" alt="mushroom" />
					</div>
					<P className={styles.card__from} size="verySmall">
						{`${card.latin}`}
					</P>
					<P className={styles.card__title} size="big">{`${card.title}`}</P>
					<P className={styles.card__text} size="small">{`${card.text}`}</P>
				</div>
			))}
		</>
	);
};
