import { Component } from '@angular/core';
import { ResultCategoryComponent } from './result-category/result-category.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ResultCategoryComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {}
