'use strict';

var _areasPremises;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var section__advantages = new Vue({
		el: '#advantages',
		data: {
				title: 'Изучите планировки',

				itemsFirstLine: [{
						first: '16 вариантов',
						second: 'планировок квартир'
				}, {
						first: 'ипотека от 6%',
						second: 'и рассрочка от застройщика'
				}],

				itemsSecondLine: [{
						first: 'проживают уже более',
						second: '8000 жителей'
				}, {
						first: 'детская и взрослая',
						second: 'поликлиники'
				}],

				itemsThirdLine: [{
						first: 'в шаговой доступности',
						second: 'школы и детский сад'
				}, {
						first: 'поддержка строительства',
						second: 'правительством РФ'
				}]
		}
});
var section__apartment = new Vue({
		el: '#apartment',
		data: {
				title: 'Изучите планировки',
				offset: 0,
				perPage: 2,
				sortedLayouts: [],
				options: [{
						option: '1-комнатный квартиры',
						rooms: 1,
						isActive: true
				}, {
						option: '2-комнатный квартиры',
						rooms: 2,
						isActive: false
				}, {
						option: '3-комнатный квартиры',
						rooms: 3,
						isActive: false
				}],

				layouts: [{
						areaTotal: '38,08',
						value: '1 466 000',
						img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
						imgInfo: 'img/_apartment-layout/1/1.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 2,
						number: 6,
						floor: 2,
						areasPremises: {
								'Гостиная': '15,09',
								'Холл': '4,44',
								'Кухня': '8,09',
								'Санузел': '3,80',
								'Лоджия': '4,29'
						},
						index: 0
				}, {
						areaTotal: '37,86',
						value: '1 455 000',
						img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
						imgInfo: 'img/_apartment-layout/1/2.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 3,
						number: 149,
						floor: 9,
						areasPremises: {
								'Гостиная': '15,09',
								'Холл': '4,44',
								'Кухня': '8,09',
								'Санузел': '3,80',
								'Лоджия': '4,29'
						},
						index: 1
				}, {
						areaTotal: '37,86',
						value: '1 476 000',
						img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
						imgInfo: 'img/_apartment-layout/1/3.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 2,
						number: 4,
						floor: 2,
						areasPremises: {
								'Гостиная': '19,03',
								'Холл': '2,97',
								'Кухня': '8,04',
								'Санузел': '3,78',
								'Лоджия': '4,26'
						},
						index: 2
				}, {
						areaTotal: '39,53',
						value: '1 522 000',
						img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
						imgInfo: 'img/_apartment-layout/1/4.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 2,
						number: 73,
						floor: 10,
						areasPremises: {
								'Гостиная': '18,95',
								'Холл': '3,57',
								'Кухня': '9,00',
								'Санузел': '3,84',
								'Лоджия': '4,17'
						},
						index: 3
				}, {
						areaTotal: '38,18',
						value: '1 567 000',
						img: 'img/_apartment-layout/apartment-layout__1room_5.jpg',
						imgInfo: 'img/_apartment-layout/1/5.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 3,
						number: 83,
						floor: 2,
						areasPremises: {
								'Гостиная': '14,91',
								'Холл': '3,57',
								'Кухня': '9,00',
								'Санузел': '3,84',
								'Лоджия': '4,08'
						},
						index: 4
				}, {
						areaTotal: '38,84',
						value: '1 679 000',
						img: 'img/_apartment-layout/apartment-layout__1room_6.jpg',
						imgInfo: 'img/_apartment-layout/1/6.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 2,
						number: 52,
						floor: 7,
						areasPremises: {
								'Гостиная': '19,03',
								'Холл': '2,97',
								'Кухня': '8,04',
								'Санузел': '3,78',
								'Лоджия': '4,26'
						},
						index: 5
				}, {
						areaTotal: '38,84',
						value: '1 500 000',
						img: 'img/_apartment-layout/apartment-layout__1room_7.jpg',
						imgInfo: 'img/_apartment-layout/1/1.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 4,
						number: 64,
						floor: 7,
						areasPremises: {
								'Гостиная': '15,09',
								'Холл': '4,44',
								'Кухня': '8,09',
								'Санузел': '3,80',
								'Лоджия': '4,29'
						},
						index: 6
				}, {
						areaTotal: '39,53',
						value: '1 522 000',
						img: 'img/_apartment-layout/apartment-layout__1room_8.jpg',
						imgInfo: 'img/_apartment-layout/1/2.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 4,
						number: 67,
						floor: 8,
						areasPremises: {
								'Гостиная': '15,09',
								'Холл': '4,44',
								'Кухня': '8,09',
								'Санузел': '3,80',
								'Лоджия': '4,29'
						},
						index: 7
				}, {
						areaTotal: '59,46',
						value: '2 378 000',
						img: 'img/_apartment-layout/apartment-layout__2room_1.jpg',
						imgInfo: 'img/_apartment-layout/2/1.jpg',
						alt: '2-комнатная квартира',
						rooms: 2,
						section: 4,
						number: 63,
						floor: 8,
						areasPremises: {
								'Гостиная': '20,60',
								'Спальня': '14,50',
								'Холл': '6,81',
								'Кухня': '9,00',
								'Санузел': '4,38',
								'Лоджия': '4,17'
						},
						index: 8
				}, {
						areaTotal: '63,39',
						value: '2 401 000',
						img: 'img/_apartment-layout/apartment-layout__2room_2.jpg',
						imgInfo: 'img/_apartment-layout/2/2.jpg',
						alt: '2-комнатная квартира',
						rooms: 2,
						section: 11,
						number: 3,
						floor: 1,
						areasPremises: {
								'Гостиная': '14,74',
								'Спальня': '11,13',
								'Холл': '11,19',
								'Холл 2': '2,47',
								'Кухня': '14,97',
								'Санузел': '1,75',
								'Санузел 2': '2,60',
								'Лоджия': '4,34'
						},
						index: 9
				}, {
						areaTotal: '86,56',
						value: '3 401 000',
						img: 'img/_apartment-layout/apartment-layout__3room_1.jpg',
						imgInfo: 'img/_apartment-layout/3/1.jpg',
						alt: '3-комнатная квартира',
						rooms: 3,
						section: 2,
						number: 80,
						floor: 10,
						areasPremises: (_areasPremises = {
								'Гостиная': '16,24',
								'Спальня': '14,74'
						}, _defineProperty(_areasPremises, '\u0421\u043F\u0430\u043B\u044C\u043D\u044F', '11,31'), _defineProperty(_areasPremises, 'Холл', '11,19'), _defineProperty(_areasPremises, 'Холл 2', '2,46'), _defineProperty(_areasPremises, 'Кухня', '14,97'), _defineProperty(_areasPremises, 'Санузел', '1,75'), _defineProperty(_areasPremises, 'Санузел 2', '2,60'), _defineProperty(_areasPremises, 'Лоджия', '4,34'), _defineProperty(_areasPremises, '\u041B\u043E\u0434\u0436\u0438\u044F', '4,44'), _areasPremises),
						index: 10
				}],

				selectedApartment: [{
						areaTotal: '38,08',
						value: '1 466 000',
						img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
						imgInfo: 'img/_apartment-layout/1/1.jpg',
						alt: '1-комнатная квартира',
						rooms: 1,
						section: 2,
						number: 6,
						floor: 2,
						areasPremises: {
								'Гостиная': '15,09',
								'Холл': '4,44',
								'Кухня': '8,09',
								'Санузел': '3,80',
								'Лоджия': '4,29'
						},
						index: 0
				}],

				decoration: {
						title: 'Черновая отделка от застройщика включает в себя:',
						list: ['внутреннее утепление наружных конструкций пенополиуретаном;', 'штукатурка капитальных (наружных) стен;', 'электропроводка – ввод в квартиру со счетчиком без разводки;', 'стояки канализации, горячего и холодного водоснабжения; ', 'система отопления;', 'застекленные пластиковые оконные блоки;', 'деревянная входная дверь (временная);', 'электрический счетчик; ', 'газовый счетчик;', 'гидроизоляция санузлов.']
				},

				visible: false
		},

		methods: {
				changeOffset: function changeOffset(val) {
						this.offset += val;
						if (this.offset > this.sortedLayouts.length) {
								this.offset = this.sortedLayouts.length;
						} else if (this.offset < 0) {
								this.offset = 0;
						}
				},
				changeLayoutOptions: function changeLayoutOptions(index) {
						this.sortedLayouts = this.layouts.filter(filterByRooms);
						this.offset = 0;
						this.options.forEach(function (option) {
								option.isActive = false;
						});
						this.options[index].isActive = true;

						function filterByRooms(item) {
								return item.rooms === index + 1;
						};
				},
				transferCostToCalculator: function transferCostToCalculator(val) {
						return section__calculator.calculatorValues['apartment-price'].initialValue = val.split(' ').join('');
				},
				showInformationAboutApartment: function showInformationAboutApartment(index) {
						this.selectedApartment = this.layouts.slice(index, index + 1);
						this.visible = true;
				}
		},

		computed: {
				oneRoomsApartments: function oneRoomsApartments() {
						return this.layouts.filter(filterByOneRooms);

						function filterByOneRooms(item) {
								return item.rooms === 1;
						};
				},

				btnNextDisabled: function btnNextDisabled() {
						return this.offset + this.perPage >= this.sortedLayouts.length;
				},

				btnPrevDisabled: function btnPrevDisabled() {
						return this.offset <= 0;
				}
		},
		mounted: function mounted() {
				this.sortedLayouts = this.oneRoomsApartments;
		}
});
// section__apartment.sortedLayouts = section__apartment.oneRoomsApartments;
var section__builder = new Vue({
		el: '#builder',
		data: {
				titleLeft: '\u041D\u043E\u0432\u0430\u044F \u0421\u0430\u043C\u0430\u0440\u0430',
				titleRight: '\u044D\u0442\u043E',
				dash: '—',
				contentInfo: ['Полноценная высокоэтажная застройка', 'Высокое качество домов (стены 1.5, 2 и 2.5 кирпича)', 'Район, рассчитанный на 26000 жильцов', 'Крупные социальные и коммерческие инфраструктуры', 'Экологически чистый уголок с «зелёной» зоной в черте города', 'Надёжные инженерные коммуникации на весь микрорайон'],
				watermarkFirst: 'Качество',
				watermarkSecond: 'гарантируем!'

		},
		computed: {}
});
var section__calculator = new Vue({
		el: '#calculator',
		data: {
				title: 'Калькулятор ипотеки',
				calculatorValues: {
						'apartment-price': {
								initialValue: 1300000,
								minValue: 1300000,
								maxValue: 4000000,
								step: 10000,
								name: 'apartment-price',
								label: 'Стоимость квартиры',
								labelMinValue: '1 300 000',
								labelMaxValue: '4 000 000',
								unit: '₽',
								usedAgain: false
						},
						'credit-term': {
								initialValue: 10,
								minValue: 1,
								maxValue: 30,
								step: 1,
								name: 'credit-term',
								label: 'Срок кредита',
								labelMinValue: '1',
								labelMaxValue: '30',
								unit: '',
								usedAgain: true
						},
						'initial-fee': {
								initialValue: 260000,
								minValue: 260000,
								maxValue: 800000,
								step: 100,
								name: 'initial-fee',
								label: 'Первоначальный взнос',
								labelMinValue: '20%',
								labelMaxValue: '100%',
								unit: '₽',
								usedAgain: false
						},
						'loan-rate': {
								initialValue: 10,
								minValue: 6,
								maxValue: 16,
								step: .1,
								name: 'loan-rate',
								label: 'Ставка по кредиту',
								labelMinValue: '6',
								labelMaxValue: '16',
								unit: '%',
								usedAgain: true
						}
				},
				creditAmountBlock: {
						initialValue: '',
						label: 'Сумма кредита',
						unit: '₽',
						name: 'credit-amount'
				},
				perMountlyBlock: {
						initialValue: '',
						label: 'Ежемесячный платеж',
						unit: '₽',
						name: 'per-mountly'
				},
				overpaymentAmountBlock: {
						initialValue: '',
						label: 'Сумма переплаты',
						unit: '₽',
						name: 'overpayment-amount'
				},
				policy: 'Ипотечный калькулятор является ориентировочным и не является публичной офертой. При расчете не учитываются возможные дополнительные платежи, например, страхование объекта недвижимости, страхование жизни и здоровья заемщика и т.п'
		},

		methods: {},
		computed: {
				// initialFee() {
				//   let price = this.calculatorValues['apartment-price'].initialValue; // перенесено в updated
				//   let initFee = this.calculatorValues['initial-fee'].initialValue;
				//   let minFee = this.calculatorValues['initial-fee'].minValue;
				//   let maxFee = this.calculatorValues['initial-fee'].maxValue;
				//   this.calculatorValues['initial-fee'].minValue = price * 0.2;
				//   this.calculatorValues['initial-fee'].maxValue = price - 500000;
				//   if (initFee < minFee) {
				//     this.calculatorValues['initial-fee'].initialValue = minFee;
				//   } else if (initFee > maxFee) {
				//     this.calculatorValues['initial-fee'].initialValue = maxFee;
				//   }
				// },

				creditAmount: function creditAmount() {
						var priceInit = this.calculatorValues['apartment-price'].initialValue;
						var feeInit = this.calculatorValues['initial-fee'].initialValue;

						this.creditAmountBlock.initialValue = priceInit - feeInit;

						if (parseInt(this.creditAmountBlock.initialValue) > 3200000) {
								return this.creditAmountBlock.initialValue = 3200000;
						}

						return this.creditAmountBlock.initialValue;
				},
				declinationOfYear: function declinationOfYear() {
						var value = parseInt(this.calculatorValues['credit-term'].initialValue);
						var spelling = '';

						if (value === 1 || value === 21) {
								spelling = 'Год';
						} else if (2 <= value && value <= 4 || 22 <= value && value <= 24) {
								spelling = 'Года';
						} else {
								spelling = 'Лет';
						}
						this.calculatorValues['credit-term'].unit = spelling;
				},
				calculatorResultArray: function calculatorResultArray() {
						var arr = [];

						for (var key in this.calculatorValues) {
								if (this.calculatorValues[key].usedAgain) {
										arr.push(this.calculatorValues[key]);
								}
						};
						arr.unshift(this.creditAmountBlock);
						arr.push(this.perMountlyBlock);
						arr.push(this.overpaymentAmountBlock);
						return arr;
				},
				perMountly: function perMountly() {
						var creditAmount = this.creditAmount;
						var creditTerm = this.calculatorValues['credit-term'].initialValue * 12;
						var loanRatePerMo = this.calculatorValues['loan-rate'].initialValue / 12 / 100;
						var qt = Math.pow(1 + loanRatePerMo, creditTerm);
						var monthlyPayment = Math.round(creditAmount * qt * loanRatePerMo / (qt - 1));

						this.perMountlyBlock.initialValue = monthlyPayment;
						return monthlyPayment;
				},
				overpaymentAmount: function overpaymentAmount() {
						var overpayment = this.perMountly * this.calculatorValues['credit-term'].initialValue * 12 - this.creditAmount;

						this.overpaymentAmountBlock.initialValue = overpayment;
						return overpayment;
				}
		},

		updated: function updated() {

				var price = this.calculatorValues['apartment-price'].initialValue;
				var initFee = this.calculatorValues['initial-fee'].initialValue;
				var minFee = this.calculatorValues['initial-fee'].minValue;
				var maxFee = this.calculatorValues['initial-fee'].maxValue;
				this.calculatorValues['initial-fee'].minValue = price * 0.2;
				this.calculatorValues['initial-fee'].maxValue = price - 500000;
				if (initFee < minFee) {
						this.calculatorValues['initial-fee'].initialValue = minFee;
				} else if (initFee > maxFee) {
						this.calculatorValues['initial-fee'].initialValue = maxFee;
				} else {
						this.calculatorValues['initial-fee'].initialValue = this.calculatorValues['initial-fee'].initialValue;
				};

				this.declinationOfYear;
		}
});
var section__callback = new Vue({
		el: '#callback',
		data: {
				placeholderName: 'Имя',
				placeholderPhone: 'Телефон',
				btnValue: 'Перезвоните мне'
		}
});

