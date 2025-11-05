import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories = this.quizService.categories;
  categorieName: string = '';
  constructor(private quizService: QuizService, private router: Router) {}

  searchCategories() {
    console.log(this.categories);
    this.categories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(this.categorieName.toLowerCase()),
    );
  }

  clearSearch() {
    this.categorieName = '';
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.quizService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  gotToQuizz(categorieId: string) {
    this.router.navigate(['/quiz', categorieId]);
  }
}
