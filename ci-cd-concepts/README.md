# CI/CD Concepts Demo

Minimal bash pipeline that demonstrates lint → test → build → package.

## Run

```bash
chmod +x scripts/*.sh tests/test.sh app/main.sh
./scripts/pipeline.sh
```

## Stages

| Script | Purpose |
|--------|---------|
| `scripts/lint.sh` | Fails if `TODO` appears in `app/main.sh` |
| `tests/test.sh` | Asserts app output is `Hello from CI/CD Demo` |
| `scripts/build.sh` | Copies app into `build/` |
| `scripts/package.sh` | Creates `dist/app.tar.gz` |
