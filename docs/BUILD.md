# Build Command Guide

## Overview

The `build` command compiles and builds specified components of your projects. It supports building multiple projects, components, and instances.

## Usage

### Basic Syntax

```bash
nitor build -project <project name> -components <component name> -instance <instance name>
```

### Short Form

```bash
nitor build -p <project name> -c <component name> -i <instance name>
```

## Options

| Option         | Short   | Description    | Values                                                                                                                                        |
| -------------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project`    | `-p`    | Project name   | `portal`, `gateway`, `phr`, `configService`, `healthRecords`, `centralAuth`, `mpi`, `phrAdminBackend`, `phrAdminClient`, `terminologyService` |
| `--components` | `-c`    | Component name | `client`, `administration`, `provider`, `rest-api`                                                                                            |
| `--instance`   | `-i`    | Instance name  | `dev`, `qa`, `pilot`                                                                                                                          |
| `--help`       | `-help` | Show help      | -                                                                                                                                             |

## Examples

### Build Portal Client for Dev

```bash
nitor build -p portal -c client -i dev
```

### Build Gateway Backend for QA

```bash
nitor build -project gateway -components rest-api -instance qa
```

### Build Multiple Components

```bash
nitor build -p phr -c "client administration" -i pilot
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

## Build Process

The build command will:

1. Validate project, component, and instance parameters
2. Trigger the build process for specified components
3. Monitor build status
4. Report build results

## Troubleshooting

### Build Fails

1. **Check parameters:**

   ```bash
   nitor build -help
   ```

2. **Verify project exists:**
   Ensure the project name is correct and exists in the supported projects list

3. **Check build logs:**
   Review the build output for specific error messages

### Invalid Component

If you receive an error about invalid components, verify that:

- The component name is spelled correctly
- The component exists for the specified project
- You're using the correct instance

## Getting Help

To see all available options:

```bash
nitor build -help
```

## Related Commands

- `nitor deploy` - Deploy built components
- `nitor build-deploy` - Build and deploy in one command
