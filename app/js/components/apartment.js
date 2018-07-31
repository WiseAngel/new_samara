let section__apartment = new Vue({
	el: '#apartment',
	data: {
		title: 'Изучите планировки',
		offset: 0,
		perPage: 2,
		sortedLayouts: [],
		options: [{
				option: '1-комнатный квартиры',
				rooms: 1,
				isActive: true,
			},
			{
				option: '2-комнатный квартиры',
				rooms: 2,
				isActive: false,
			},
			{
				option: '3-комнатный квартиры',
				rooms: 3,
				isActive: false,
			}
		],

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
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '15,09',
					'Холл': '4,44',
					'Кухня': '8,09',
					'Санузел': '3,80',
					'Лоджия': '4,29'
				},
				index: 0,
			},
			{
				areaTotal: '37,86',
				value: '1 455 000',
				img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
				imgInfo: 'img/_apartment-layout/1/2.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 3,
				number: 149,
				floor: 9,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '15,09',
					'Холл': '4,44',
					'Кухня': '8,09',
					'Санузел': '3,80',
					'Лоджия': '4,29'
				},
				index: 1,
			},
			{
				areaTotal: '37,86',
				value: '1 476 000',
				img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
				imgInfo: 'img/_apartment-layout/1/3.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 2,
				number: 4,
				floor: 2,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '19,03',
					'Холл': '2,97',
					'Кухня': '8,04',
					'Санузел': '3,78',
					'Лоджия': '4,26'
				},
				index: 2,
			},
			{
				areaTotal: '39,53',
				value: '1 522 000',
				img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
				imgInfo: 'img/_apartment-layout/1/4.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 2,
				number: 73,
				floor: 10,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '18,95',
					'Холл': '3,57',
					'Кухня': '9,00',
					'Санузел': '3,84',
					'Лоджия': '4,17'
				},
				index: 3,
			},
			{
				areaTotal: '38,18',
				value: '1 567 000',
				img: 'img/_apartment-layout/apartment-layout__1room_5.jpg',
				imgInfo: 'img/_apartment-layout/1/5.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 3,
				number: 83,
				floor: 2,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '14,91',
					'Холл': '3,57',
					'Кухня': '9,00',
					'Санузел': '3,84',
					'Лоджия': '4,08'
				},
				index: 4,
			},
			{
				areaTotal: '38,84',
				value: '1 679 000',
				img: 'img/_apartment-layout/apartment-layout__1room_6.jpg',
				imgInfo: 'img/_apartment-layout/1/6.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 2,
				number: 52,
				floor: 7,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '19,03',
					'Холл': '2,97',
					'Кухня': '8,04',
					'Санузел': '3,78',
					'Лоджия': '4,26'
				},
				index: 5,
			},
			{
				areaTotal: '38,84',
				value: '1 500 000',
				img: 'img/_apartment-layout/apartment-layout__1room_7.jpg',
				imgInfo: 'img/_apartment-layout/1/1.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 4,
				number: 64,
				floor: 7,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '15,09',
					'Холл': '4,44',
					'Кухня': '8,09',
					'Санузел': '3,80',
					'Лоджия': '4,29'
				},
				index: 6,
			},
			{
				areaTotal: '39,53',
				value: '1 522 000',
				img: 'img/_apartment-layout/apartment-layout__1room_8.jpg',
				imgInfo: 'img/_apartment-layout/1/2.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				section: 4,
				number: 67,
				floor: 8,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '15,09',
					'Холл': '4,44',
					'Кухня': '8,09',
					'Санузел': '3,80',
					'Лоджия': '4,29'
				},
				index: 7,
			},
			{
				areaTotal: '59,46',
				value: '2 378 000',
				img: 'img/_apartment-layout/apartment-layout__2room_1.jpg',
				imgInfo: 'img/_apartment-layout/2/1.jpg',
				alt: '2-комнатная квартира',
				rooms: 2,
				section: 4,
				number: 63,
				floor: 8,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '20,60',
					'Спальня': '14,50',
					'Холл': '6,81',
					'Кухня': '9,00',
					'Санузел': '4,38',
					'Лоджия': '4,17'
				},
				index: 8,
			},
			{
				areaTotal: '63,39',
				value: '2 401 000',
				img: 'img/_apartment-layout/apartment-layout__2room_2.jpg',
				imgInfo: 'img/_apartment-layout/2/2.jpg',
				alt: '2-комнатная квартира',
				rooms: 2,
				section: 11,
				number: 3,
				floor: 1,
				btnCalc: '#calculator',
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
				index: 9,
			},
			{
				areaTotal: '86,56',
				value: '3 401 000',
				img: 'img/_apartment-layout/apartment-layout__3room_1.jpg',
				imgInfo: 'img/_apartment-layout/3/1.jpg',
				alt: '3-комнатная квартира',
				rooms: 3,
				section: 2,
				number: 80,
				floor: 10,
				btnCalc: '#calculator',
				areasPremises: {
					'Гостиная': '16,24',
					'Спальня': '14,74',
					'Спальня': '11,31',
					'Холл': '11,19',
					'Холл 2': '2,46',
					'Кухня': '14,97',
					'Санузел': '1,75',
					'Санузел 2': '2,60',
					'Лоджия': '4,34',
					'Лоджия': '4,44'
				},
				index: 10,
			},
		],

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
			btnCalc: '#calculator',
			areasPremises: {
				'Гостиная': '15,09',
				'Холл': '4,44',
				'Кухня': '8,09',
				'Санузел': '3,80',
				'Лоджия': '4,29'
			},
			index: 0,
		}],

		decoration: {
			title: 'Черновая отделка от застройщика включает в себя:',
			list: [
				'внутреннее утепление наружных конструкций пенополиуретаном;',
				'штукатурка капитальных (наружных) стен;',
				'электропроводка – ввод в квартиру со счетчиком без разводки;',
				'стояки канализации, горячего и холодного водоснабжения; ',
				'система отопления;',
				'застекленные пластиковые оконные блоки;',
				'деревянная входная дверь (временная);',
				'электрический счетчик; ',
				'газовый счетчик;',
				'гидроизоляция санузлов.'
			]
		},

		visible: false
	},

	methods: {
		changeOffset(val) {
			this.offset += val;
			if (this.offset > this.sortedLayouts.length) {
				this.offset = this.sortedLayouts.length;
			} else if (this.offset < 0) {
				this.offset = 0;
			}
		},

		changeLayoutOptions(index) {
			this.sortedLayouts = this.layouts.filter(filterByRooms);
			this.offset = 0;
			this.options.forEach(option => {
				option.isActive = false;
			});
			this.options[index].isActive = true;

			function filterByRooms(item) {
				return item.rooms === index + 1;
			};
		},
		transferCostToCalculator(val) {
			return section__calculator.calculatorValues['apartment-price'].initialValue = val.split(' ').join('');
		},

		showInformationAboutApartment(index) {
			this.selectedApartment = this.layouts.slice(index, index + 1)
			this.visible = true;
		},
	},

	computed: {
		oneRoomsApartments: function () {
			return this.layouts.filter(filterByOneRooms);

			function filterByOneRooms(item) {
				return item.rooms === 1;
			};
		},

		btnNextDisabled: function () {
			return this.offset + this.perPage >= this.sortedLayouts.length;
		},

		btnPrevDisabled: function () {
			return this.offset <= 0;
		},
	},
	mounted() {
		this.sortedLayouts = this.oneRoomsApartments;
	},
});
// section__apartment.sortedLayouts = section__apartment.oneRoomsApartments;