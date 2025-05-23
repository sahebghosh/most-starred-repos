import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoModalComponent } from './repo-modal.component';

describe('RepoModalComponent', () => {
  let component: RepoModalComponent;
  let fixture: ComponentFixture<RepoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoModalComponent);
    component = fixture.componentInstance;

    component.repo = {
      name: 'Test Repo',
      description: 'Testing modal component',
      stargazers_count: 100,
      open_issues_count: 5,
      html_url: 'https://github.com/test-user/test-repo',
      created_at: '2024-05-01T00:00:00Z',
      owner: {
        login: 'test-user',
        avatar_url: 'https://example.com/avatar.png',
      },
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
