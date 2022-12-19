import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_services/product.service';
import { CategoryService } from '../../_services/category.service';
import { Product } from '../../_models/product.model';
import { HomeService } from 'src/app/_services/home.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any;
  products: any;
  products_temp: any;
  active_id: any;
  faq_id: any;
  id = 1;
  public sellingdata: any[] = [];
  public activatedBestSeller: any;
  public selectedCategoryObj: any;

  public faqData = [
    {
      id: 1,
      question: 'When is a FAQ page appropriate?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 2,
      question: 'How should I answer my FAQs?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 3,
      question: 'Can a FAQ section help with SEO?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 4,
      question: 'Where should I put my FAQ section?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 5,
      question: 'When is a FAQ page appropriate?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 6,
      question: 'Where should I put my FAQ section?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 7,
      question: 'Where should I put my FAQ section?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
    {
      id: 8,
      question: 'When is a FAQ page appropriate?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation'
    },
  ];

  constructor(private productService: ProductService, private categoryService: CategoryService, private homeService: HomeService) { }

  // getCategories() {

  //   this.categories = [];
  //   this.categoryService.getAll().subscribe({
  //     next: data => {
  //       for (let index = 0; index < data.data.length; index++) {
  //         this.categories.push({
  //           _id: data.data[index]._id,
  //           category_name: data.data[index].category_name,
  //           product: data.data[index].product,
  //         });
  //       }
  //       console.log(this.categories);


  //     },
  //     error: err => {
  //       console.log(err);

  //     }
  //   });


  // }

  selectProduct(id: any) {
    this.active_id = id;
    this.products_temp = [];
    this.products = [];
    console.log(id);

    this.productService.getCategoryProducts(id).subscribe({
      next: data => {
        console.log(data.data);

        for (let index = 0; index < data.data.length; index++) {

          console.log(data.data[index].products);

        }

      },
      error: err => {
        console.log(err);

      }
    });

  }

  ngOnInit(): void {
    // this.getCategories();
    this.getData();
  }

  //Slider settings
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  getData() {
    this.homeService.getBestSellingData().subscribe({
      next: (resp: any) => {
        if (resp.statusCode === 200) {
          this.sellingdata = resp.data;
          if (resp.data.length > 0) {
            this.getSelectedSeller(resp.data[0]);
          }
        }
      }
    })
  }

  getSelectedSeller(item: any) {
    this.activatedBestSeller = item._id;
    this.selectedCategoryObj = item;

  }


}
