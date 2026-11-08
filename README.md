# Arcanafinaltasks

DevOps / CI-CD practice workspace covering shell automation, Docker, Jenkins, GitHub Actions, GitLab CI, containerized apps, and ops scripts.

---

## Repository layout

```
Arcanafinaltasks/
├── ci-cd-concepts/      # Minimal lint → test → build → package pipeline
├── deploy-script/       # Deploy with backup, restart, health check, rollback
├── version-tagging/     # SemVer bump + git tag/push automation
├── docker-cleanup/      # Docker prune + container monitor scripts
├── docker-tasks/        # Multi-container log aggregator
├── server-bootstrap/    # Fresh-server package + user + dotfile bootstrap
├── config-drift/        # Golden vs live nginx config drift check
├── resource-logger/     # CPU / memory / disk CSV logger
├── service-watchdog/    # systemctl service monitor + auto-restart
├── Food-Delivery/       # MERN food-ordering app (Docker Compose)
├── kaneo/               # Kaneo project-management stack (Compose)
└── CICD-tasks/          # Jenkins, GitHub Actions, GitLab CI practice apps
```

---

## 1. Shell / ops automation

### `ci-cd-concepts/`

Local CI demo pipeline.

```bash
cd ci-cd-concepts
chmod +x scripts/*.sh tests/test.sh app/main.sh
./scripts/pipeline.sh
```

### `deploy-script/`

Deployment flow: backup → `git pull` → install deps → restart → health check → rollback on failure.

```bash
cd deploy-script
chmod +x scripts/*.sh app/app.sh
./scripts/deploy.sh
```

### `version-tagging/`

Reads `VERSION`, bumps patch, commits, tags `vX.Y.Z`, and pushes.

```bash
cd version-tagging
chmod +x scripts/version.sh
./scripts/version.sh
```

### `docker-cleanup/docker-cleanup/`

- `scripts/cleanup.sh` — prune stopped containers, unused images, unused volumes
- `container-monitor/scripts/monitor.sh` — restart listed containers if down

```bash
cd docker-cleanup/docker-cleanup
chmod +x scripts/cleanup.sh container-monitor/scripts/monitor.sh
./scripts/cleanup.sh
./container-monitor/scripts/monitor.sh
```

### `docker-tasks/log-aggregator/`

Collects `docker logs` for nginx / mysql / redis into one file.

```bash
cd docker-tasks/log-aggregator
chmod +x scripts/logs.sh
./scripts/logs.sh
# output → logs/all-containers.log
```

### `server-bootstrap/`

Updates apt, installs git/curl/vim/nginx, creates a `developer` user, copies bashrc + vimrc.

```bash
cd server-bootstrap
chmod +x scripts/bootstrap.sh
./scripts/bootstrap.sh
```

### `config-drift/`

Diffs `golden/nginx.conf` against `server/nginx.conf` and appends results to `logs/drift.log`.

```bash
cd config-drift
chmod +x scripts/check_drift.sh
./scripts/check_drift.sh
```

### `resource-logger/`

Appends timestamped CPU, memory, and disk usage to `logs/resource.csv`.

```bash
cd resource-logger
chmod +x scripts/resource_logger.sh
./scripts/resource_logger.sh
```

### `service-watchdog/`

Checks `nginx` and `mysql` via `systemctl`; restarts if stopped; logs to `logs/watchdog.log`.

```bash
cd service-watchdog
chmod +x scripts/watchdog.sh
./scripts/watchdog.sh
```

---

## 2. Food-Delivery (MERN + Docker)

Full-stack food ordering app: React (Vite) frontend, React admin, Node/Express backend, MongoDB.

| Service   | Port | Notes                          |
|-----------|------|--------------------------------|
| Frontend  | 3000 | Nginx + `/api` proxy           |
| Admin     | 3001 | Nginx + `/api` proxy           |
| Backend   | 4000 | Internal (via Compose network) |
| MongoDB   | —    | Internal volume                |

### Run with Docker Compose

```bash
cd Food-Delivery
docker compose up --build -d
# Frontend: http://localhost:3000
# Admin:    http://localhost:3001
```