var section__callback_calc = new Vue({
		el: '#callback_calc',
		data: {
				headerTitle: 'Получить точный расчет ипотеки',
				headerDesc: 'Для более точного расчета ипотечного кредитования оставьте свои контактные данные и получите расчет',
				placeholderName: 'Имя',
				placeholderPhone: 'Телефон',
				btnValue: 'Получить расчет'
		}
});
var footer = new Vue({
		el: '#footer',
		data: {
				logo: 'S.N.S',
				phone: {
						text: '+7 (846) 229-59-84',
						link: 'tel:+78462295984'
				},
				docs: {
						text: 'Проектная документация',
						link: 'https://www.ya.ru'
				},
				creditInformation: ['Кредит предоставляется на приобретение у юридического лица готового жилого помещения (первый собственник) , жилого помещения на этапе строительства (в соответствии с 214-ФЗ), а также на рефинансирование кредитов, выданных в период действия программы на вышеуказанные цели. Строящийся объект должен быть аккредитован в ВТБ (ПАО).', 'Заемщиком может выступить физическое лицо (гражданин РФ), имеющий второго и/или третьего ребенка (имеющего гражданство РФ) с датой рождения начиная с 01.01.2018 и не позднее 31.12.2022 г. включительно.', 'Процентная ставка в рублях РФ - 6% годовых на срок субсидирования, утвержденный параметрами государственной программы в рамках Постановления Правительства РФ №1711 от 30.12.2017 г.', 'Срок субсидирования с даты предоставления кредита:', '- в течение 3 лет в связи с рождением в период действия программы у ипотечного заемщика второго ребенка,', '- в течение 5 лет – в связи с рождением в период действия программы у ипотечного заемщика третьего ребенка,', 'При рождении в период действия программы у ипотечного заемщика третьего ребенка в течение срока предоставления субсидии, полученной в связи с рождением второго ребенка, срок предоставления субсидии продлевается на 5 лет с даты окончания срока предоставления субсидии в связи с рождением второго ребенка.', 'При рождении в период действия программы у ипотечного заемщика третьего ребенка после окончания срока предоставления субсидии, полученной в связи с рождением второго ребенка, предоставление субсидии возобновляется на 5 лет с даты рождения третьего ребенка.', 'По окончании периода субсидирования ставка устанавливается в размере не более ключевой ставки ЦБ РФ на дату предоставления кредита, увеличенной на 2 п.п.', 'Валюта кредита – рубли РФ. Срок кредитования – до 362 мес. (30 лет). Минимальная сумма кредита - 500 тыс. рублей. Максимальная сумма кредита – 8 млн.руб. для приобретения жилья, расположенного в Москва, Московской области, Санкт-Петербурге, Ленинградской области, 3 млн. руб. – в иных регионах.Заемщик должен оплатить за счет собственных средств не менее 20 % стоимости приобретаемого жилого помещения. Комиссии за оформление кредита отсутствуют.', 'Досрочное погашение кредита - без ограничений и штрафов.', 'ВТБ (ПАО) оказывает исключительно банковские услуги и не участвует в строительстве объектов или продаже недвижимости. Условия действительны на 15.01.2019 г. ВТБ (ПАО). Генеральная лицензия Банка России № 1000. Реклама.', 'Проектная декларация размещена на сайте www.new-samara.ru.'],

				policyText: 'Политика конфиденциальности.'

		},
		methods: {
				foo: function foo() {
						document.body.style.overflowY = "hidden";
						privacyPolicy.visible = true;
				}
		},

		computed: {
				copyright: function copyright() {
						var dateCopy = new Date().getFullYear();
						return dateCopy + ' \u0433\u043E\u0434';
				}
		}
});
var section__gallery = new Vue({
		el: '#gallery',
		data: {
				title: 'Фотогалерея',
				gallery: [{
						thumb: 'img/_gallery/thumb/1.png',
						full: 'img/_gallery/full/1.png'
				}, {
						thumb: 'img/_gallery/thumb/2.png',
						full: 'img/_gallery/full/2.png'
				}, {
						thumb: 'img/_gallery/thumb/3.png',
						full: 'img/_gallery/full/3.png'
				}, {
						thumb: 'img/_gallery/thumb/4.png',
						full: 'img/_gallery/full/4.png'
				}, {
						thumb: 'img/_gallery/thumb/5.png',
						full: 'img/_gallery/full/5.png'
				}, {
						thumb: 'img/_gallery/thumb/6.png',
						full: 'img/_gallery/full/6.png'
				}, {
						thumb: 'img/_gallery/thumb/7.png',
						full: 'img/_gallery/full/7.png'
				}, {
						thumb: 'img/_gallery/thumb/8.png',
						full: 'img/_gallery/full/8.png'
				}, {
						thumb: 'img/_gallery/thumb/9.png',
						full: 'img/_gallery/full/9.png'
				}, {
						thumb: 'img/_gallery/thumb/10.png',
						full: 'img/_gallery/full/10.png'
				}, {
						thumb: 'img/_gallery/thumb/11.png',
						full: 'img/_gallery/full/11.png'
				}, {
						thumb: 'img/_gallery/thumb/12.png',
						full: 'img/_gallery/full/12.png'
				}, {
						thumb: 'img/_gallery/thumb/13.png',
						full: 'img/_gallery/full/13.png'
				}, {
						thumb: 'img/_gallery/thumb/14.png',
						full: 'img/_gallery/full/14.png'
				}, {
						thumb: 'img/_gallery/thumb/15.png',
						full: 'img/_gallery/full/15.png'
				}, {
						thumb: 'img/_gallery/thumb/16.png',
						full: 'img/_gallery/full/16.png'
				}, {
						thumb: 'img/_gallery/thumb/17.png',
						full: 'img/_gallery/full/17.png'
				}, {
						thumb: 'img/_gallery/thumb/18.png',
						full: 'img/_gallery/full/18.png'
				}, {
						thumb: 'img/_gallery/thumb/19.png',
						full: 'img/_gallery/full/19.png'
				}, {
						thumb: 'img/_gallery/thumb/20.png',
						full: 'img/_gallery/full/20.png'
				}, {
						thumb: 'img/_gallery/thumb/21.png',
						full: 'img/_gallery/full/21.png'
				}, {
						thumb: 'img/_gallery/thumb/22.png',
						full: 'img/_gallery/full/22.png'
				}, {
						thumb: 'img/_gallery/thumb/23.png',
						full: 'img/_gallery/full/23.png'
				}, {
						thumb: 'img/_gallery/thumb/24.png',
						full: 'img/_gallery/full/24.png'
				}, {
						thumb: 'img/_gallery/thumb/25.png',
						full: 'img/_gallery/full/25.png'
				}, {
						thumb: 'img/_gallery/thumb/26.png',
						full: 'img/_gallery/full/26.png'
				}, {
						thumb: 'img/_gallery/thumb/27.png',
						full: 'img/_gallery/full/27.png'
				}, {
						thumb: 'img/_gallery/thumb/28.png',
						full: 'img/_gallery/full/28.png'
				}, {
						thumb: 'img/_gallery/thumb/29.png',
						full: 'img/_gallery/full/29.png'
				}, {
						thumb: 'img/_gallery/thumb/30.png',
						full: 'img/_gallery/full/30.png'
				}, {
						thumb: 'img/_gallery/thumb/31.png',
						full: 'img/_gallery/full/31.png'
				}, {
						thumb: 'img/_gallery/thumb/32.png',
						full: 'img/_gallery/full/32.png'
				}, {
						thumb: 'img/_gallery/thumb/33.png',
						full: 'img/_gallery/full/33.png'
				}, {
						thumb: 'img/_gallery/thumb/34.png',
						full: 'img/_gallery/full/34.png'
				}, {
						thumb: 'img/_gallery/thumb/35.png',
						full: 'img/_gallery/full/35.png'
				}, {
						thumb: 'img/_gallery/thumb/36.png',
						full: 'img/_gallery/full/36.png'
				}]
		},
		computed: {}
});

