import { StaticImageData } from 'next/image';
import BelyImg from './bely.jpg';
import PodberezovikImg from './podberezovik.jpg';
import PodosinovikImg from './podosinovik.jpg';
import SiroejkaImg from './siroejka.jpg';
import MaslonokImg from './maslenok.jpg';
import LisichkaImg from './lisichka.jpg';
import OpenokImg from './openok.jpg';
import SinykImg from './sinyk.jpg';
import RyadovkaImg from './ryadovka.jpg';
import ShampinjonImg from './shampinjon.jpg';
import ZontikImg from './zontik.jpg';
import RizikImg from './rizik.jpg';
import GruzdImg from './gruzd.jpg';
import VolnushkaImg from './volnushka.jpg';
import MohovikImg from './mohovik.jpg';

interface Data {
	img: StaticImageData;
	title: string;
	text: string;
	latin: string;
}

export const Edible: Data[] = [
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
	{
		img: ShampinjonImg,
		title: 'Шампиньон лесной',
		text: 'Шампиньон лесной – гриб семейства Шампиньоновые. По-простому его называют колпак, волчий гриб и благушка. Запах у этого съедобного гриба приятный, древесный.',
		latin: 'Agaricus silvaticus',
	},
	{
		img: ZontikImg,
		title: 'Гриб-зонтик пёстрый',
		text: 'Гриб-зонтик относится к роду макролепиоты, семейству шампиньоновых. Свое имя он получил из-за внешнего сходства с раскрытым зонтом.',
		latin: 'Macrolepiota procera',
	},
	{
		img: RizikImg,
		title: 'Рыжик',
		text: 'Рыжики – ценные съедобные грибы рода Млечник, на изломе выделяющие обильный оранжево-красный млечный сок.',
		latin: 'Lactarius deterrimus',
	},
	{
		img: VolnushkaImg,
		title: 'Волнушка розовая',
		text: 'Волнушки – грибы рода Млечники, семейства Сыроежковые. Относят к разряду условно-съедобных грибов, которые можно употреблять в пищу после тщательной и грамотной обработки.',
		latin: 'Lactárius torminósus',
	},
	{
		img: GruzdImg,
		title: 'Груздь настоящий',
		text: 'Грузди — это вкусные деликатесные грибы, которые растут в лиственных, смешанных, а также сосновых лесах, подразделяются на съедобные и несъедобные сорта.',
		latin: 'Lactárius résimus',
	},
	{
		img: MohovikImg,
		title: 'Моховик',
		text: 'Моховик – трубчатый гриб из семейства Болетовых с бархатистой, сухой или немного клейкой шляпкой, на морщинистой цилиндрической ножке.',
		latin: 'Xerócomus',
	},
];
