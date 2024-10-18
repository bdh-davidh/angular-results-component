import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-category',
  standalone: true,
  imports: [],
  templateUrl: './result-category.component.html',
  styleUrl: './result-category.component.css',
})
export class ResultCategoryComponent {
  @Input() newUser = {
    id: 0,
    results: [
      {
        category: 'Reaction',
        score: 12,
        icon: './assets/images/icon-reaction.svg',
      },
      {
        category: 'Memory',
        score: 13,
        icon: './assets/images/icon-memory.svg',
      },
      {
        category: 'Verbal',
        score: 14,
        icon: './assets/images/icon-verbal.svg',
      },
      {
        category: 'Visual',
        score: 15,
        icon: './assets/images/icon-visual.svg',
      },
    ],
  };
}
