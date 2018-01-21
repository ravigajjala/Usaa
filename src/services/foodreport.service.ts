import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class FoodReportService {

    private apiUrl: string = 'http://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=f&format=json&api_key=mdxeEij7jy8O9A8T89BrgbNp3StEhwFZf9yglJeY';
    private selectedFoodData: any = null;
    private favouriteFoods: any[] = [];

    localStorage: any = window.localStorage;

    constructor(private http: Http) {
    }

    private handleError(error: any) {
        let errorMsg = error.message || `There was a problem with API and we couldn't retrieve your data!`
        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);
    }

    getAll(): Observable<any[]> {
        let foolRportData = this.http
            .get(`${this.apiUrl}`, { headers: this.getHeaders() })
            .map((response: Response) => response.json())
            .catch(this.handleError);
        return foolRportData;
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }

    selectFood(data) {
        this.selectedFoodData = data;
    }

    getSelectedFood() {
        return this.selectedFoodData;
    }

    setFavouriteFoods(food) {
        this.favouriteFoods.push(food);
        localStorage.setItem('favouriteFoods', JSON.stringify(this.favouriteFoods));
    }

    removeFavouriteFood(food) {
        _.remove(this.favouriteFoods, {
            nutrient_id: food.nutrient_id
        });
        localStorage.setItem('favouriteFoods', JSON.stringify(this.favouriteFoods));
    }

    getFavouriteFoods() {
        this.favouriteFoods = localStorage.getItem('favouriteFoods') ? JSON.parse(localStorage.getItem('favouriteFoods')) : [];
        return this.favouriteFoods;
    }


}

