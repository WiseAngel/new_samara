let section__advantages = new Vue({
  el: '#advantages',
  data: {
    title: 'Изучите планировки',

    itemsFirstLine: [{
        first: '16 вариантов',
        second: 'планировок квартир'
      },
      {
        first: 'ипотека от 6%',
        second: 'и рассрочка от застройщика'
      }

    ],

    itemsSecondLine: [{
        first: 'проживают уже более',
        second: '8000 жителей'
      },
      {
        first: 'детская и взрослая',
        second: 'поликлиники'
      }

    ],

    itemsThirdLine: [{
        first: 'в шаговой доступности',
        second: 'школы и детский сад'
      },
      {
        first: 'поддержка строительства',
        second: 'правительством РФ'
      }
    ]
  }
});