var section__hero = new Vue({
		el: '#hero',
		data: {
				slides: ['img/_hero/hero__slide_1.jpg', 'img/_hero/hero__slide_2.jpg', 'img/_hero/hero__slide_3.jpg', 'img/_hero/hero__slide_4.jpg']
		}
});

$('.hero__slider').slick({
		dots: false,
		arrow: false,
		autoplay: false,
		infinite: true,
		autoplaySpeed: 8000,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-prev slider__nav slider__nav_prev"><img src="img/_hero/slider__arrow_left.png" alt="Prev Slide" class="slider__nav_img"></button>',
		nextArrow: '<button type="button" class="slick-next slider__nav slider__nav_next"><img src="img/_hero/slider__arrow_right.png" alt="Next Slide" class="slider__nav_img"></button>'
});

var section__map = new Vue({
		el: '#map',
		data: {
				title: 'Создаем инфраструктуру'
		}
});
$(function () {
		var pointTyps = //список всех типов объектов
		[{
				type: 1,
				src: 'img/map__icons/point1.png',
				caption: "Детские сады"
		}, {
				type: 2,
				src: 'img/map__icons/point2.png',
				caption: "Школы"
		}, {
				type: 3,
				src: 'img/map__icons/point3.png',
				caption: "Поликлиники"
		}, {
				type: 4,
				src: 'img/map__icons/point4.png',
				caption: "Парки"
		}, {
				type: 5,
				src: 'img/map__icons/point5.png',
				caption: "Торговые центры"
		}];

		var pointList = //массив координат и типов объектов
		[{
				coordx: 53.317555,
				coordy: 50.285491,
				type: 4,
				text: "Парк-отель \"Озерки\""
		}, {
				coordx: 53.325808,
				coordy: 50.30233,
				type: 5,
				text: "Мега, семейно-торговый центр"
		}, {
				coordx: 53.29899,
				coordy: 50.281768,
				type: 5,
				text: "Теремок, торговый дом"
		}, {
				coordx: 53.299122,
				coordy: 50.277386,
				type: 3,
				text: "Стоматологическая поликлиника, Городская больница №7"
		}, {
				coordx: 53.302534,
				coordy: 50.280207,
				type: 3,
				text: "Поликлиника, Городская больница №7"
		}, {
				coordx: 53.322762,
				coordy: 50.311021,
				type: 1,
				text: "Детский сад №1"
		}, {
				coordx: 53.317292,
				coordy: 50.311981,
				type: 1,
				text: "Детский сад №2"
		}, {
				coordx: 53.315086,
				coordy: 50.310001,
				type: 1,
				text: "Детский сад №3"
		}, {
				coordx: 53.303321,
				coordy: 50.267188,
				type: 1,
				text: "Детский сад №257"
		}, {
				coordx: 53.301215,
				coordy: 50.276431,
				type: 1,
				text: "Детский сад №411"
		}, {
				coordx: 53.299272,
				coordy: 50.279263,
				type: 1,
				text: "Детский сад №208"
		}, {
				coordx: 53.297579,
				coordy: 50.283093,
				type: 1,
				text: "Детский сад №33"
		}, {
				coordx: 53.298522,
				coordy: 50.284418,
				type: 1,
				text: "Детский сад №257"
		}, {
				coordx: 53.303831,
				coordy: 50.271388,
				type: 2,
				text: "Школа №33"
		}, {
				coordx: 53.296768,
				coordy: 50.289735,
				type: 2,
				text: "Школа №156"
		}, {
				coordx: 53.296916,
				coordy: 50.279687,
				type: 2,
				text: "Школа №122"
		}, {
				coordx: 53.302935,
				coordy: 50.285776,
				type: 3,
				text: "Городская больница №7"
		}, {
				coordx: 53.299886,
				coordy: 50.283936,
				type: 2,
				text: "Школа №103"
		}, {
				coordx: 53.310454,
				coordy: 50.286441,
				type: 1,
				text: "Детский сад. ясли"
		}];

		var pointicon = function pointicon(type) {
				//определение иконки в зависимости от типа
				var result = '';
				pointTyps.forEach(function (item, i, arr) {
						if (type == item.type) {
								result = item.src;
						}
				});
				return result;
		};

		ymaps.ready(function () {
				if ($('#map-ya').length > 0) {
						var myMap = new ymaps.Map('map-ya', {
								center: [53.309498, 50.287493],
								zoom: 14,
								controls: []
						});
						myMap.behaviors.disable('scrollZoom');

						var mapPoints = []; //массив яндекс точек

						var pointGeneral = new ymaps.Placemark([53.309498, 50.287493], {
								hintContent: '',
								balloonContent: 'Жилой комплекс'
						}, {
								iconLayout: 'default#image',
								iconImageHref: 'img/map__icons/general.png',
								iconImageSize: [80, 76]
						});
						var pointMega = new ymaps.Placemark([53.3150317, 50.2947756], {
								hintContent: '',
								balloonContent: 'Мега'
						}, {
								iconLayout: 'default#image',
								iconImageHref: 'img/map__icons/mega.png',
								iconImageSize: [80, 76]
						});
						var pointFirework = new ymaps.Placemark([53.306051, 50.278459], {
								hintContent: '',
								balloonContent: 'Салют, лыжная база'
						}, {
								iconLayout: 'default#image',
								iconImageHref: 'img/map__icons/point6.png',
								iconImageSize: [37, 43]
						});

						pointList.forEach(function (item, i, arr) {
								var point = new ymaps.Placemark([item.coordx, item.coordy], {
										hintContent: '',
										balloonContent: item.text
								}, {
										iconLayout: 'default#image',
										iconImageHref: pointicon(item.type),
										iconImageSize: [37, 43]
								});
								var telement = {
										point: point,
										type: item.type
								};
								mapPoints.push(telement);
						});

						//ставим точки на карту
						mapPoints.forEach(function (item, i, arr) {
								myMap.geoObjects.add(item.point);
						});
						myMap.geoObjects.add(pointGeneral);
						myMap.geoObjects.add(pointMega);
						myMap.geoObjects.add(pointFirework);

						var checkPoints = function checkPoints() {
								//событие на чекбоксы
								myMap.geoObjects.each(function (geoObject) {
										myMap.geoObjects.remove(geoObject);
								}); //удалить все с карты
								var checkedTypes = [];
								//ищем чекнутые типы:
								$('.map-ya__checkbox:checked').each(function () {
										checkedTypes.push($(this).attr('zdata-type'));
								});

								var checkInArray = function checkInArray(type) {
										var flag = false;
										checkedTypes.forEach(function (item, i, arr) {
												if (type == item) {
														flag = true;
												}
										});
										return flag;
								};

								mapPoints.forEach(function (item, i, arr) {
										if (checkInArray(item.type)) {
												myMap.geoObjects.add(item.point);
										}
								});
								myMap.geoObjects.add(pointGeneral);
								myMap.geoObjects.add(pointMega);
								myMap.geoObjects.add(pointFirework);
						};

						var generateControls = function generateControls() {
								var element = $('<div/>', {
										class: 'map-ya__points',
										text: ''
								});
								element.append('<h3 class="map-ya__points_title">Инфраструктура</h3>');
								pointTyps.forEach(function (item, i, arr) {
										element.append('<input type="checkbox" class="map-ya__checkbox" checked="checked" zdata-type="' + item.type + '" id="map-ya__checkbox_' + item.type + '">\n\t\t\t\t\t\t <label class="map-ya__checkbox_label" for="map-ya__checkbox_' + item.type + '">' + item.caption + '</label>');
								});
								element.prependTo('#map-ya');
								$('.map-ya__checkbox').change(function () {
										checkPoints();
								});
						};

						generateControls();
				}
		});
});
var privacyPolicy = new Vue({
		el: '#privacy-policy',
		data: {
				policyTitle: 'Соглашение на обработку персональных данных',
				policyText: ['Данное соглашение об обработке персональных данных разработано в соответствии с законодательством Российской Федерации.', 'Все лица заполнившие сведения, составляющие персональные данные на данном сайте, а также разместившие иную информацию обозначенными действиями подтверждают свое согласие на обработку персональных данных и их передачу оператору обработки персональных данных.', 'Под персональными данными Гражданина понимается нижеуказанная информация:', 'общая информация (Имя, адрес электронной почты, телефон); посетители сайта направляют свои персональные данные для получения консультации а так же доступа к бесплатным материалам сайта.', 'Гражданин, принимая настоящее Соглашение, выражают свою заинтересованность и полное согласие, что обработка их персональных данных может включать в себя следующие действия: сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, уничтожение.', 'Гражданин гарантирует: информация, им предоставленная, является полной, точной и достоверной; при предоставлении информации не нарушается действующее законодательство Российской Федерации, законные права и интересы третьих лиц; вся предоставленная информация заполнена Гражданина в отношении себя лично.', 'Сайт носит исключительно информационный характер, и ни при каких условиях не является публичной офертой, определяемой положениями пункта 2 статьи 437 Гражданского кодекса Российской Федерации.'],

				visible: false

		},
		methods: {
				closePolicy: function closePolicy() {
						this.visible = false;
						document.body.style.overflowY = "auto";
				}
		}
});
$(function () {
		/*
   ** section__gallery
   */
		$('#lightgallery').lightGallery({
				thumbnail: true,
				selector: '.gallery__item',
				download: false
		});

		var hideImages = function () {
				if ($(window).width() < 576) {
						$('.gallery__item:gt(17)').css('display', 'none');
				};
				$(window).resize(function () {
						if ($(window).width() < 576) {
								$('.gallery__item:gt(17)').css('display', 'none');
						} else if ($(window).width() > 576) {
								$('.gallery__item:gt(17)').css('display', 'inline-block');
						}
				});
		}();
		/*
   ** /section__gallery
   */

		/*
   ** section__calculator
   */
		$('.value-change__input_text').on('change', function () {
				var arrayValues = section__calculator.calculatorValues;

				for (var key in arrayValues) {
						var elemInitVal = arrayValues[key].initialValue;
						var elemMaxVal = arrayValues[key].maxValue;
						var elemMinVal = arrayValues[key].minValue;

						// if (parseInt(elemInitVal) > parseInt(elemMaxVal) || parseInt(elemInitVal) < parseInt(elemMinVal)) {  // заменено модификатором .number
						//   arrayValues[key].initialValue = String(arrayValues[key].initialValue).replace(/[^0-9]/gim, '');
						//   arrayValues[key].initialValue = elemMaxVal;
						// }
						if (elemInitVal > elemMaxVal) {
								arrayValues[key].initialValue = elemMaxVal;
						} else if (elemInitVal < elemMinVal) {
								arrayValues[key].initialValue = elemMinVal;
						}
				}
		});

		var transformCreditAmountTotal = function () {
				$('.credit-amount__total, .result__credit-amount .result__value').text(formatStr(section__calculator.creditAmount));

				$('.value-change__input, .value-change__input_text').on('change', function () {
						$('.credit-amount__total, .result__credit-amount .result__value').text(formatStr(section__calculator.creditAmount));
				});
		}();

		var transformPerMountly = function () {
				$('.result__per-mountly .result__value').text(formatStr(section__calculator.perMountly));

				$('.value-change__input, .value-change__input_text').on('change', function () {
						$('.result__per-mountly .result__value').text(formatStr(section__calculator.perMountly));
				});
		}();

		var transformOverpaymentAmount = function () {
				$('.result__overpayment-amount .result__value').text(formatStr(section__calculator.overpaymentAmount));

				$('.value-change__input, .value-change__input_text').on('change', function () {
						$('.result__overpayment-amount .result__value').text(formatStr(section__calculator.overpaymentAmount));
				});
		}();

		/*
   ** /section__calculator
   */

		function formatStr(str) {
				return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		};

		$('.slowly').on('click', function (event) {
				event.preventDefault();
				var id = $(this).attr('href'),
				    top = $(id).offset().top;
				$('body,html').animate({
						scrollTop: top
				}, 600);
		});
});