import { Component, Input } from '@angular/core';
import { User } from '../../user.model'

@Component({
  selector: 'app-result-category',
  standalone: true,
  imports: [],
  templateUrl: './result-category.component.html',
  styleUrl: './result-category.component.css',
})
export class ResultCategoryComponent {
  @Input() newUser!: User;
}
