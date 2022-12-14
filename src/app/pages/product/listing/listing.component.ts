import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  filter!:FormGroup;
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
  filters = {
    categories: [
      {
        name: 'Home Decor',
        value: false
      },
      {
        name: 'Furniture',
        value: false
      },
    ],
    "Sub categories": [
      {
        name: 'Accent Table',
        value: false
      },
      {
        name: 'Clocks',
        value: false
      },
      {
        name: 'Mirrors',
        value: false
      },
    ],
    Sizes: [
      {
        name: 'Small',
        value: false
      },
      {
        name: 'Medium',
        value: false
      },
      {
        name: 'Large',
        value: false
      },
    ],
    Materials: [
      {
        name: 'Metal',
        value: false
      },
      {
        name: 'Wood',
        value: false
      },
    ],
    Price: [
      {
        name: 'FOB',
        value: false
      },
      {
        name: 'Ex factory',
        value: false
      },
    ],
    MOQ: [
      {
        name: 'Less than 10',
        value: false
      },
      {
        name: '10-30',
        value: false
      },
      {
        name: '30-50',
        value: false
      },
      {
        name: '>50',
        value: false
      },
    ],
    Color: [
      {
        name: 'Metalic Gray',
        value: false
      },
      {
        name: 'Metalic wood',
        value: false
      },
    ]
  };
  constructor(private formBuilder: FormBuilder) { }
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
    this.filter = this.formBuilder.group({});
    for (const filter in this.filters) {
      this.filter.addControl(filter, new FormArray([]));
      const formArray = this.filter.get(filter) as FormArray;
      for (const f of (this.filters[filter as keyof typeof this.filters])) {
        formArray.push(this.formBuilder.group({
          [f.name]:f.value
        }))
      }
    }
    console.log(this.filter)
  }

  slickActive(slider: any, e: MouseEvent) {
    e.preventDefault();
    var slideno = $(e.currentTarget).data('slide');
    $(slider).slick('slickGoTo', slideno);
    $('a[data-slide]').removeClass('active');
    (e.currentTarget as HTMLElement)?.classList.add('active');
  }
  get categoryControls() {
    return Object.keys(this.filter.controls);
  }
  getFormArray(key: string) {
    return ((this.filter.get(key) as FormArray).controls as Array<FormGroup>);
  }
  getElement(item: FormGroup) {
    return Object.keys(item.controls)
  }
  clearAllFilter() {
    this.filter.reset();
  }
}
