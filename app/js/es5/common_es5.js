'use strict';

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

	},

	methods: {},
	computed: {}
});
var section__apartment = new Vue({
	el: '#apartment',
	data: {
		title: 'Изучите планировки',
		offset: 0,
		perPage: 4,
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
			area: '38,08',
			value: '1 466 000',
			img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '37,86',
			value: '1 455 000',
			img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '37,86',
			value: '1 476 000',
			img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '39,53',
			value: '1 522 000',
			img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '38,18',
			value: '1 567 000',
			img: 'img/_apartment-layout/apartment-layout__1room_5.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '38,84',
			value: '1 679 000',
			img: 'img/_apartment-layout/apartment-layout__1room_6.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '38,84',
			value: '1 500 000',
			img: 'img/_apartment-layout/apartment-layout__1room_7.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '39,53',
			value: '1 522 000',
			img: 'img/_apartment-layout/apartment-layout__1room_8.jpg',
			alt: '1-комнатная квартира',
			rooms: 1
		}, {
			area: '59,46',
			value: '2 378 000',
			img: 'img/_apartment-layout/apartment-layout__2room_1.jpg',
			alt: '2-комнатная квартира',
			rooms: 2
		}, {
			area: '63,39',
			value: '2 401 000',
			img: 'img/_apartment-layout/apartment-layout__2room_2.jpg',
			alt: '2-комнатная квартира',
			rooms: 2
		}, {
			area: '86,56',
			value: '3 401 000',
			img: 'img/_apartment-layout/apartment-layout__3room_1.jpg',
			alt: '3-комнатная квартира',
			rooms: 3
		}]
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
			console.log(this.sortedLayouts);
			console.log(index);
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
	}

});
section__apartment.sortedLayouts = section__apartment.oneRoomsApartments;
var section__builder = new Vue({
	el: '#builder',
	data: {
		titleLeft: '\u041D\u043E\u0432\u0430\u044F \u0421\u0430\u043C\u0430\u0440\u0430',
		titleRight: '\u044D\u0442\u043E',
		dash: '—'
	},
	computed: {}
});
var section__gallery = new Vue({
	el: '#gallery',
	data: {
		title: 'Фотогалерея',
		gallery: [{
			thumb: 'img/_gallary/thumb/1.png',
			full: 'img/_gallary/full/1.png'
		}, {
			thumb: 'img/_gallary/thumb/2.png',
			full: 'img/_gallary/full/2.png'
		}, {
			thumb: 'img/_gallary/thumb/3.png',
			full: 'img/_gallary/full/3.png'
		}, {
			thumb: 'img/_gallary/thumb/4.png',
			full: 'img/_gallary/full/4.png'
		}, {
			thumb: 'img/_gallary/thumb/5.png',
			full: 'img/_gallary/full/5.png'
		}, {
			thumb: 'img/_gallary/thumb/6.png',
			full: 'img/_gallary/full/6.png'
		}, {
			thumb: 'img/_gallary/thumb/7.png',
			full: 'img/_gallary/full/7.png'
		}, {
			thumb: 'img/_gallary/thumb/8.png',
			full: 'img/_gallary/full/8.png'
		}, {
			thumb: 'img/_gallary/thumb/9.png',
			full: 'img/_gallary/full/9.png'
		}, {
			thumb: 'img/_gallary/thumb/10.png',
			full: 'img/_gallary/full/10.png'
		}, {
			thumb: 'img/_gallary/thumb/11.png',
			full: 'img/_gallary/full/11.png'
		}, {
			thumb: 'img/_gallary/thumb/12.png',
			full: 'img/_gallary/full/12.png'
		}, {
			thumb: 'img/_gallary/thumb/13.png',
			full: 'img/_gallary/full/13.png'
		}, {
			thumb: 'img/_gallary/thumb/14.png',
			full: 'img/_gallary/full/14.png'
		}, {
			thumb: 'img/_gallary/thumb/15.png',
			full: 'img/_gallary/full/15.png'
		}, {
			thumb: 'img/_gallary/thumb/16.png',
			full: 'img/_gallary/full/16.png'
		}, {
			thumb: 'img/_gallary/thumb/17.png',
			full: 'img/_gallary/full/17.png'
		}, {
			thumb: 'img/_gallary/thumb/18.png',
			full: 'img/_gallary/full/18.png'
		}, {
			thumb: 'img/_gallary/thumb/19.png',
			full: 'img/_gallary/full/19.png'
		}, {
			thumb: 'img/_gallary/thumb/20.png',
			full: 'img/_gallary/full/20.png'
		}, {
			thumb: 'img/_gallary/thumb/21.png',
			full: 'img/_gallary/full/21.png'
		}, {
			thumb: 'img/_gallary/thumb/22.png',
			full: 'img/_gallary/full/22.png'
		}, {
			thumb: 'img/_gallary/thumb/23.png',
			full: 'img/_gallary/full/23.png'
		}, {
			thumb: 'img/_gallary/thumb/24.png',
			full: 'img/_gallary/full/24.png'
		}, {
			thumb: 'img/_gallary/thumb/25.png',
			full: 'img/_gallary/full/25.png'
		}, {
			thumb: 'img/_gallary/thumb/26.png',
			full: 'img/_gallary/full/26.png'
		}, {
			thumb: 'img/_gallary/thumb/27.png',
			full: 'img/_gallary/full/27.png'
		}, {
			thumb: 'img/_gallary/thumb/28.png',
			full: 'img/_gallary/full/28.png'
		}, {
			thumb: 'img/_gallary/thumb/29.png',
			full: 'img/_gallary/full/29.png'
		}, {
			thumb: 'img/_gallary/thumb/30.png',
			full: 'img/_gallary/full/30.png'
		}, {
			thumb: 'img/_gallary/thumb/31.png',
			full: 'img/_gallary/full/31.png'
		}, {
			thumb: 'img/_gallary/thumb/32.png',
			full: 'img/_gallary/full/32.png'
		}, {
			thumb: 'img/_gallary/thumb/33.png',
			full: 'img/_gallary/full/33.png'
		}, {
			thumb: 'img/_gallary/thumb/34.png',
			full: 'img/_gallary/full/34.png'
		}, {
			thumb: 'img/_gallary/thumb/35.png',
			full: 'img/_gallary/full/35.png'
		}, {
			thumb: 'img/_gallary/thumb/36.png',
			full: 'img/_gallary/full/36.png'
		}]
	},
	computed: {}
});

