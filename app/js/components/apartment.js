let apartment = new Vue({
  el: '#apartment',
  data: {
    title: 'Изучите планировки',
    options: [{
        option: '1-комнатный квартиры'
      },
      {
        option: '2-комнатный квартиры'
      },
      {
        option: '3-комнатный квартиры'
      }
    ],

    layouts: [{
        area: '38,08',
        value: '1 466 000',
        img: 'img/_apartment-layout/apartment-layout__1room_1.jpg',
        rooms: '1-комнатная квартира'
      },
      {
        area: '38,08',
        value: '1 466 000',
        img: 'img/_apartment-layout/apartment-layout__1room_2.jpg',
        rooms: '1-комнатная квартира'
      },
      {
        area: '38,84',
        value: '1 500 000',
        img: 'img/_apartment-layout/apartment-layout__1room_3.jpg',
        rooms: '1-комнатная квартира'
      },
      {
        area: '39,53',
        value: '1 522 000',
        img: 'img/_apartment-layout/apartment-layout__1room_4.jpg',
        rooms: '1-комнатная квартира'
      },
    ]
  },

  methods: {

  },
  computed: {

  }
});