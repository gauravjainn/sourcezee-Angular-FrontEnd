import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
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
    $('.prodcut-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
    });
    $('.prodcut-slide').on('swipe', function (event: MouseEvent, slick: any, direction: string) {
      console.log(direction);
      const actionItems = $(event.currentTarget).siblings('.action').children()
      $(actionItems).removeClass('active');
      const actionItemsArr = actionItems.toArray();
      if (actionItemsArr[slick.currentSlide]) {
        actionItemsArr[slick.currentSlide].classList.add('active');
      }
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
