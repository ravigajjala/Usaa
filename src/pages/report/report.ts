import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import _ from 'lodash';
import { FoodReportService } from '../../services/foodreport.service';

@IonicPage()

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {
  nutrientId: any = null;
  food: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private foodReportService: FoodReportService) {
    this.food = this.foodReportService.getSelectedFood();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

}
