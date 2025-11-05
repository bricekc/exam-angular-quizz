import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { QuizService } from '../shared/services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private quizService: QuizService,
    private router: Router,
  ) {}

  logout() {
    this.authService.logout();
  }

  get isUserConnected() {
    return this.authService.isUserConnected();
  }

  get getUsername() {
    return this.authService.user?.username || '';
  }

  goToHome() {
    this.router.navigate(['/']);
    this.quizService.resetQuiz();
  }
}
