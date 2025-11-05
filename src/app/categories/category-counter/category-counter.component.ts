import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-counter',
  standalone: false,
  templateUrl: './category-counter.component.html',
  styleUrl: './category-counter.component.scss'
})
export class CategoryCounterComponent {
  @Input() nbCategories!: number
}
