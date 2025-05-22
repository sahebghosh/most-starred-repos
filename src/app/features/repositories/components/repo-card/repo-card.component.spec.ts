import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoCardComponent } from './repo-card.component';
import { Repository } from '../../../../models/repository.model';

describe('RepoCardComponent', () => {
  let component: RepoCardComponent;
  let fixture: ComponentFixture<RepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoCardComponent);
    component = fixture.componentInstance;

    // Provide mock input to avoid undefined errors
    component.repo = {
      name: 'Demo Repo',
      description: 'Test repo description',
      stargazers_count: 42,
      open_issues_count: 5,
      owner: {
        login: 'test-user',
        avatar_url: 'https://example.com/avatar.png',
      },
      html_url: 'https://github.com/test-user/demo',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
