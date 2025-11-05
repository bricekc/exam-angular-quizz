import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  standalone: false,
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';

  constructor(
    private quizService: QuizService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.playerName = this.authService.playerName || 'nonTrouvé';
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }

  resetQuiz() {
    this.quizService.resetQuiz();
    this.isQuizFinished = this.quizService.isQuizFinished;
  }
}
