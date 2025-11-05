import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../shared/services/quiz.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  standalone: false,
})
export class ResultComponent implements OnInit {
  score = 0;
  scoreTotal = this.quizService.quizContent.length;
  playerName = this.authService.playerName;

  constructor(
    private quizService: QuizService,
    private router: Router,
    private authService: AuthService,
  ) {}
  ngOnInit(): void {
    this.quizService.checkAnswers();
    this.score = this.quizService.score;
  }

  goToHome() {
    this.router.navigate(['/']);
    this.quizService.resetQuiz();
  }

  getGifUrl() {
    if (this.score > this.scoreTotal / 2)
      return 'https://media.giphy.com/media/YRuFixSNWFVcXaxpmX/giphy.gif';
    return 'https://media.giphy.com/media/jWcypagX0tNtiup1pg/giphy.gif';
  }
}
