import { Component } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { SummaryComponent } from './summary/summary.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResultComponent, SummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
