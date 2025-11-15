# Review Command Guide

## Overview

The `review` command performs AI-powered code review on merge requests. It analyzes the code changes and provides intelligent feedback and suggestions.

## Usage

### Basic Syntax

```bash
nitor review -project <project short name> -mergeId <merge id> -repository <repository name>
```

### Short Form

```bash
nitor review -p <project short name> -mId <merge id> -r <repository name>
```

## Options

| Option         | Short   | Description        | Required |
| -------------- | ------- | ------------------ | -------- |
| `--project`    | `-p`    | Project short name | Optional |
| `--mergeId`    | `-mId`  | Merge request ID   | Yes      |
| `--repository` | `-r`    | Repository name    | Yes      |
| `--help`       | `-help` | Show help          | -        |

## Examples

### Review Portal Merge Request

```bash
nitor review -p portal -mId 123 -r portalClient
```

### Review Gateway Backend MR

```bash
nitor review -repository gatewayBackend -mergeId 456
```

### Review PHR Client Changes

```bash
nitor review -r phrClient -mId 789
```

## Supported Repositories

- **centralAuth** - Central authentication service
- **configService** - Configuration service
- **gatewayBackend** - Gateway backend service
- **gatewayClient** - Gateway client application
- **gatewayDeployment** - Gateway deployment configs
- **healthRecords** - Health records service
- **mpi** - Master Patient Index
- **phrAdminBackend** - PHR admin backend
- **phrAdminClient** - PHR admin client
- **phrBackend** - PHR backend service
- **phrClient** - PHR client application
- **phrDeployment** - PHR deployment configs
- **portalAutomation** - Portal automation tests
- **portalBackend** - Portal backend service
- **portalClient** - Portal client application
- **portalDeployment** - Portal deployment configs
- **terminologyService** - Terminology service

## Review Process

The AI review will:

1. Fetch the merge request details
2. Analyze code changes and diffs
3. Check for:
   - Code quality issues
   - Potential bugs
   - Security vulnerabilities
   - Best practice violations
   - Performance concerns
4. Generate detailed feedback
5. Provide improvement suggestions

## What Gets Reviewed

### Code Quality

- Code structure and organization
- Naming conventions
- Code duplication
- Complexity analysis

### Security

- Authentication/authorization issues
- Input validation
- SQL injection risks
- XSS vulnerabilities
- Sensitive data exposure

### Performance

- Inefficient algorithms
- Database query optimization
- Memory leaks
- Resource management

### Best Practices

- Design patterns
- Error handling
- Logging practices
- Documentation

## Understanding Review Output

The review will provide:

- **Issues Found** - List of problems detected
- **Severity Levels** - Critical, High, Medium, Low
- **Suggestions** - Recommended fixes and improvements
- **Code Examples** - Better alternatives when applicable

## Prerequisites

Before running a review:

- Merge request must exist
- You need access to the repository
- AI service must be configured

## Troubleshooting

### Review Fails to Start

1. **Check merge request ID:**

   ```bash
   # Verify the MR ID is correct
   ```

2. **Verify repository name:**
   Ensure the repository name matches exactly from the supported list

3. **Check permissions:**
   Confirm you have access to the repository

### No Feedback Generated

If review completes but provides no feedback:

- The changes might be minimal
- Code might already follow best practices
- Check if the MR has any code changes

### API Errors

If you encounter API errors:

- Verify your API credentials are configured
- Check network connectivity
- Ensure the AI service is available

## Configuration

The review command requires:

- GitLab/GitHub access token
- AI service API key (Google Generative AI)
- Proper repository permissions

## Getting Help

To see all available options:

```bash
nitor review -help
```

## Related Commands

- `nitor create-branch` - Create feature branches
- `nitor merge` - Merge branches
- `nitor refactor` - Refactor text/code
