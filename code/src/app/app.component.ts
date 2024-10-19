import { Component } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';
import { UsersService } from './users.service';
import { User } from './user.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResultComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  score!: number;
  usersService;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  onSelectedUser(user: User) {
    this.score = this.usersService.calculateUserScore(user);
  }
}
