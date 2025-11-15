# Nitor Documentation

Complete documentation for the Nitor CLI tool.

## Table of Contents

- [Getting Started](#getting-started)
- [Command Reference](#command-reference)
- [Setup Guides](#setup-guides)

## Getting Started

Nitor is a command-line interface tool designed to streamline development workflows including building, deploying, branch management, code review, and more.

### Installation

```bash
npm install -g nitor
```

### Quick Start

```bash
# View all available commands
nitor help

# Setup autocomplete
nitor completion

# Get help for specific command
nitor <command> -help
```

## Command Reference

### Build & Deploy Commands

- **[build](./BUILD.md)** - Build specified components
- **[deploy](./DEPLOY.md)** - Deploy built components
- **[build-deploy](./BUILD_DEPLOY.md)** - Build and deploy in one command

### Git Workflow Commands

- **[create-branch](./CREATE_BRANCH.md)** - Create standardized Git branches
- **[merge](./MERGE.md)** - Safely merge branches
- **[cleanup](./CLEANUP.md)** - Clean up local branches

### Code Quality Commands

- **[review](./REVIEW.md)** - AI-powered code review for merge requests
- **[refactor](./REFACTOR.md)** - AI-enhanced text refinement

### Database Commands

- **[backup](./BACKUP.md)** - MongoDB database backups

## Setup Guides

### Autocomplete

See [AUTOCOMPLETE.md](./AUTOCOMPLETE.md) for detailed autocomplete setup instructions.

Quick setup:

```bash
nitor completion
source ~/.bashrc  # or ~/.zshrc for zsh
```

## Command Categories

### Development Workflow

```bash
# 1. Create a feature branch
nitor create-branch -t 123 -ty feat -d "user-authentication" -p portal

# 2. Build your changes
nitor build -p portal -c client -i dev

# 3. Deploy to dev environment
nitor deploy -p portal -c client -i dev

# 4. Or build and deploy together
nitor build-deploy -p portal -c client -i dev
```

### Code Review Workflow

```bash
# Review merge request with AI
nitor review -r portalClient -mId 456

# Refactor commit messages
nitor refactor "fixed some bugs in login"
```

### Branch Management

```bash
# Merge feature to development
nitor merge -s feat/123-user-auth -ta development

# Clean up old branches
nitor cleanup
```

### Database Management

```bash
# Backup production database
nitor backup -p medicaPortal
```

## Common Use Cases

### Daily Development

```bash
# Start new feature
nitor create-branch -t 789 -ty feat -d "payment-integration"

# Build and test
nitor build -p gateway -c rest-api -i dev

# Deploy when ready
nitor deploy -p gateway -c rest-api -i dev
```

### Release Process

```bash
# Build for QA
nitor build-deploy -p portal -c client -i qa

# Review changes
nitor review -r portalClient -mId 123

# Merge to master
nitor merge -s development -ta master

# Deploy to production
nitor deploy -p portal -c client -i pilot
```

### Maintenance

```bash
# Backup before major changes
nitor backup -p configService

# Clean up old branches
nitor cleanup
```

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

## Supported Components

- **client** - Frontend client application
- **administration** - Administration panel
- **provider** - Provider interface
- **rest-api** - REST API backend

## Supported Instances

- **dev** - Development environment
- **qa** - Quality assurance environment
- **pilot** - Pilot/staging environment

## Getting Help

For any command, use the `-help` flag:

```bash
nitor <command> -help
```

Examples:

```bash
nitor build -help
nitor deploy -help
nitor create-branch -help
```

## Version Information

Check your Nitor version:

```bash
nitor version
```

## Troubleshooting

### Common Issues

1. **Command not found**

   - Ensure Nitor is installed globally: `npm install -g nitor`
   - Check PATH includes npm global bin directory

2. **Autocomplete not working**

   - Run `nitor completion`
   - Restart terminal or source shell config
   - See [AUTOCOMPLETE.md](./AUTOCOMPLETE.md) for details

3. **Build/Deploy failures**

   - Check credentials and permissions
   - Verify project and component names
   - Review error messages in output

4. **Git operations fail**
   - Ensure you're in a Git repository
   - Check for uncommitted changes
   - Verify branch names are correct

## Contributing

For issues, feature requests, or contributions, visit:
https://github.com/codebynithin/nitor

## License

ISC License - See LICENSE file for details

## Author

Nithin V <mails2nithin@gmail.com>

---

For detailed information about each command, click on the links in the [Command Reference](#command-reference) section above.
