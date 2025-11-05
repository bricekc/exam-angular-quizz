import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories: any[] = []
  private categoryCopy!: any[];
  categoryName: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router,
  ) {}

  searchCategories() {
    this.categories = this.categoryCopy.filter((category) =>
      category.name.toLowerCase().includes(this.categoryName.toLowerCase()),
    );
  }

  clearSearch() {
    this.categoryName = '';
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
      this.categoryCopy = categories;
    });
  }

  gotToQuizz(categorieId: string) {
    this.router.navigate(['/quiz', categorieId]);
  }
}
