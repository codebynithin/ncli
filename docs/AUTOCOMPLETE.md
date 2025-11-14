# Autocomplete Setup Guide

## Overview

Nitor supports shell autocomplete for commands, options, and values using the `omelette` library.

## Setup

### 1. Install Autocomplete

After installing nitor globally, run:

```bash
nitor completion
```

### 2. Activate Autocomplete

Restart your terminal or source your shell configuration:

**For Bash:**

```bash
source ~/.bashrc
```

**For Zsh:**

```bash
source ~/.zshrc
```

**For Fish:**

```bash
source ~/.config/fish/config.fish
```

## Usage

Once autocomplete is enabled, press `Tab` to see suggestions:

### Command Completion

```bash
nitor <Tab>
# Shows: build, deploy, build-deploy, create-branch, review, refactor, backup, merge, cleanup, version, help
```

### Option Completion

```bash
nitor build -<Tab>
# Shows: -project, -p, -components, -c, -instance, -i, -help, --h
```

### Value Completion

```bash
nitor build -project <Tab>
# Shows: portal, gateway, phr, configService, healthRecords, centralAuth, mpi, phrAdminBackend, phrAdminClient, terminologyService

nitor build -instance <Tab>
# Shows: dev, qa, pilot

nitor create-branch -type <Tab>
# Shows: feat, fix
```

## Supported Completions

### Commands

- `build`, `deploy`, `build-deploy`
- `create-branch`, `review`, `refactor`
- `backup`, `merge`, `cleanup`
- `version`, `help`, `completion`

### Options

- Project names: `portal`, `gateway`, `phr`, etc.
- Components: `client`, `administration`, `provider`, `rest-api`
- Instances: `dev`, `qa`, `pilot`
- Branch types: `feat`, `fix`
- Repository names: `portalClient`, `portalBackend`, etc.

## Troubleshooting

### Autocomplete Not Working

1. **Verify installation:**

   ```bash
   nitor completion
   ```

2. **Check shell configuration:**

   - Bash: `~/.bashrc`
   - Zsh: `~/.zshrc`
   - Fish: `~/.config/fish/config.fish`

3. **Reload shell:**
   ```bash
   exec $SHELL
   ```

### Manual Setup

If automatic setup doesn't work, add this to your shell configuration:

**Bash (~/.bashrc):**

```bash
# nitor autocomplete
if type nitor > /dev/null 2>&1; then
  eval "$(nitor --completion)"
fi
```

**Zsh (~/.zshrc):**

```bash
# nitor autocomplete
if type nitor > /dev/null 2>&1; then
  eval "$(nitor --completion)"
fi
```

## Uninstall Autocomplete

To remove autocomplete, edit your shell configuration file and remove the nitor completion lines, then reload your shell.
