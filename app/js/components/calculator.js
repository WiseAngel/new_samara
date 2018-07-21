let section__calculator = new Vue({
  el: '#calculator',
  data:{
    title: 'Калькулятор ипотеки',
    calculatorValues:[
      {
        initialValue: 1300000,
        minValue: 1300000,
        maxValue: 4000000,
        step: 10000,
        name: 'loan-rate',
        label: 'Ставка по кредиту',
        labelMinValue: '1 300 000',
        labelMaxValue: '4 000 000',
        value: 1300000
      },
      {
        initialValue: 10,
        minValue: 1,
        maxValue: 30,
        step: 1,
        name: 'initial-fee',
        label: 'Первоначальный взнос',
        labelMinValue: '1',
        labelMaxValue: '30'
      },
      {
        initialValue: 50,
        minValue: 0,
        maxValue: 100,
        step: 1,
        name: 'credit-term',
        label: 'Срок кредита',
        labelMinValue: '0%',
        labelMaxValue: '100%'
      },
      {
        initialValue: 6,
        minValue: 1,
        maxValue: 16,
        step: 1,
        name: 'apartment-price',
        label: 'Стоимость квартиры',
        labelMinValue: '1',
        labelMaxValue: '16'
      }
    ]
  }
})