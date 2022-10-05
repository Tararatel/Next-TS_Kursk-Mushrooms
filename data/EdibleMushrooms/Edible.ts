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
import { MushroomType } from '../Mushrooms.types';

export const Edible: MushroomType[] = [
	{
		id: 1,
		pathName: 'porcini',
		img: BelyImg,
		title: 'Белый гриб',
		text: 'Белый гриб считается царём грибов не только из-за его внушительного размера, но и благодаря его вкусу и питательности.',
		latin: 'Bolétus edúlis',
		cap: 'Шляпка зрелого гриба диаметром 7—30 см (иногда до 50 см), выпуклая, у старых грибов плоско-выпуклая, редко распростёртая. Поверхность гладкая или морщинистая, в сухую погоду может растрескиваться, голая, может быть тонковойлочная (особенно у края), редко волокнисто-чешуйчатая. Во влажную погоду поверхность слегка слизистая, в сухую матовая или блестящая. Цвет кожицы — от красно-коричневого до почти белого, с возрастом темнеет, может также быть лимонно-жёлтых, оранжевых, пурпурных тонов, часто окраска неравномерная, со светлыми краями, иногда с узким чисто-белым или желтоватым ободком. Кожица приросшая, не отделяется от мякоти.',
		stipe:
			'Ножка 8—25 см высотой (обычно до 12) и до 7 см толщиной (редко 10 и больше), массивная, бочковидная или булавовидная, с возрастом вытягивается и может становиться цилиндрической, расширенной или суженной посередине, основание часто остаётся утолщённым. Поверхность беловатая, коричневатая, иногда красноватая, может иметь тот же оттенок, что и шляпка, но более светлый. Покрыта сеточкой из белых или более светлых прожилок. Сеточка обычно в верхней части ножки, но может и спускаться до основания, значительно реже она отсутствует или слабо выражена.',
		pulp: 'Мякоть крепкая, сочно-мясистая, у старых экземпляров волокнистая, белая у молодого гриба, желтеет с возрастом, не изменяет цвет после разрезания (крайне редко наблюдается слабое изменение окраски до розовой или синей), под тёмноокрашенной кожицей может быть слой бурого или красно-коричневого оттенка. Вкус мягкий, слабо выражен, запах сырой мякоти слабо различим, сильный приятный грибной запах появляется при варке и особенно при сушке.',
		tubular:
			'Трубчатый слой с глубокой выемкой возле ножки, легко отделяется от мякоти шляпки, светлый, у молодых грибов белый, позже желтеет, затем приобретает оливково-зелёный цвет, очень редко в молодом возрасте бывает с розовато-красным оттенком. Трубочки длиной 1—4 см, поры мелкие, округлые.',
		source: 'https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D0%B3%D1%80%D0%B8%D0%B1',
		coordinates: [
			[51.694208, 35.998628],
			[51.692322, 36.001505],
			[51.693188, 35.862596],
			[51.675833, 35.878028],
			[51.715168, 36.023578],
			[51.715633, 36.032503],
			[51.715633, 36.032503],
			[51.716474, 36.035913],
		],
	},
	{
		id: 2,
		pathName: 'podberezovik',
		img: PodberezovikImg,
		title: 'Подберёзовик',
		text: 'Подберезовики – очень распространенный вид съедобных грибов, принадлежащий к семейству болетовых',
		latin: 'Leccinum',
		cap: 'Шляпка различного окраса — от белого до тёмно-серого и почти чёрного, снизу и сначала (у молодого гриба) белая, у более старого — серовато-буроватая. В сырых местах чаще встречаются подберёзовик болотный, с белой или беловатой поверхностью шляпки.',
		stipe: 'Ножка снизу слегка утолщённая, белая, с продольными белыми или тёмными чешуйками.',
		pulp: 'Мякоть белая, окраска на изломе не меняется.',
		tubular: '',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D1%91%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9',
		coordinates: [
			[51.694024, 36.00066],
			[51.693075, 35.864002],
			[51.693188, 35.862596],
			[51.675383, 35.872574],
			[51.715188, 36.021792],
			[51.715712, 36.038042],
		],
	},
	{
		id: 3,
		pathName: 'podosinovik',
		img: PodosinovikImg,
		title: 'Подосиновик',
		text: 'Подосиновик — съедобный гриб, который относится к роду Leccinum, или Обабок.',
		latin: 'Leccinum',
		cap: 'Шляпка диаметром 4—15 (редко до 30) см, вначале полушаровидная с плотно прижатым к ножке краем, затем подушковидно-выпуклой формы, легко отделяется от ножки. Кожица красная, оранжевая или буровато-красная, гладкая или со слабой бархатистостью, не снимается.',
		stipe:
			'Ножка высотой 5—15 см, толщиной 1,5—5 см, сплошная, часто расширяется в нижней части. Поверхность серовато-белая, покрыта продольно-волокнистыми чешуйками, сначала они белые, с возрастом становятся буроватыми.',
		pulp: 'Мякоть мясистая, плотная, в шляпке упругая, с возрастом становится мягкой, в ножке продольно-волокнистая. Цвет на разрезе белый, в нижней части ножки синеватый, быстро синеет, затем чернеет. Вкус и запах не выражены.',
		tubular:
			'Трубчатый слой свободный, белый, затем становится буровато-серым, может быть с оливковым или желтоватым оттенком. Трубочки длиной 1 — 3 см с мелкими угловато-округлыми порами, пористая поверхность от прикосновения темнеет.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BE%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D0%BA_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9',
		coordinates: [
			[51.693188, 35.862596],
			[51.715192, 36.020829],
			[51.715667, 36.036671],
		],
	},
	{
		id: 4,
		pathName: 'russule',
		img: SiroejkaImg,
		title: 'Сыроежка',
		text: 'Сыроежка – род пластинчатых грибов семейства cыроежковые. Это семейство насчитывает более тридцати видов.',
		latin: 'Russulaceae',
		cap: 'Шляпка сначала шаровидная, полушаровидная или колокольчатая, позднее распростёртая, плоская или воронковидная, реже выпуклая; край завёрнутый или прямой, часто полосатый или рубчатый. Кожица разнообразной окраски, сухая, реже влажная, блестящая или матовая, иногда растрескивающаяся, легко отделяющаяся от мякоти или приросшая.',
		stipe:
			'Ножка цилиндрическая, ровная, реже утолщённая или заострённая у основания, белая или окрашенная, плотная или полая внутри.',
		pulp: 'Мякоть плотная, хрупкая или губчатая, особенно в ножке, белая, на разрезе и с возрастом не изменяет окраску или буреет, сереет, чернеет, краснеет, с мягким или едким вкусом.',
		tubular:
			'Пластинки приросшие, выемчатые, нисходящие или свободные, равной или неравной длины, иногда вильчато разветвлённые, обычно частые, иногда редкие, с тупым или заострённым краем, часто ломкие, белые или желтоватые до охристых.',
		source: 'https://ru.wikipedia.org/wiki/%D0%A1%D1%8B%D1%80%D0%BE%D0%B5%D0%B6%D0%BA%D0%B0',
		coordinates: [
			[51.693188, 35.862596],
			[51.693112, 35.858707],
			[51.674663, 35.86934],
			[51.749502, 36.125449],
			[51.713436, 36.043491],
		],
	},
	{
		id: 5,
		pathName: 'oiler',
		img: MaslonokImg,
		title: 'Маслёнок',
		text: 'Маслята - одни из самых популярных съедобных грибов. Свое название они получили благодаря блестящей липкой пленке, покрывающей шляпку.',
		latin: 'Boletaceae',
		cap: 'Диаметр шляпки составляет 3—14 см, шляпка имеет полушаровидную, позже округло-выпуклую, плосковыпуклую или подушковидную, или даже плоскую форму, иногда бугорчатая с поднятым краем, на ощупь гладкая, слизистая, цвет кожицы — коричневый, тёмно-коричневый, шоколадно-коричневый, красно-коричневый, красно-бурый, жёлто-коричневый, жёлто-бурый, серо-бурый или буро-оливковый. Кожица легко отделяется от мякоти, имеет радиально-волокнистое строение, сильно слизистая.',
		stipe:
			'Ножка 3—11 см высотой и 1—2,5 см толщиной, цилиндрическая, сплошная, продольно-волокнистая, беловатого или желтоватого цвета, с плёнчатым кольцом (покрывалом) белого, а позднее коричневатого, чёрно-коричневого или грязно-фиолетового цвета, над кольцом ножка имеет мучнистый или лимонно-жёлтый цвет, в нижней части — буроватого цвета.',
		pulp: 'Мякоть в шляпке мягкая, сочная, беловатая или желтоватая, под кожицей более тёмная, в ножке немного волокнистая, в основании ножки ржаво-буроватого цвета.',
		tubular:
			'Трубчатый слой приросший к ножке, жёлтый, поры сначала беловатые или бледно-жёлтые, потом жёлтые или тёмно-жёлтые, мелкие, округлые.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D0%BB%D1%91%D0%BD%D0%BE%D0%BA_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9',
		coordinates: [
			[51.687425, 35.883242],
			[51.676867, 35.864058],
			[51.713436, 36.043491],
			[51.696732, 35.998244],
			[51.675895, 35.879002],
		],
	},
	{
		id: 6,
		pathName: 'chanterelles',
		img: LisichkaImg,
		title: 'Лисичка',
		text: 'Лисичка — гриб с самой яркой и запоминающейся внешностью. Шляпка и ножка составляют одно целое, цвет от светло-желтого до желто-оранжевого цвета.',
		latin: 'Cantharēllus cibārius',
		cap: 'Шляпка диаметром 2—12 см, часто с волнистым краем или неправильной формы, вогнуто-распростёртая, выпуклая, потом вдавленная, плоская, с завёрнутыми краями и вдавленная в центре, у зрелых грибов до воронковидной. Поверхность шляпки гладкая, матовая. Кожица трудно отделяется от мякоти шляпки.',
		stipe:
			'Ножка сросшаяся со шляпкой и одного с ней цвета или более светлая, сплошная, плотная, гладкая, книзу сужается, толщиной от 1 до 3 см и длиной от 4 до 7 см.',
		pulp: 'Мякоть плотно-мясистая, в ножке волокнистая, жёлтая по краям и беловатая в середине плодового тела, с кисловатым вкусом и слабым запахом сушёных фруктов или кореньев. При надавливании слегка краснеет[6].',
		tubular:
			'Гименофор складчатый (псевдопластинчатый), состоит из волнистых, часто сильно разветвлённых складок, сильно нисходящих по ножке. Гименофор может быть также жилковатым, грубоячеистым; жилки толстые, редкие (менее 10 шт./см), невысокие, походят на складки, вильчатые или нет, вильчато-разветвлённые, далеко нисбегающие на ножку (относится к афилофоральным грибам).',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%81%D0%B8%D1%87%D0%BA%D0%B0_%D0%BE%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F',
		coordinates: [],
	},
	{
		id: 7,
		pathName: 'honeyMushrooms',
		img: OpenokImg,
		title: 'Опята',
		text: 'Опёнок представляет из себя небольшой гриб бежевого цвета, но шляпка может быть разных цветов, зависит это от субстрата, на котором растёт гриб. Варьируется цвет от медово-жёлтого и доходит до тёмно-серого.',
		latin: 'Armillaria mellea',
		cap: 'Шляпка диаметром 3—10 см (редко до 15—17 см), вначале выпуклая, раскрывается до плоской, часто с волнистыми краями. Кожица может быть окрашена в различные оттенки от медово-коричневого до зеленовато-оливкового, в центре более тёмная. Поверхность покрыта редкими светлыми чешуйками, с возрастом они могут исчезать.',
		stipe:
			'Ножки длиной 8—10 см и 1—2 см в диаметре, сплошные, со светлой жёлто-коричневой поверхностью, в нижней части темнее, до коричнево-бурого. У основания могут быть слегка расширенные, но не вздутые. Поверхность ножки, как и шляпки, покрыта хлопьевидными чешуйками. Плодовые тела часто срастаются основаниями ножек.',
		pulp: 'Мякоть молодых шляпок плотная, беловатая, с возрастом становится тонкой; в ножках волокнистая, у зрелых грибов грубой консистенции. Запах и вкус приятные.',
		tubular:
			'Пластинки относительно редкие, приросшие к ножке или слабо низбегающие. Молодые беловатого или телесного цвета, при созревании слегка темнеют, до розово-коричневых, могут покрываться бурыми пятнами.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D1%91%D0%BD%D0%BE%D0%BA_%D0%BE%D1%81%D0%B5%D0%BD%D0%BD%D0%B8%D0%B9',
		coordinates: [],
	},
	{
		id: 8,
		pathName: 'sinyak',
		img: SinykImg,
		title: 'Синяк',
		text: 'Съедобные, но редкие грибы – синяки, которые раньше высоко ценились нашими предками, растут во всех странах СНГ. Гриб синяк очень легко узнать на лесных просторах. Синяк имеет характерные отличия, среди которых способность приобретать синий оттенок , считается самым выразительным.',
		latin: 'Gyróporus cyanéscens',
		cap: 'Шляпка диаметром 5—15 см, от выпуклой до плоской, соломенно-жёлтая, буро-жёлтая или серовато-коричневая, синеет при надавливании. Кожица матовая, бархатистая, сухая.',
		stipe:
			'Ножка у основания утолщённая, вначале с ватообразным наполнением, потом — полая или с пустотами, цвет близкий к цвету шляпки или белый, длина 5—10 см, толщина 1,5— 3 см.',
		pulp: 'Мякоть компактная, ломкая, белая или кремовая, на изломе приобретает характерный васильково-синий цвет, чем хорошо отличается от других синеющих болетовых (которые становятся тёмно-синими, вплоть до почти чёрного цвета). Вкус и запах приятные.',
		tubular:
			'Трубочки свободные, длиной 5—10 мм, сначала (у молодого гриба) белые, у более старого — соломенно-жёлтые, при надавливании на них остаются синие пятна. Поры мелкие, округлые.',
		source: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%8F%D0%BA_(%D0%B3%D1%80%D0%B8%D0%B1)',
		coordinates: [[51.749502, 36.125449]],
	},
	{
		id: 9,
		pathName: 'ryadovka',
		img: RyadovkaImg,
		title: 'Рядовка',
		text: 'Грибы рядовки – это собирательное название целого отряда грибов, включающего в себя как съедобные, так и ядовитые виды. В основном все они съедобные: и серая рядовка, и тополевая, и исполин, и мацутаке, и массивная, и желтая.',
		latin: 'Tricholoma',
		cap: 'Шляпка 3—15 см в диаметре, выпуклой, затем плоско-выпуклой и уплощённой формы, с невысоким бугорком в центре, клейкая, при высыхании волокнистая, к старости часто неправильно чешуйчатая. Окраска красновато-коричневая, по краю более бледная.',
		stipe:
			'Ножка 4—12 см длиной и 0,4—2 см толщиной, цилиндрическая или расширенная к основанию, в верхней части белая, ниже — жёлто-коричневая, с мелкими красно-коричневыми волоконцами.',
		pulp: 'Мякоть белого или жёлтого цвета, с мучнистым запахом и мучнистым или горьковатым вкусом.',
		tubular:
			'Гименофор пластинчатый, пластинки выемчато-приросшие, часто или довольно редко расположенные, светло-жёлтого цвета, с возрастом иногда покрывающиеся коричневатыми пятнами, с неровным краем.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B4%D0%BE%D0%B2%D0%BA%D0%B0_%D0%B6%D1%91%D0%BB%D1%82%D0%BE-%D0%B1%D1%83%D1%80%D0%B0%D1%8F',
		coordinates: [],
	},
	{
		id: 10,
		pathName: 'forestChampignon',
		img: ShampinjonImg,
		title: 'Шампиньон лесной',
		text: 'Шампиньон лесной – гриб семейства Шампиньоновые. По-простому его называют колпак, волчий гриб и благушка. Запах у этого съедобного гриба приятный, древесный.',
		latin: 'Agaricus silvaticus',
		cap: 'Шляпка яйцевидно-колокольчатая, 7—10 см в диаметре, при созревании плоско-распростёртая, часто с выступающим бугром, ржаво-буро-коричневая, с многочисленными тёмными чешуйками.',
		stipe:
			'Ножка 4—6 см высоты, 1—1,5 см ширины, цилиндрическая, часто слегка вздутая к основанию, с белым плёнчатым кольцом, часто исчезающим в зрелости[1].',
		pulp: 'Мякоть белая, при надломе краснеющая.',
		tubular:
			'Пластинки сначала белые, затем красноватые и наконец тёмно-коричневые, вздутые к середине, суженые к концам.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BC%D0%BF%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD_%D0%BB%D0%B5%D1%81%D0%BD%D0%BE%D0%B9',
		coordinates: [
			[51.692654, 36.000283],
			[51.691481, 35.999919],
		],
	},
	{
		id: 11,
		img: ZontikImg,
		pathName: 'umbrellaMushroom',
		title: 'Гриб-зонтик пёстрый',
		text: 'Гриб-зонтик относится к роду макролепиоты, семейству шампиньоновых. Свое имя он получил из-за внешнего сходства с раскрытым зонтом.',
		latin: 'Macrolepiota procera',
		cap: 'Шляпка диаметром 20—35 см, вначале шаровидная, затем раскрывается от ширококонической, выпуклой до зонтиковидной, края могут оставаться слегка загнутыми. В центре часто хорошо заметен тёмный округлый бугорок. Кожица радиально-волокнистая, коричневато-серая, покрыта легко отделяющимися тёмно-коричневыми угловатыми чешуйками.',
		stipe:
			'Ножка 10—30 (до 40) см, толщиной 1—2 (до 4) см, цилиндрическая, полая, жёстковолокнистая, с шаровидным утолщением в основании, легко отделяется от шляпки. Поверхность ножки у молодых грибов однотонно-коричневая, позже светло-бурая, покрытая тёмными чешуйками, часто расположенными кольцами, от чего ножка кажется поперечно-полосатой или похожей на змеиную кожу.',
		pulp: 'Мякоть шляпки рыхло-мясистая, позже более плотная, белая или светлая, не изменяется при надавливании и на срезе. Запах слабый, грибной, вкус приятный, ореховый.',
		tubular:
			'Пластинки шириной до 2 см, к ножке сужаются, легко отделяются от шляпки, свободные, белые, частые, с возрастом становятся кремовыми или бежевыми, возле ножки образуют тонкий хрящевидный коллариум.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%B1-%D0%B7%D0%BE%D0%BD%D1%82%D0%B8%D0%BA_%D0%BF%D1%91%D1%81%D1%82%D1%80%D1%8B%D0%B9',
		coordinates: [],
	},
	{
		id: 12,
		pathName: 'rizik',
		img: RizikImg,
		title: 'Рыжик',
		text: 'Рыжики – ценные съедобные грибы рода Млечник, на изломе выделяющие обильный оранжево-красный млечный сок.',
		latin: 'Lactarius deterrimus',
		cap: 'Шляпка ∅ 2—8 см, вначале выпуклая, нередко с бугорком посредине, с загнутыми вниз краями, с возрастом становится плоско-вогнутой и даже воронкообразной, ломкая, без опушения по краям. Кожица гладкая, в сырую погоду скользкая, оранжевая, с более тёмными концентрическими зонами и пятнами, при повреждении и с возрастом приобретает зелёную окраску.',
		stipe:
			'Ножка 3—7 см в высоту, ∅ 1—1,5 см, цилиндрическая, очень ломкая, сначала цельная, с возрастом полая, окрашена так же, как и шляпка. При повреждении зеленеет.',
		pulp: 'Мякоть оранжевого цвета, на изломе быстро краснеет, потом зеленеет, имеет слабый фруктовый запах и приятный вкус.',
		tubular:
			'Пластинки слегка нисходящие, очень частые, обычно немного светлее шляпки, при надавливании быстро зеленеют.',
		source: 'https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B6%D0%B8%D0%BA_%D0%B5%D0%BB%D0%BE%D0%B2%D1%8B%D0%B9',
		coordinates: [],
	},
	{
		id: 13,
		pathName: 'volnushka ',
		img: VolnushkaImg,
		title: 'Волнушка розовая',
		text: 'Волнушки – грибы рода Млечники, семейства Сыроежковые. Относят к разряду условно-съедобных грибов, которые можно употреблять в пищу после тщательной и грамотной обработки.',
		latin: 'Lactárius torminósus',
		cap: 'Шляпка ∅ 4—12 см, сначала выпуклая, затем всё более плоская, с глубоким пуповидным углублением в центре, с завёрнутыми вниз опушёнными краями. Кожица покрыта густыми и грубыми ворсинками, располагающимися неровными концентрическими кругами, слабо слизистая, бледно- или серо-розовая, в сухую погоду выцветает до бледно-розовой или почти белой, от прикосновения темнеет.',
		stipe:
			'Ножка ∅ 1—2 см, 3—6 см в высоту, цилиндрическая, очень крепкая и твёрдая, в молодости сплошная, затем полая, бледно-розового цвета, слегка сужающаяся к основанию. Поверхность ножки покрыта пушком и мелкими ямками (иногда).',
		pulp: 'Мякоть белая, очень крепкая и плотная, с острым вкусом. Млечный сок обильный, острый, белого цвета, на воздухе цвета не изменяет.',
		tubular:
			'Пластинки беловатого цвета, очень частые, неширокие, нисходящие по ножке и всегда перемежающиеся промежуточными пластиночками.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BD%D1%83%D1%88%D0%BA%D0%B0_%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%B0%D1%8F',
		coordinates: [],
	},
	{
		id: 14,
		pathName: 'milkMushroom',
		img: GruzdImg,
		title: 'Груздь настоящий',
		text: 'Грузди — это вкусные деликатесные грибы, которые растут в лиственных, смешанных, а также сосновых лесах, подразделяются на съедобные и несъедобные сорта.',
		latin: 'Lactárius résimus',
		cap: 'Шляпка ∅ 5—20 см, сначала плоско-выпуклая, затем воронковидная с завёрнутым внутрь опушённым краем, плотная. Кожица слизистая, мокрая, молочно-белого или слегка желтоватого цвета с неясными водянистыми концентрическими зонами, часто — с прилипшими частичками почвы и опада.',
		stipe:
			'Ножка 3—7 см в высоту, ∅ 2—5 см, цилиндрическая, гладкая, белого или желтоватого цвета, иногда с жёлтыми пятнами или ямками, полая.',
		pulp: 'Мякоть плотная, крепкая, белая, с очень характерным запахом, напоминающим запах фруктов. Млечный сок белый, на вкус едкий, на воздухе становится серно-жёлтым.',
		tubular: 'Пластинки довольно частые, широкие, слабо нисходящие по ножке, белые с желтоватым оттенком.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%83%D0%B7%D0%B4%D1%8C_%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D1%8F%D1%89%D0%B8%D0%B9',
		coordinates: [[51.694111, 35.998533]],
	},
	{
		id: 15,
		pathName: 'mohovik',
		img: MohovikImg,
		title: 'Моховик',
		text: 'Моховик – трубчатый гриб из семейства Болетовых с бархатистой, сухой или немного клейкой шляпкой, на морщинистой цилиндрической ножке.',
		latin: 'Xerócomus',
		cap: 'Шляпка диаметром 2—5 см (до 8 см), вначале подушковидно-выпуклая, у зрелых грибов иногда расправляется. Цвет шляпки насыщенно-красный, часто с малиновым или коричневым оттенком, по краю иногда желтоватая. Кожица не снимается, вначале бархатисто-войлочная, у зрелых грибов бывает слегка трещиноватая.',
		stipe:
			'Ножка цилиндрическая или сужающаяся к основанию, 3—10 см высотой и до 1 см толщиной, сплошная, волокнистая. Снаружи цвет ножки под шляпкой жёлтый, ближе к основанию бывает малиново-розоватый, красноватый, или красно-коричневый, с мелкими чешуйками.',
		pulp: 'Мякоть плотная, жёлтого цвета, на разрезе или изломе слегка синеет.',
		tubular:
			'Гименофор (трубчатый слой шляпки) жёлтый, у зрелых грибов приобретают тусклый тёмно-жёлтый или оливковый оттенок. При надавливании медленно синеет.',
		source:
			'https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%85%D0%BE%D0%B2%D0%B8%D0%BA_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9',
		coordinates: [[51.677724, 35.879108]],
	},
];
