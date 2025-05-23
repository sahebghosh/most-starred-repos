# Most Starred GitHub Repositories

## Overview

This Angular project lists the most starred public GitHub repositories created in the last 30 days.  
It features infinite scrolling, a modal view with a 5-star rating system, error handling.

---

## Features Implemented

- Fetch top trending repos using GitHub REST API v3
- Infinite scroll with pagination (auto-load on scroll)
- Modal window opens on repo name click
  - Detailed view with name, owner, avatar, description
  - 5-star rating system (visual-only)
- Rating shown beside repo name on main list
- Error handling with retry option
- Spinner shown on first load + when loading next page

---

## 📁 Tech Stack

- **Angular** 19 with Standalone Components

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

---

## Folder Structure Highlights

src/app/
├── core/ # Services like GithubService
├── models/ # Repository interface
├── features/
│ └── repositories/
│ ├── components/
│ │ ├── repo-card/
│ │ ├── repo-modal/
│ │

## 🧪 Testing

- Run unit tests using:
  ```bash
  ng test
  ```

````

## Test Results Included

- test-results/first-run.txt — from initial setup (4 tests passed)
- test-results/final-run.txt — from final build (5 tests passed)

Both files are available in the /test-results/ folder.

## ▶ How to Run the Application

1. Clone the repo:

```bash
 git clone https://github.com/sahebghosh/most-starred-repos.git
 cd most-starred-repos
 npm install
 ng serve
````

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
