# Merge Command Guide

## Overview

The `merge` command safely merges a source branch into a target branch with automatic pull and push operations.

## Usage

### Basic Syntax

```bash
nitor merge -source <source branch> -target <target branch>
```

### Short Form

```bash
nitor merge -s <source branch> -ta <target branch>
```

## Options

| Option     | Short   | Description        | Required |
| ---------- | ------- | ------------------ | -------- |
| `--source` | `-s`    | Source branch name | Yes      |
| `--target` | `-ta`   | Target branch name | Yes      |
| `--help`   | `-help` | Show help          | -        |

## Examples

### Merge Feature to Development

```bash
nitor merge -s feat/123-new-feature -ta development
```

### Merge Development to Master

```bash
nitor merge -source development -target master
```

### Merge Fix to Release Branch

```bash
nitor merge -s fix/456-bug-fix -ta release/v1.2.0
```

## Merge Process

The merge command performs these steps automatically:

1. **Pull Latest Changes**

   - Fetches latest updates from remote

2. **Checkout Source Branch**

   - Switches to source branch
   - Pulls latest changes

3. **Checkout Target Branch**

   - Switches to target branch
   - Pulls latest changes

4. **Merge Source into Target**

   - Merges source branch into target
   - Handles merge conflicts if any

5. **Push Changes**
   - Pushes merged changes to remote

## Branch Naming

You can use any valid Git branch names:

### Common Patterns

- `master` or `main` - Main branch
- `development` or `dev` - Development branch
- `feat/<description>` - Feature branches
- `fix/<description>` - Bug fix branches
- `release/<version>` - Release branches
- `hotfix/<description>` - Hotfix branches

## Handling Merge Conflicts

If conflicts occur during merge:

1. The command will notify you of conflicts
2. Manually resolve conflicts in affected files
3. Stage resolved files:
   ```bash
   git add <resolved-files>
   ```
4. Complete the merge:
   ```bash
   git commit
   ```
5. Push changes:
   ```bash
   git push
   ```

## Best Practices

### Before Merging

1. **Ensure Clean Working Directory**

   ```bash
   git status
   ```

   Commit or stash any uncommitted changes

2. **Test Source Branch**

   - Run tests on source branch
   - Verify functionality works

3. **Review Changes**
   ```bash
   git log target..source
   ```
   Review commits being merged

### After Merging

1. **Verify Merge**

   - Check that all changes are included
   - Run tests on target branch

2. **Notify Team**

   - Inform team members of the merge
   - Update relevant documentation

3. **Delete Feature Branch** (if applicable)
   ```bash
   git branch -d feat/123-feature-name
   ```

## Common Merge Scenarios

### Merge Feature to Development

```bash
# After completing feature work
nitor merge -s feat/123-user-auth -ta development
```

### Merge Development to Master

```bash
# For production release
nitor merge -s development -ta master
```

### Merge Hotfix to Multiple Branches

```bash
# Merge to master
nitor merge -s hotfix/critical-bug -ta master

# Then merge to development
nitor merge -s hotfix/critical-bug -ta development
```

## Troubleshooting

### Merge Conflicts

If you encounter conflicts:

1. **Identify conflicted files:**

   ```bash
   git status
   ```

2. **Open and resolve conflicts:**

   - Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Choose the correct code
   - Remove conflict markers

3. **Complete merge:**
   ```bash
   git add <resolved-files>
   git commit
   git push
   ```

### Failed to Push

If push fails:

1. **Pull latest changes:**

   ```bash
   git pull
   ```

2. **Resolve any conflicts**

3. **Push again:**
   ```bash
   git push
   ```

### Branch Not Found

If source or target branch doesn't exist:

1. **List available branches:**

   ```bash
   git branch -a
   ```

2. **Verify branch names are correct**

3. **Fetch remote branches:**
   ```bash
   git fetch
   ```

## Safety Features

The merge command includes safety checks:

- Pulls latest changes before merging
- Ensures branches are up-to-date
- Validates branch existence
- Handles merge conflicts gracefully

## Getting Help

To see all available options:

```bash
nitor merge -help
```

## Related Commands

- `nitor create-branch` - Create new branches
- `nitor cleanup` - Clean up merged branches
- `nitor review` - Review merge requests
