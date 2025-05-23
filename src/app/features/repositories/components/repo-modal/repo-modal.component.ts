import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from '../../../../models/repository.model';

@Component({
  selector: 'app-repo-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repo-modal.component.html',
  styleUrls: ['./repo-modal.component.scss'],
})
export class RepoModalComponent {
  @Input() repo!: Repository;

  // Emits when modal is closed
  @Output() close = new EventEmitter<void>();

  // Emits rating selected by user
  @Output() ratingSelected = new EventEmitter<number>();

  selectedRating = 0;

  onClose(): void {
    this.close.emit();
  }

  // Triggered when user clicks a star
  setRating(star: number): void {
    this.selectedRating = star;
    this.ratingSelected.emit(star);
    console.log(this.selectedRating);
  }
}
