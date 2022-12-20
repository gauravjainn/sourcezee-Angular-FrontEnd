import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public OurCollectionData: any[] = [];
  public sub_category_image: any;
  public OurgetshopByFactory: any;
  public OurshopByCategory: any;
  public shopByStyleObj: any;
  public shopByItem: any;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getData();
    this.getshopByFactory();
    this.getshopByCategory();
    this.getShopByStyle();
  }
  getData() {
    this.dashboardService.getOurCollectionData().subscribe({
      next: (resp: any) => {
        if (resp.statusCode === 200) {
          this.OurCollectionData = resp.data;
        }
      }
    })
  }
  getshopByFactory() {
    this.dashboardService.getshopByFactorys().subscribe({
      next: (resp: any) => {
        if (resp.statusCode === 200) {

          let shopFactoryData = resp.data;

          shopFactoryData.forEach((data: any) => {
            data.tertiaryPrice = Number(data.price) - Number(data.discount_amount);
            let percentageval = ((Number(data.tertiaryPrice) / Number(data.price)) * 100);
            data.tertiaryPercentage = Math.round(percentageval);
          });

          this.OurgetshopByFactory = shopFactoryData;
        }
      }
    })
  }
  getshopByCategory() {
    this.dashboardService.getshopByCategory().subscribe({
      next: (resp: any) => {
        if (resp.statusCode === 200) {
          this.OurshopByCategory = resp.data;
        }
      }
    })
  }

  getShopByStyle() {
    this.dashboardService.getshopByStyle().subscribe({
      next: (resp: any) => {
        if (resp.statusCode === 200) {
          let styleData = resp.data.sort((a: any, b: any) => (a.style_name < b.style_name) ? -1 : 1);
          this.shopByStyleObj = styleData;

          if (styleData.length > 0) {
            this.clickShopByStyle(styleData[0]);
          }
        }
      }
    })
  }

  clickShopByStyle(item: any) {
    this.shopByItem = item;
  }
}
