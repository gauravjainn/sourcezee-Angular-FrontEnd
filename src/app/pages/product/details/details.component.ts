import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterViewInit {
  products = [
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
    {
      name: "Abstract Fish Aluminium Tealights (Set of 2)",
      currentPrice: '$879.99',
      oldPrice: '$1,399.99',
      count: '10',
      images: [
        'assets/images/listing/product-slide1.png',
        'assets/images/listing/product-slide2.png',
        'assets/images/listing/product-slide3.png'
      ]
    },
  ];

  constructor() { }
  ngAfterViewInit(): void {
    $('.more-product').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: false,
      prevArrow: ' <div class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="slick-arrow slick-next"> <i class="fa fa-chevron-right"></i></div>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });
    $('.pr-more').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
    });
    $('.pr-more').on('swipe', function (event: MouseEvent, slick: any, direction: string) {
      console.log(direction);
      const actionItems = $(event.currentTarget).siblings('.action').children()
      $(actionItems).removeClass('active');
      const actionItemsArr = actionItems.toArray();
      if (actionItemsArr[slick.currentSlide]) {
        actionItemsArr[slick.currentSlide].classList.add('active');
      }
    });
    $('.pr-detail').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      fade: true,
      prevArrow: ' <div class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="slick-arrow slick-next"> <i class="fa fa-chevron-right"></i></div>'
    });
  }

  ngOnInit(): void {
  }

  slickActive(slider: any, e: MouseEvent) {
    e.preventDefault();
    var slideno = $(e.currentTarget).data('slide');
    $(slider).slick('slickGoTo', slideno);
    $('a[data-slide]').removeClass('active');
    (e.currentTarget as HTMLElement)?.classList.add('active');
  }
}
