import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../core/services/github.service';
import { Repository } from '../../models/repository.model';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoModalComponent } from './components/repo-modal/repo-modal.component';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [CommonModule, RepoCardComponent, RepoModalComponent],
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss'],
})
export class RepositoriesComponent implements OnInit {
  // List of fetched repositories
  repositories: Repository[] = [];

  // Used to show spinner on first load
  isLoading = false;

  // Used to prevent duplicate scroll fetches
  isFetchingMore = false;

  // Error handling
  error: string | null = null;

  // Tracks current page for GitHub API pagination
  currentPage = 1;

  // Store selected repository for modal view
  selectedRepo: Repository | null = null;

  // Map of repo name -> user rating
  ratings = new Map<string, number>();

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
        // Append new repos to existing list
        this.repositories = [...this.repositories, ...repos];
        this.currentPage++;
        this.isLoading = false;
        this.isFetchingMore = false;
      },
      error: (err) => {
        this.error = 'Failed to load repositories. Please try again later.';
        this.isLoading = false;
        this.isFetchingMore = false;
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // Detect when user scrolls near bottom of page
    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.body.offsetHeight;

    if (scrollPosition >= documentHeight - 100) {
      this.loadRepositories();
    }
  }

  onRepoClick(repo: Repository): void {
    this.selectedRepo = repo;
  }

  onRatingSelected(rating: number): void {
    if (this.selectedRepo) {
      this.ratings.set(this.selectedRepo.name, rating);
    }
  }

  retry(): void {
    this.error = null;
    this.isLoading = true;
    this.loadRepositories();
  }
}
