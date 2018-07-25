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

    for (let i = 0; i < arrayValues.length; i++) {
      let elemInitVal = arrayValues[i].initialValue;

      if (elemInitVal.toString().indexOf(' ') !== -1) {
        arrayValues[i].initialValue = elemInitVal.split(' ').join('');
      }
      if (elemInitVal > arrayValues[i].maxValue) {
        arrayValues[i].initialValue = arrayValues[i].maxValue;
      } else if (elemInitVal < arrayValues[i].minValue) {
        arrayValues[i].initialValue = arrayValues[i].minValue;
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

  /*
  ** /section__calculator
  */

  function formatStr(str) {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
  }
});