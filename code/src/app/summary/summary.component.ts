import { Component } from '@angular/core';
import { ResultCategoryComponent } from './result-category/result-category.component';
import { UsersService } from '../users.service'
import { User } from '../user.model'



@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ResultCategoryComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  usersService;
  user!: User;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  getRandomUser() {
    this.user = (this.usersService.getRandomUser());
  }
}
