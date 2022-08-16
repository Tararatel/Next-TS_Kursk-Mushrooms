import LojniyOpenokImg from './lojniyOpenok.jpg';
import SvinuhImg from './svinuh.jpeg';
import SirRvotImg from './SirRvot.jpg';
import ZelchniyImg from './zelchniy.jpg';
import MuhomorImg from './muhomor.jpg';
import PogankaImg from './poganka.jpg';
import NavoznikImg from './navoznik.jpg';
import StrochokImg from './strochok.jpg';
import PautinnikImg from './pautinnik.jpg';
import { MushroomType } from '../Mushrooms.types';

export const InEdible: MushroomType[] = [
	{
		id: 16,
		pathName: 'sulphurTuft',
		img: LojniyOpenokImg,
		title: 'Ложные опята',
		text: 'Ложные опята, или ложноопята – это сборная группа ядовитых, несъедобных и условно съедобных грибов разных видов и даже разных семейств.',
		latin: 'Hypholoma',
	},
	{
		id: 17,
		pathName: 'flatСap',
		img: SvinuhImg,
		title: 'Свинушка',
		text: 'Свинушки – это небольшие грибы, немного напоминающие по внешнему виду груздь. Толстая и мясистая шляпка свинушки имеет округлую или удлиненно-округлую форму.',
		latin: 'Paxillus',
	},
	{
		id: 18,
		pathName: 'russulaVomit',
		img: SirRvotImg,
		title: 'Сыроежка рвотная',
		text: 'Сыроежки рвотные или жгучеедкие — грибы, которые не рекомендуется употреблять в пищу. Они имеют слабовыраженные, но ядовитые свойства.',
		latin: 'Rússula emética',
	},
	{
		id: 19,
		pathName: 'gallFungus',
		img: ZelchniyImg,
		title: 'Желчный гриб',
		text: 'Желчный гриб – это ложный белый гриб, в народе более известный как горчак, обрел свое прозвище благодаря горечи, которую невозможно убрать никакими кулинарными обработками.',
		latin: 'Tylopílus félleus',
	},
	{
		id: 20,
		pathName: 'amanita',
		img: MuhomorImg,
		title: 'Мухомор',
		text: 'Мухомор – ядовитый галлюциногенный гриб, который в микро дозах обладает лечебными свойствами, а в больших количествах является смертельно опасным.',
		latin: 'Amaníta',
	},
	{
		id: 21,
		pathName: '',
		img: PogankaImg,
		title: 'Бледная поганка',
		text: 'Бледная поганка — самый опасный и ядовитый из всех грибов. Может выглядеть по-разному. Чаще всего у него зеленоватая шляпка и белая ножка.',
		latin: 'Amanita phalloides',
	},
	{
		id: 22,
		pathName: 'deathCap',
		img: NavoznikImg,
		title: 'Навозник серый',
		text: 'Навозник серый — условно-съедобный гриб. Он содержит вещества, несовместимые с алкоголем: употребление спиртных напитков совместно с грибами, а также после вызывает лёгкое отравление.',
		latin: 'Coprinopsis atramentaria',
	},
	{
		id: 23,
		pathName: 'lorchel',
		img: StrochokImg,
		title: 'Строчок обыкновенный',
		text: 'Строчок обыкновенный — необычный гриб, напоминающий с первого взгляда «человеческие мозги» на устойчивой ножке.',
		latin: 'Gyromitra esculenta',
	},
	{
		id: 24,
		pathName: 'cortinarius',
		img: PautinnikImg,
		title: 'Паутинник красивейший',
		text: 'Паутинник красивейший – это смертельно ядовитый гриб, имеющий широкое распространение в еловых лесах Европы.',
		latin: 'Cortinarius rubellus',
	},
];
