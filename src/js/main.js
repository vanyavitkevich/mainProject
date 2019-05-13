$(window).load(function() {
  // Header Slider

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.team__slider').length !== 0) {
      var headerSlider = jQuery('.team__slider');

      headerSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              arrows: false,
            }
          }
        ],
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            }
          }
        ]
      });

      // headerSlider
      //   .find('.slick-arrow')
      //   .html('<div class="round-btn-bg"></div>');
    }
  });

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.testimonals__slider').length !== 0) {
      var headerSlider = jQuery('.testimonals__slider');

      headerSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              arrows: false
            }
          }
        ]
      });

      // headerSlider
      //   .find('.slick-arrow')
      //   .html('<div class="round-btn-bg"></div>');
    }
  });

  jQuery(function() {
    var options = {
      speed: 1000,
      is_anime: false
    };

    var isIE = /*@cc_on!@*/ false || !!document.documentMode,
      isEdge = !isIE && !!window.StyleMedia,
      isMS = !(isIE || isEdge);

    if (jQuery('.news__slider').length !== 0) {
      var headerSlider = jQuery('.news__slider');

      headerSlider.slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        useTransform: isMS,
        useCSS: isMS,
        pauseOnHover: false,
        focusOnSelect: true,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: false,
              arrows: false
            }
          }
        ],
        responsive: [
          {
            breakpoint: 330,
            settings: {
              dots: false,
            }
          }
        ]
      });

      // headerSlider
      //   .find('.slick-arrow')
      //   .html('<div class="round-btn-bg"></div>');
    }
  });

  function deleteClass(elem, className){
    for(var k = 0;k <= elem.length - 1;k++){
      elem[k].classList.remove(className)
    }
  }

  const price = document.getElementById('price')
  const price_item = price.getElementsByClassName('price__item')
  const price__item_head = price.getElementsByClassName('price__item-head')
  const price__item__hov = price.getElementsByClassName('price__item__hov')
  const price__item__center = price.getElementsByClassName('price__item__center')
  const price__item_footer = price.getElementsByClassName('price__item-footer')

  
  for(var i = 0;i <= price_item.length - 1;i++){
    const r = i
    price_item[i].onmouseover = function() {
      price__item_head[r].classList.add('d-none')
      price__item__center[r].classList.add('d-none')

      price__item__hov[r].classList.remove('d-none')
      price__item_footer[r].classList.remove('d-none')
    }
  }
  
  for(var k = 0;k <= price_item.length - 1;k++){
    const d = k
    price_item[k].onmouseout = function() {
      price__item_head[d].classList.remove('d-none')
      price__item__center[d].classList.remove('d-none')

      price__item__hov[d].classList.add('d-none')
      price__item_footer[d].classList.add('d-none')
    }
  }
  
  var map__wrapper_btn = document.getElementById('map__wrapper-btn')

  map__wrapper_btn.onclick = function(){
    map__wrapper_btn.classList.add('d-none')
  }

  var portfolio = document.getElementById('portfolio')
  console.log(portfolio)
  var portfolio__ul = portfolio.getElementById('portfolio__ul')
  var portfolio__ul__li = portfolio__ul.getElementsByClassName('portfolio__ul__li')
  var portfolio__item = portfolio.getElementsByClassName('portfolio__item')
  var portfolio__ul__li_bor_bot = portfolio.getElementsByClassName('portfolio__ul__li-bor_bot')

  for(var q = 0;q <= portfolio__ul__li.length - 1;q++){
    portfolio__ul__li[q].onclick = function(){
      for(var p = 0;p <= portfolio__ul__li.length - 1;p++){
        portfolio__ul__li_bor_bot[p].classList.add('d-none')
      }
      portfolio__ul__li_bor_bot[q].classList.remove('d-none')
    }
  }
});