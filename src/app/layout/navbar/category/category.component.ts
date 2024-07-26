import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryService } from '../../../service/categoryServece/category.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  categoryService: CategoryService = inject(CategoryService);
  categories: Category[] | undefined;
  // isHome = false;
  currentActiveCategory = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories(): void {
    this.categories = this.categoryService.getCategories();
  } 

  
}
