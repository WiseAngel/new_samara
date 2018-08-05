let section__calculator = new Vue({
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
    policy: 'Ипотечный калькулятор является ориентировочным и не является публичной офертой. При расчете не учитываются возможные дополнительные платежи, например, страхование объекта недвижимости, страхование жизни и здоровья заемщика и т.п',
  },

  methods: {

  },
  computed: {
    // initialFee() {
    //   let price = this.calculatorValues['apartment-price'].initialValue;
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

    creditAmount() {
      let priceInit = this.calculatorValues['apartment-price'].initialValue;
      let feeInit = this.calculatorValues['initial-fee'].initialValue;

      this.creditAmountBlock.initialValue = priceInit - feeInit;

      if (parseInt(this.creditAmountBlock.initialValue) > 3200000) {
        return this.creditAmountBlock.initialValue = 3200000;
      }

      return this.creditAmountBlock.initialValue;
    },

    declinationOfYear() {
      let value = parseInt(this.calculatorValues['credit-term'].initialValue);
      let spelling = '';

      if (value === 1 || value === 21) {
        spelling = 'Год';
      } else if (2 <= value && value <= 4 || 22 <= value && value <= 24) {
        spelling = 'Года';
      } else {
        spelling = 'Лет';
      }
      this.calculatorValues['credit-term'].unit = spelling;
    },

    calculatorResultArray() {
      let arr = [];

      for (const key in this.calculatorValues) {
        if (this.calculatorValues[key].usedAgain) {
          arr.push(this.calculatorValues[key])
        }
      };
      arr.unshift(this.creditAmountBlock);
      arr.push(this.perMountlyBlock);
      arr.push(this.overpaymentAmountBlock);
      return arr;
    },

    perMountly() {
      let creditAmount = this.creditAmount;
      let creditTerm = this.calculatorValues['credit-term'].initialValue * 12;
      let loanRatePerMo = this.calculatorValues['loan-rate'].initialValue / 12 / 100;
      let qt = Math.pow(1 + loanRatePerMo, creditTerm)
      let monthlyPayment = Math.round(((creditAmount * qt) * loanRatePerMo) / (qt - 1));

      this.perMountlyBlock.initialValue = monthlyPayment;
      return monthlyPayment;
    },

    overpaymentAmount() {
      let overpayment = this.perMountly * this.calculatorValues['credit-term'].initialValue * 12 - this.creditAmount;

      this.overpaymentAmountBlock.initialValue = overpayment;
      return overpayment;
    }
  },

  updated() {

    let price = this.calculatorValues['apartment-price'].initialValue;
      let initFee = this.calculatorValues['initial-fee'].initialValue;
      let minFee = this.calculatorValues['initial-fee'].minValue;
      let maxFee = this.calculatorValues['initial-fee'].maxValue;
      this.calculatorValues['initial-fee'].minValue = price * 0.2;
      this.calculatorValues['initial-fee'].maxValue = price - 500000;
      if (initFee < minFee) {
        this.calculatorValues['initial-fee'].initialValue = minFee;
      } else if (initFee > maxFee) {
        this.calculatorValues['initial-fee'].initialValue = maxFee;
      } else {
        this.calculatorValues['initial-fee'].initialValue = this.calculatorValues['initial-fee'].initialValue;
      };

    // this.initialFee;
    this.declinationOfYear;
  },
});