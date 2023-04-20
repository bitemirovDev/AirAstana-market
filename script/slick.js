
$('.multiple-items').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="prevArrow"> <img src="public/icons/prevArrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="nextArrowBanner"> <img src="public/icons/nextArrow.svg" alt=""></button>'
});


$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '',
    nextArrow: '<button type="button" class="nextArrow"> <img src="public/icons/nextArrow.svg" alt=""></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
    ]
});