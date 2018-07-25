let section__apartment = new Vue({
	el: '#apartment',
	data: {
		title: 'Изучите планировки',
		offset: 0,
		perPage: 4,
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
				area: '38,08',
				value: '1 466 000',
				img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '37,86',
				value: '1 455 000',
				img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'#calculator',
				btnCalc:'https://www.google.com/',
			},
			{
				area: '37,86',
				value: '1 476 000',
				img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '39,53',
				value: '1 522 000',
				img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '38,18',
				value: '1 567 000',
				img: 'img/_apartment-layout/apartment-layout__1room_5.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '38,84',
				value: '1 679 000',
				img: 'img/_apartment-layout/apartment-layout__1room_6.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '38,84',
				value: '1 500 000',
				img: 'img/_apartment-layout/apartment-layout__1room_7.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '39,53',
				value: '1 522 000',
				img: 'img/_apartment-layout/apartment-layout__1room_8.jpg',
				alt: '1-комнатная квартира',
				rooms: 1,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},

			{
				area: '59,46',
				value: '2 378 000',
				img: 'img/_apartment-layout/apartment-layout__2room_1.jpg',
				alt: '2-комнатная квартира',
				rooms: 2,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
			{
				area: '63,39',
				value: '2 401 000',
				img: 'img/_apartment-layout/apartment-layout__2room_2.jpg',
				alt: '2-комнатная квартира',
				rooms: 2,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},

			{
				area: '86,56',
				value: '3 401 000',
				img: 'img/_apartment-layout/apartment-layout__3room_1.jpg',
				alt: '3-комнатная квартира',
				rooms: 3,
				btnMore:'https://www.google.com/',
				btnCalc:'#calculator',
			},
		],
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
		transferCostToCalculator(val){
			return section__calculator.calculatorValues['apartment-price'].initialValue = val.split(' ').join('');
		}
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
		}
	},

});
section__apartment.sortedLayouts = section__apartment.oneRoomsApartments;