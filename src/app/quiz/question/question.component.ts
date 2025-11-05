import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  standalone: false,
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;

  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.quizService.getQuizByCategory(params['categorieId']);
    });
  }

  addAnswer(answer: string, questionId: number) {
    this.quizService.addAnswer(answer, questionId);
  }
}
