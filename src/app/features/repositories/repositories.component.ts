import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../core/services/github.service';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule],
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
