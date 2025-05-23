import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from '../../../../models/repository.model';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
})
export class RepoCardComponent {
  @Input() repo!: Repository;
  @Input() rating: number = 0;

  // Emits event when user clicks on repo name
  @Output() nameClick = new EventEmitter<Repository>();

  onNameClick(): void {
    this.nameClick.emit(this.repo);
  }

  // Calculate "Submitted X days ago" based on created_at date
  getDaysSinceCreation(dateStr: string): number {
    const created = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - created.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }
}