var section__map = new Vue({
	el: '#map_ya',
	data: {
		title: 'Создаем инфраструктуру'
	}
});
$(function () {
	var pointtyps = //список всех типов объектов
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

	var pointlist = //массив координат и типов объектов
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
		pointtyps.forEach(function (item, i, arr) {
			if (type == item.type) {
				result = item.src;
			}
		});
		return result;
	};

	ymaps.ready(function () {
		if ($('#map').length > 0) {
			var myMap = new ymaps.Map('map', {
				center: [53.309498, 50.287493],
				zoom: 14,
				controls: []
			});
			myMap.behaviors.disable('scrollZoom');

			var mappoints = []; //массив яндекс точек

			generalpoint = new ymaps.Placemark([53.309498, 50.287493], {
				hintContent: '',
				balloonContent: 'Жилой комплекс'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map__icons/general.png',
				iconImageSize: [80, 76]
			});
			generalpointqw = new ymaps.Placemark([53.3150317, 50.2947756], {
				hintContent: '',
				balloonContent: 'Мега'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map__icons/mega.png',
				iconImageSize: [80, 76]
			});
			generalpointqe = new ymaps.Placemark([53.306051, 50.278459], {
				hintContent: '',
				balloonContent: 'Салют, лыжная база'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/map__icons/point6.png',
				iconImageSize: [37, 43]
			});

			pointlist.forEach(function (item, i, arr) {
				point = new ymaps.Placemark([item.coordx, item.coordy], {
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
				mappoints.push(telement);
			});

			//ставим точки на карту
			mappoints.forEach(function (item, i, arr) {
				myMap.geoObjects.add(item.point);
			});
			myMap.geoObjects.add(generalpoint);
			myMap.geoObjects.add(generalpointqw);
			myMap.geoObjects.add(generalpointqe);

			var zmapcheck = function zmapcheck() {
				//событие на чекбоксы
				myMap.geoObjects.each(function (geoObject) {
					myMap.geoObjects.remove(geoObject);
				}); //удалить все с карты
				var zchectypes = [];
				//ищем чекнутые типы:
				$('.map__checkbox:checked').each(function () {
					zchectypes.push($(this).attr('zdata-type'));
				});

				var z_in_array = function z_in_array(ztype) {
					var flag = false;
					zchectypes.forEach(function (item, i, arr) {
						if (ztype == item) {
							flag = true;
						}
					});
					return flag;
				};

				mappoints.forEach(function (item, i, arr) {
					if (z_in_array(item.type)) {
						myMap.geoObjects.add(item.point);
					}
				});
				myMap.geoObjects.add(generalpoint);
				myMap.geoObjects.add(generalpointqw);
				myMap.geoObjects.add(generalpointqe);
			};

			var generatecontrols = function generatecontrols() {
				var element = $('<div/>', {
					class: 'map__points',
					text: ''
				});
				element.append('<h3 class="map__points_title">Инфраструктура</h3>');
				pointtyps.forEach(function (item, i, arr) {
					element.append('<input type="checkbox" class="map__checkbox" checked="checked" zdata-type="' + item.type + '" id="map__checkbox_' + item.type + '"><label class="map__checkbox_label" for="map__checkbox_' + item.type + '">' + item.caption + '</label>');
				});
				element.prependTo('#map');
				$('.map__checkbox').change(function () {
					zmapcheck();
				});
			};

			generatecontrols();
		}
	});
});
$(function () {

	$("#lightgallery").lightGallery({
		thumbnail: true,
		selector: '.gallery__item'
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
});