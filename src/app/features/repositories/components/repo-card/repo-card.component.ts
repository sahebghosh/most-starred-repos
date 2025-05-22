import { Component, Input } from '@angular/core';
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
}
