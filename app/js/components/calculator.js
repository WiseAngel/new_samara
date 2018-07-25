let section__calculator = new Vue({
  el: '#calculator',
  data: {
    title: 'Калькулятор ипотеки',
    calculatorValues: [{
        initialValue: 1300000,
        minValue: 1300000,
        maxValue: 4000000,
        step: 10000,
        name: 'apartment-price',
        label: 'Стоимость квартиры',
        labelMinValue: '1 300 000',
        labelMaxValue: '4 000 000',
        unit: '₽'
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
        unit: ''
      },
      {
        initialValue: 260000,
        minValue: '',
        maxValue: '',
        step: 100,
        name: 'initial-fee',
        label: 'Первоначальный взнос',
        labelMinValue: '20%',
        labelMaxValue: '100%',
        unit: '₽'
      },
      {
        initialValue: 10,
        minValue: 6,
        maxValue: 16,
        step: .1,
        name: 'loan-rate',
        label: 'Ставка по кредиту',
        labelMinValue: '6',
        labelMaxValue: '16',
        unit: '%'
      }
    ],
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
    }
  },
  methods: {

  },
  computed: {
    initialFee() {
      let price = this.calculatorValues[0].initialValue;

      this.calculatorValues[2].minValue = price * 0.2;
      this.calculatorValues[2].maxValue = price - 500000;
      this.calculatorValues[2].initialValue = this.calculatorValues[2].minValue;
    },
    creditAmount() {
      return this.creditAmountBlock.initialValue = this.calculatorValues[0].initialValue - this.calculatorValues[2].initialValue;
    },
    declinationOfYear() {
      let value = parseInt(this.calculatorValues[1].initialValue);
      let spelling = '';
      if (value === 1 || value === 21) {
        spelling = 'Год';
      } else if (2 <= value && value <= 4 || 22 <= value && value <= 24) {
        spelling = 'Года';
      } else {
        spelling = 'Лет';
      }
      this.calculatorValues[1].unit = spelling;
    },

    foo() {
      let arr = [];
      this.calculatorValues.forEach((element, i) => {
        i % 2 == 1 ? arr.push(element) : false;
      });
      arr.unshift(this.creditAmountBlock);
      arr.push(this.perMountlyBlock);
      return arr;
    },

    perMountly() {
      let creditAmount = this.creditAmount;
      let creditTerm = this.calculatorValues[1].initialValue * 12;
      let loanRatePerMo = this.calculatorValues[3].initialValue / 12 / 100;
      let qt = Math.pow(1+loanRatePerMo, creditTerm)
      let monthlyPayment = Math.round(((creditAmount*qt)*loanRatePerMo)/(qt-1));

      this.perMountlyBlock.initialValue = monthlyPayment;
      return monthlyPayment;
    }

  }
});