$(function () {
  /*
   ** section__gallery
   */
  $("#lightgallery").lightGallery({
    thumbnail: true,
    selector: '.gallery__item',
    download: false
  });

  let hideImages = (() => {
    if ($(window).width() < 576) {
      $('.gallery__item:gt(17)').css('display', 'none');
    };
    $(window).resize(() => {
      if ($(window).width() < 576) {
        $('.gallery__item:gt(17)').css('display', 'none');
      } else if ($(window).width() > 576) {
        $('.gallery__item:gt(17)').css('display', 'inline-block');
      }
    });
  })();
  /*
   ** /section__gallery
   */

  /*
   ** section__calculator
   */
  $('.value-change__input_text').on('change', () => {
    let arrayValues = section__calculator.calculatorValues;
 
    for (const key in arrayValues) {
      let elemInitVal = arrayValues[key].initialValue;
      let elemMaxVal = arrayValues[key].maxValue;
      let elemMinVal = arrayValues[key].minValue;


      if (String(elemInitVal).length > String(elemMaxVal).length) {
        arrayValues[key].initialValue = String(arrayValues[key].initialValue).replace(/[^0-9]/gim, '');
        arrayValues[key].initialValue = elemMaxVal;
      }

      if (elemInitVal > elemMaxVal) {
        arrayValues[key].initialValue = elemMaxVal;
      } else if (elemInitVal < elemMinVal) {
        arrayValues[key].initialValue = elemMinVal;
      }
    }
  });

  let transformCreditAmountTotal = (() => {
    $('.credit-amount__total, .result__credit-amount .result__value').text(formatStr(section__calculator.creditAmount));

    $('.value-change__input, .value-change__input_text').on('change', () => {
      $('.credit-amount__total, .result__credit-amount .result__value').text(formatStr(section__calculator.creditAmount));
    });
  })();

  let transformPerMountly = (() => {
    $('.result__per-mountly .result__value').text(formatStr(section__calculator.perMountly));

    $('.value-change__input, .value-change__input_text').on('change', () => {
      $('.result__per-mountly .result__value').text(formatStr(section__calculator.perMountly));
    });
  })();

  let transformOverpaymentAmount = (() => {
    $('.result__overpayment-amount .result__value').text(formatStr(section__calculator.overpaymentAmount));

    $('.value-change__input, .value-change__input_text').on('change', () => {
      $('.result__overpayment-amount .result__value').text(formatStr(section__calculator.overpaymentAmount));
    });
  })();

  /*
   ** /section__calculator
   */

  function formatStr(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
  }
});