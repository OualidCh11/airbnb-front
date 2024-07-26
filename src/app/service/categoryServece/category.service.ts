import { Injectable } from '@angular/core';
import { Category, CategoryName } from '../../layout/navbar/category/category.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    
    {
      icon: "eye",
      displayname: "ALL",
      technicalname:"ALL",
      activated: false
    },
    {
      icon: "eye",
      displayname: "Amazing views",
      technicalname: "AMAZING_VIEWS",
      activated: false
    },
    {
      icon: "exclamation",
      displayname: "OMG!",
      technicalname: "OMG",
      activated: false
    },
    {
      icon: "tree",
      displayname: "Treehouses",
      technicalname: "TREEHOUSES",
      activated: false
    },
    {
      icon: "umbrella-beach",
      displayname: "Beach",
      technicalname: "BEACH",
      activated: false
    },
    {
      icon: "tractor",
      displayname: "Farms",
      technicalname: "FARMS",
      activated: false
    },
    {
      icon: "house",
      displayname: "Tiny homes",
      technicalname: "TINY_HOMES",
      activated: false
    },
    {
      icon: "water",
      displayname: "Lake",
      technicalname: "LAKES",
      activated: false
    },
    {
      icon: "box",
      displayname: "Containers",
      technicalname: "CONTAINER",
      activated: false
    },
    {
      icon: "tent",
      displayname: "Camping",
      technicalname: "CAMPING",
      activated: false
    },
    {
      icon: "chess-rook",
      displayname: "Castle",
      technicalname: "CASTLE",
      activated: false
    },
    {
      icon: "person-skiing",
      displayname: "Skiing",
      technicalname: "SKIING",
      activated: false
    },
    {
      icon: "fire",
      displayname: "Campers",
      technicalname: "CAMPERS",
      activated: false
    },
    {
      icon: "snowflake",
      displayname: "Artic",
      technicalname: "ARTIC",
      activated: false
    },
    {
      icon: "sailboat",
      displayname: "Boat",
      technicalname: "BOAT",
      activated: false
    },
    {
      icon: "mug-saucer",
      displayname: "Bed & breakfasts",
      technicalname: "BED_AND_BREAKFASTS",
      activated: false
    },
    {
      icon: "lightbulb",
      displayname: "Rooms",
      technicalname: "ROOMS",
      activated: false
    },
    {
      icon: "earth-europe",
      displayname: "Earth homes",
      technicalname: "EARTH_HOMES",
      activated: false
    },
    {
      icon: "tower-observation",
      displayname: "Tower",
      technicalname: "TOWER",
      activated: false
    },
    {
      icon: "hill-rockslide",
      displayname: "Caves",
      technicalname: "CAVES",
      activated: false
    },
    {
      icon: "champagne-glasses",
      displayname: "Luxes",
      technicalname: "LUXES",
      activated: false
    },
    {
      icon: "kitchen-set",
      displayname: "Chef's kitchen",
      technicalname: "CHEFS_KITCHEN",
      activated: false
    },

  ]


  private changeCategory$ = new BehaviorSubject<Category>(this.getCategoryByDefault());
  changeCategoryObs = this.changeCategory$.asObservable();

  changeCategory(category: Category): void {
    this.changeCategory$.next(category);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategoryByDefault() {
    return this.categories[0];
  }

  getCategoryByTechnicalName(technicalName: CategoryName): Category | undefined {
    return this.categories.find(category => category.technicalname === technicalName);
  }
}
