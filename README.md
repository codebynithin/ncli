# nitor

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/codebynithin/time-entry">
    <img src="./favicon.png" alt="Logo" width="80" height="80">
  </a>
</div>

A CLI utility toolkit for automating and managing build, deploy, and status operations for projects, AI code review, AI text refactor and related components.

## Features

- Build and deploy Gitlab project
- Check build and deployment status
- Utility functions for parameter parsing and object cleaning
- Extensible and scriptable for automation
- Create git branch
- AI Review merge request
- AI text refactoring
- Backup and restore MongoDB
- Merge git branches
- Cleanup local git branches

## Requirements

- Node.js >= 14.x
- npm >= 6.x
- A properly configured `.env.nu` file in your `~/Desktop` directory with required tokens and URLs:
  - `CSRF_TOKEN` - CSRF token for Gitlab (Copy from browser)
  - `COOKIE` - Cookie for Gitlab (Copy from browser)
  - `ORIGIN` - Origin for Gitlab website url, eg: `https://gitlab.com/`
  - `GITLAB_TOKEN` - Gitlab token
  - `MR_PROMPT` - Merge request prompt
  - `MR_LANG` - Merge request language
  - `AI_API_KEY` - AI API key
  - `AI_MODEL` - AI model
  - `BACKUP_CONFIG` - Backup configuration
  - `RESTORE_CONFIG` - Restore configuration

## Usage

You can use the CLI via the `nitor` command:

```bash
nitor <command> [options]
```

### Example Commands

- **Build:**
  ```bash
  nitor build -project <project name> -components <component name> -instance <instance name>
  ```
- **Deploy:**
  ```bash
  nitor deploy -project <project name> -components <component name> -instance <instance name>
  ```
- **Build & Deploy:**
  ```bash
  nitor build-deploy -project <project name> -components <component name> -instance <instance name>
  ```
- **Create branch:**
  ```bash
  nitor create-branch -task <task number> -type <feat|fix> -description <description> -repository <repository name>
  ```
- **Review:**
  ```bash
  nitor review -project <project short name> -mergeId <merge id> -repository <repository name>
  ```
- **Refactor Text:**
  ```bash
  nitor refactor <text>
  ```
- **Backup:**
  ```bash
  nitor backup <text>
  ```
- **Restore:**
  ```bash
  nitor restore <text>
  ```
- **Merge:**
  ```bash
  nitor merge -source <source branch> -target <target branch>
  ```
- **Cleanup:**
  ```bash
  nitor cleanup
  ```

### Command Reference

- `build` : Build specified components
- `deploy` : Deploy specified components
- `build-deploy` : Build and then deploy
- `version` : Show version info
- `help` : Show help
- `init` : Initialize configuration
- `create-branch` : Create git branch
- `review` : AI review specified merge request
- `refactor` : AI refactor specified text
- `backup` : Backup specified projects
- `restore` : Restore specified projects
- `merge` : Merge source branch into target branch
- `cleanup` : Cleanup local git branches (checkout to master and delete all other branches)

### Options

- `-project` or `-p` : Project name (`portal`, `gateway`, `phr`)
- `-components` or `-c` : Components (`client`, `backend`, etc.)
- `-instance` or `-i` : Instance/environment (`dev`, `qa`, `pilot`)
- `-branch` or `-b` : Git branch (optional)
- `-task` or `-t` : Task number
- `-type` or `-ty` : Type (`feat`, `fix`)
- `-description` or `-d` : Description
- `-repository` or `-r` : Repository name
- `-mergeId` or `-mId` : Merge ID
- `-source` or `-so` : Source branch name
- `-target` or `-ta` : Target branch name

## License

ISC

## Author

Nithin V (<mails2nithin@gmail.com>)
