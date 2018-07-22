let section__calculator = new Vue({
  el: '#calculator',
  data: {
    foo: '',
    fee: '',
    faa: '',
    title: 'Калькулятор ипотеки',
    calculatorValues: [{
        initialValue: 1300000,
        minValue: 1300000,
        maxValue: 4000000,
        step: 1000,
        name: 'apartment-price',
        label: 'Стоимость квартиры',
        labelMinValue: '1 300 000',
        labelMaxValue: '4 000 000',
      },
      {
        initialValue: 10,
        minValue: 1,
        maxValue: 30,
        step: 1,
        name: 'credit-term',
        label: 'Срок кредита',
        labelMinValue: '1',
        labelMaxValue: '30',
      },
      {
        initialValue: 260000,
        minValue: '',
        maxValue: '',
        step: 1000,
        name: 'initial-fee',
        label: 'Первоначальный взнос',
        labelMinValue: '20%',
        labelMaxValue: '100%',
      },
      {
        initialValue: 6,
        minValue: 1,
        maxValue: 16,
        step: 1,
        name: 'loan-rate',
        label: 'Ставка по кредиту',
        labelMinValue: '1',
        labelMaxValue: '16',
      }
    ]
  },
  methods: {

  },
  /*   created() {
      this.fee = this.calculatorValues[0].initialValue * 0.2;
      this.foo = this.calculatorValues[0].initialValue;
      this.faa = this.calculatorValues[2].minValue;

    }, */
  computed: {
    initialFee() {
      this.calculatorValues[2].minValue = this.calculatorValues[0].initialValue * 0.2;
      this.calculatorValues[2].maxValue = this.calculatorValues[0].initialValue;
      this.calculatorValues[2].initialValue = this.calculatorValues[2].minValue;
    }
  }
});