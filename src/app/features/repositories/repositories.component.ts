import { Component, HostListener, OnInit } from '@angular/core';
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
  isFetchingMore = false;
  error: string | null = null;
  currentPage = 1;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadRepositories();
  }

  loadRepositories(): void {
    if (this.isFetchingMore) return;

    this.isFetchingMore = true;

    this.githubService.getTrendingRepositories(this.currentPage).subscribe({
      next: (repos) => {
        this.repositories = [...this.repositories, ...repos];
        this.currentPage++;
        this.isLoading = false;
        this.isFetchingMore = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch repositories.';
        this.isLoading = false;
        this.isFetchingMore = false;
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight - 100) {
      this.loadRepositories();
    }
  }
}