### Run locally (without Docker)

```bash
cp .env.example backend/.env   # fill JWT_SECRET, MONGO_URL, etc.

cd backend && npm install && node server.js
cd frontend && npm install && npm run dev
cd admin && npm install && npm run dev
```

Key Docker files: `docker-compose.yml`, `Dockerfile.backend`, `Dockerfile.frontend`, `Dockerfile.admin`, `nginx.conf`.

---

## 3. Kaneo (self-hosted project management)

Open-source Kaneo stack with PostgreSQL via Docker Compose.

```bash
cd kaneo
cp .env.sample .env   # set AUTH_SECRET, POSTGRES_*, URLs
docker compose -f compose.yml up -d
# App: http://localhost:5173
```

Local monorepo development (requires pnpm):

```bash
cd kaneo
pnpm install
pnpm dev
```

See `kaneo/ENVIRONMENT_SETUP.md` and `kaneo/README.md` for full details.

---

## 4. CICD-tasks

Hands-on CI/CD practice across Jenkins, GitHub Actions, and GitLab CI.

| Path | What it demonstrates |
|------|----------------------|
| `Jenkins-Test/` | Angular app + `Jenkinsfile` + Dockerfile (build/push image) |
| `my-project/` | Gradle/Java app + Jenkins Docker build/push + GitHub Actions (`CITest.yml`) |
| `porfolio.dev/` | Astro portfolio + Jenkins pipeline (build/push params) + `compose.yml` |
| `staticman/` | Node service + GitHub Actions Docker Hub build/push workflow |
| `example-static-website-docker-nginx-certbot/` | Static site with Nginx + Certbot Compose setup |
| `devops-directive-github-actions-course/` | GitHub Actions course materials + capstone |
| `gitlab/gitlab-cicd-crash-course/` | GitLab CI crash course (`.gitlab-ci.yml`) |
| `gitlab/dreamocel-portfolio/` | Next.js portfolio with GitLab CI |
| `Spoon-Knife/` | GitHub fork/PR practice sample |
| `workout-management-service/` | Tiny Go Echo API (`main.go`) |

### Typical commands

```bash
# Jenkins-style Java image
cd CICD-tasks/my-project
./gradlew build
docker build -t java-app .

# Portfolio Compose
cd CICD-tasks/porfolio.dev
docker compose up --build

# Static site + certbot example
cd CICD-tasks/example-static-website-docker-nginx-certbot
docker compose up --build

# Go workout API
cd CICD-tasks/workout-management-service
go run main.go
```

---

## Prerequisites

- Bash / Linux (or WSL)
- Git
- Docker + Docker Compose (for containerized projects)
- Node.js 20+ (Food-Delivery local runs)
- pnpm (Kaneo local monorepo)
- Java / Gradle (optional, `my-project`)
- Go (optional, workout service)
- Jenkins / GitLab Runner (optional, for pipeline practice)

---

## Cleanup notes

Removed before publishing:

- `junk/` (large unrelated tarballs / scratch files)
- Empty placeholder dirs (`docker/`, `dockerTask/`)
- Trivial `scp-test/` practice files
- Vim swap files (`*.swp`, `*.swo`, …)
- Nested `.git` directories (so this is one monorepo)
- `node_modules/` and compiled binaries
- Local `.env` files with secrets (use `.env.sample` / `.env.example`)

---

## Create & push to GitHub (`Arcanafinaltasks`)

Commands are listed in the chat response and below for convenience.

```bash
cd /mnt/data/sherry/arcanatasks

git init
git add .
git commit -m "Initial commit: Arcana DevOps and CI/CD practice tasks"

# create private or public repo, then push
gh repo create Arcanafinaltasks --public --source=. --remote=origin --push
```

If you prefer HTTPS/SSH without `gh`:

```bash
# create empty repo named Arcanafinaltasks on GitHub first, then:
git remote add origin https://github.com/<YOUR_USERNAME>/Arcanafinaltasks.git
git branch -M main
git push -u origin main
```
