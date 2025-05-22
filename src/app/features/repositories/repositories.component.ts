import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../core/services/github.service';
import { Repository } from '../../models/repository.model';
import { RepoCardComponent } from './components/repo-card/repo-card.component';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, RepoCardComponent],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  repositories: Repository[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.githubService.getTrendingRepositories().subscribe({
      next: (repos) => {
        console.log('Repo', repos);

        this.repositories = repos;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch repositories.';
        this.isLoading = false;
      },
    });
  }
}
