# Create Branch Command Guide

## Overview

The `create-branch` command creates a new Git branch following a standardized naming convention based on task number, type, and description.

## Usage

### Basic Syntax

```bash
nitor create-branch -task <task number> -type <feat|fix> -description <description> -project <project short name>
```

### Short Form

```bash
nitor create-branch -t <task number> -ty <feat|fix> -d <description> -p <project short name>
```

## Options

| Option          | Short   | Description        | Values                                                                                                                                        |
| --------------- | ------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--task`        | `-t`    | Task number        | Any task/ticket number                                                                                                                        |
| `--type`        | `-ty`   | Branch type        | `feat`, `fix`                                                                                                                                 |
| `--description` | `-d`    | Branch description | Any descriptive text                                                                                                                          |
| `--project`     | `-p`    | Project short name | `portal`, `gateway`, `phr`, `configService`, `healthRecords`, `centralAuth`, `mpi`, `phrAdminBackend`, `phrAdminClient`, `terminologyService` |
| `--help`        | `-help` | Show help          | -                                                                                                                                             |

## Examples

### Create Feature Branch

```bash
nitor create-branch -t 1234 -ty feat -d "add-user-authentication" -p portal
```

This creates a branch like: `feat/1234-add-user-authentication`

### Create Bug Fix Branch

```bash
nitor create-branch -task 5678 -type fix -description "fix-login-issue" -project gateway
```

This creates a branch like: `fix/5678-fix-login-issue`

### Create Branch Without Project

```bash
nitor create-branch -t 9012 -ty feat -d "update-api-endpoints"
```

## Branch Types

### feat (Feature)

Use for new features or enhancements:

- New functionality
- Feature additions
- Enhancements to existing features

### fix (Bug Fix)

Use for bug fixes:

- Bug corrections
- Issue resolutions
- Hotfixes

## Branch Naming Convention

Branches are created following this pattern:

```
<type>/<task-number>-<description>
```

**Examples:**

- `feat/1234-user-profile-page`
- `fix/5678-login-validation-error`
- `feat/9012-api-integration`

## Supported Projects

- **portal** - Portal application
- **gateway** - Gateway service
- **phr** - Personal Health Records
- **configService** - Configuration service
- **healthRecords** - Health records service
- **centralAuth** - Central authentication service
- **mpi** - Master Patient Index
- **phrAdminBackend** - PHR admin backend
- **phrAdminClient** - PHR admin client
- **terminologyService** - Terminology service

## Branch Creation Process

The command will:

1. Validate task number, type, and description
2. Format the branch name according to convention
3. Create the new branch from current branch
4. Checkout to the new branch

## Best Practices

### Description Guidelines

- Use lowercase letters
- Use hyphens to separate words
- Be descriptive but concise
- Avoid special characters

**Good:**

- `add-user-authentication`
- `fix-payment-gateway-error`
- `update-dashboard-layout`

**Avoid:**

- `Add User Authentication` (uppercase)
- `fix_payment_error` (underscores)
- `update` (too vague)

### Task Numbers

- Use your project management system's task/ticket number
- Ensure the number is accurate for tracking
- Include the full ticket number

## Troubleshooting

### Branch Already Exists

If the branch name already exists:

1. Check if you're working on the same task
2. Use a different description
3. Delete the old branch if it's no longer needed

### Invalid Branch Type

Ensure you're using one of the supported types:

- `feat` for features
- `fix` for bug fixes

### Git Errors

If you encounter Git errors:

1. Ensure you're in a Git repository
2. Check that you have uncommitted changes
3. Verify Git is properly configured

## Getting Help

To see all available options:

```bash
nitor create-branch -help
```

## Related Commands

- `nitor merge` - Merge branches
- `nitor cleanup` - Clean up local branches
- `nitor review` - Review merge requests
