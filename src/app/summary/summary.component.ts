import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() selectedUser = new EventEmitter();
  usersService;
  randomUser!: User;

  constructor(usersService: UsersService) {
    this.usersService = usersService;
  }

  onContinue() {
    this.randomUser = this.usersService.randomUser;
    this.selectedUser.emit(this.randomUser);
  }

  ngOnInit() {
    this.randomUser = this.usersService.randomUser;
    this.selectedUser.emit(this.randomUser);
  }
}
