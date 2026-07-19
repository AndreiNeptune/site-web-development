# Contributing Guidelines

Thank you for contributing to Omnivo! To maintain code quality and professional standards, please follow these guidelines.

## 📝 Commit Message Convention

We strictly enforce **Conventional Commits**. Please format your commit messages as follows:

```
<type>(<scope>): <description>
```

### Types:
- `feat`: A new user-facing feature.
- `fix`: A bug fix.
- `chore`: Maintenance tasks, package installations, config changes (no production code modifications).
- `docs`: Documentation updates (README, comments).
- `refactor`: Code changes that neither fix a bug nor add a feature.
- `style`: Changes that do not affect the meaning of the code (formatting, white-space, etc.).

### Examples:
- `chore: configure sentry nextjs wrapper`
- `feat(contact): capture submission events in posthog`
- `fix(db): ensure RLS policies are defined on contact_requests`

---

## 💻 Development Workflow

1. **Branching:** Create feature branches off `master` (or `main`) using the following naming structure:
   - `feature/short-description`
   - `bugfix/short-description`
2. **Linting and Types:** Ensure the code compiles and passes lints locally before pushing:
   ```bash
   npm run lint
   npm run build
   ```
3. **Pull Requests:** Open a Pull Request targeting the main branch. Ensure all continuous integration (CI) tests and builds pass.
