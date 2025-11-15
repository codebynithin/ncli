# Cleanup Command Guide

## Overview

The `cleanup` command removes all local Git branches except the main branch (master or main), helping you maintain a clean local repository.

## Usage

### Basic Syntax

```bash
nitor cleanup
```

## Options

| Option   | Short   | Description |
| -------- | ------- | ----------- |
| `--help` | `-help` | Show help   |

## What It Does

The cleanup command performs these operations:

1. **Checkout to Main Branch**

   - Switches to `master` or `main` branch
   - Ensures you're not on a branch being deleted

2. **Delete All Other Local Branches**
   - Removes all local branches except master/main
   - Cleans up your local repository

## Examples

### Basic Cleanup

```bash
nitor cleanup
```

This will:

- Checkout to master (or main)
- Delete all other local branches

## When to Use Cleanup

### Good Times to Cleanup

- **After Merging Features**
  - When feature branches are merged and no longer needed
- **Regular Maintenance**

  - Weekly or monthly cleanup of old branches

- **Before Starting New Work**

  - Clean slate for new development

- **After Release**
  - Remove branches from previous release cycle

### When NOT to Cleanup

- **Unmerged Work**

  - If you have branches with uncommitted or unpushed work

- **Active Development**

  - When working on multiple features simultaneously

- **Shared Branches**
  - If others are collaborating on your local branches

## Important Warnings

### ⚠️ This Operation Cannot Be Undone

Once branches are deleted locally, you cannot recover them unless:

- They exist on remote
- You have a backup

### Before Running Cleanup

1. **Check for Uncommitted Changes**

   ```bash
   git status
   ```

2. **List All Branches**

   ```bash
   git branch
   ```

3. **Push Important Branches**

   ```bash
   git push origin <branch-name>
   ```

4. **Verify Merged Status**
   ```bash
   git branch --merged
   ```

## What Gets Deleted

### Deleted

- All local feature branches
- All local fix branches
- All local development branches
- Any other local branches except master/main

### Preserved

- `master` branch
- `main` branch
- Remote branches (not affected)

## Safe Cleanup Workflow

### Step 1: Review Branches

```bash
# List all local branches
git branch

# List merged branches
git branch --merged

# List unmerged branches
git branch --no-merged
```

### Step 2: Push Important Work

```bash
# Push specific branch
git push origin <branch-name>

# Or push all branches
git push --all
```

### Step 3: Run Cleanup

```bash
nitor cleanup
```

### Step 4: Verify

```bash
# Check remaining branches
git branch
```

## Recovering Deleted Branches

If you accidentally delete a branch:

### If Branch Exists on Remote

```bash
# Fetch from remote
git fetch origin

# Checkout remote branch
git checkout -b <branch-name> origin/<branch-name>
```

### If Branch Was Recently Deleted

```bash
# Find the commit hash
git reflog

# Recreate branch from commit
git checkout -b <branch-name> <commit-hash>
```

## Alternative: Manual Cleanup

If you prefer more control:

### Delete Specific Branch

```bash
git branch -d <branch-name>
```

### Force Delete Branch

```bash
git branch -D <branch-name>
```

### Delete Multiple Branches

```bash
git branch | grep -v "master\|main" | xargs git branch -D
```

## Troubleshooting

### Cannot Delete Current Branch

If you're on a branch being deleted:

```bash
git checkout master
nitor cleanup
```

### Branch Has Unmerged Changes

If a branch has unmerged changes:

1. **Review changes:**

   ```bash
   git log master..<branch-name>
   ```

2. **Merge if needed:**

   ```bash
   nitor merge -s <branch-name> -ta master
   ```

3. **Then cleanup:**
   ```bash
   nitor cleanup
   ```

### Master/Main Branch Not Found

If neither master nor main exists:

1. Create one:
   ```bash
   git checkout -b master
   ```
2. Then run cleanup

## Best Practices

### Regular Cleanup Schedule

- **Weekly** - For active projects
- **After Each Sprint** - For agile teams
- **After Releases** - For release-based workflows

### Pre-Cleanup Checklist

- [ ] All important work is committed
- [ ] All important branches are pushed to remote
- [ ] No active work in progress
- [ ] Team members notified (if applicable)

### Post-Cleanup Verification

- [ ] Only master/main remains locally
- [ ] Remote branches still accessible
- [ ] No important work lost

## Getting Help

To see all available options:

```bash
nitor cleanup -help
```

## Related Commands

- `nitor merge` - Merge branches before cleanup
- `nitor create-branch` - Create new branches after cleanup
- Standard Git commands for branch management
