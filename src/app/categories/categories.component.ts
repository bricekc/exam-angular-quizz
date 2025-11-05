import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-categories',
  standalone: false,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categories = this.quizService.categories;
  categorieName: string = '';
  constructor(private quizService: QuizService) {}

  searchCategories() {
    console.log(this.categories);
    this.quizService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {
    this.quizService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }
}
