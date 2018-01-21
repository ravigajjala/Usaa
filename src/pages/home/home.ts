import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodReportService } from '../../services/foodreport.service';
import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  errorMessage:any;
  result: any = {};
  nutrients: any[] = [];
  foodList: any[] = [];
  searchFoodName: string = null;
  init = false;

  constructor(public navCtrl: NavController, public foodReportService: FoodReportService) {

    if(!!window.localStorage.getItem('foodReportData')) {
      console.log("printint the data", window.localStorage.getItem('foodReportData'));
      this.result = JSON.parse(window.localStorage.getItem('foodReportData'));
      this.nutrients = JSON.parse(window.localStorage.getItem('foodReportData')).report.food.nutrients;
    }
    else {
      this.foodReportService.getAll().subscribe(
        result => {
          this.result = result; 
          this.nutrients = this.result.report.food.nutrients; 
          window.localStorage.setItem('foodReportData', JSON.stringify(this.result));
          console.log(this.nutrients);
        },
        error => {this.errorMessage = <any>error;}
      );
    }
    
    
  }

  ngOnInit() {
    console.log("called");
  }

  searchFood() {
    this.init = true;
    console.log("caling foodSearch", this.searchFoodName);
    if(this.nutrients.length > 0){
      let that = this;
      this.foodList = _.filter(that.nutrients, function(o) {
          console.log(o.name);
          if (o.name.indexOf(that.searchFoodName) > -1) {
            return true;
          };
      });
      console.log(this.foodList);
    }    
  }

  goToReport(data) {
    this.foodReportService.selectFood(data);
    this.navCtrl.push('report');
  }



}
