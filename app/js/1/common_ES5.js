'use strict';

var advantages = new Vue({
	el: '#advantages',
	data: {
		title: 'Изучите планировки',
		/* 	items: [{
  			strong: '16 вариантов',
  			small: 'планировок квартир'
  		},
  		{
  			strong: 'ипотека от 6%',
  			small: 'и рассрочка от застройщика'
  		},
  		{
  			strong: 'проживают уже более',
  			small: '8000 жителей'
  		},
  		{
  			strong: 'детская и взрослая',
  			small: 'поликлиники'
  		},
  		{
  			strong: 'в шаговой доступности',
  			small: 'школы и детский сад'
  		},
  		{
  			strong: 'поддержка строительства',
  			small: 'правительством РФ'
  		}
  		] */

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

var apartment = new Vue({
	el: '#apartment',
	data: {
		title: 'Изучите планировки',
		options: [{
			option: '1-комнатный квартиры'
		}, {
			option: '2-комнатный квартиры'
		}, {
			option: '3-комнатный квартиры'
		}],

		layouts: [{
			area: '38,08',
			value: '1 466 000',
			img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
			rooms: '1-комнатная квартира'
		}, {
			area: '38,08',
			value: '1 466 000',
			img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
			rooms: '1-комнатная квартира'
		}, {
			area: '38,84',
			value: '1 500 000',
			img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
			rooms: '1-комнатная квартира'
		}, {
			area: '39,53',
			value: '1 522 000',
			img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
			rooms: '1-комнатная квартира'
		}]
	},

	methods: {},
	computed: {}
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