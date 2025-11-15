# Deploy Command Guide

## Overview

The `deploy` command deploys previously built components to specified instances. It works with projects that have already been successfully built.

## Usage

### Basic Syntax

```bash
nitor deploy -project <project name> -components <component name> -instance <instance name>
```

### Short Form

```bash
nitor deploy -p <project name> -c <component name> -i <instance name>
```

## Options

| Option         | Short   | Description    | Values                                                                                                                                        |
| -------------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project`    | `-p`    | Project name   | `portal`, `gateway`, `phr`, `configService`, `healthRecords`, `centralAuth`, `mpi`, `phrAdminBackend`, `phrAdminClient`, `terminologyService` |
| `--components` | `-c`    | Component name | `client`, `administration`, `provider`, `rest-api`                                                                                            |
| `--instance`   | `-i`    | Instance name  | `dev`, `qa`, `pilot`                                                                                                                          |
| `--help`       | `-help` | Show help      | -                                                                                                                                             |

## Examples

### Deploy Portal Client to Dev

```bash
nitor deploy -p portal -c client -i dev
```

### Deploy Gateway Backend to QA

```bash
nitor deploy -project gateway -components rest-api -instance qa
```

### Deploy Multiple Components

```bash
nitor deploy -p phr -c "client administration" -i pilot
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

## Deployment Process

The deploy command will:

1. Validate project, component, and instance parameters
2. Check if components are built and ready
3. Deploy components to the specified instance
4. Verify deployment status
5. Report deployment results

## Prerequisites

Before deploying:

- Components must be successfully built
- You must have proper deployment credentials
- Target instance must be accessible

## Troubleshooting

### Deployment Fails

1. **Check if build exists:**
   Ensure components are built before deploying

   ```bash
   nitor build -p <project> -c <component> -i <instance>
   ```

2. **Verify credentials:**
   Check that you have proper deployment permissions

3. **Check instance status:**
   Ensure the target instance is running and accessible

### Connection Issues

If deployment fails due to connection:

- Verify network connectivity
- Check VPN connection if required
- Confirm instance URL is correct

## Getting Help

To see all available options:

```bash
nitor deploy -help
```

## Related Commands

- `nitor build` - Build components before deployment
- `nitor build-deploy` - Build and deploy in one command
