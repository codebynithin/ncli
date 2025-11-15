# Build-Deploy Command Guide

## Overview

The `build-deploy` command combines build and deployment operations into a single workflow. It builds specified components, monitors the build status, and automatically deploys them if the build succeeds.

## Usage

### Basic Syntax

```bash
nitor build-deploy -project <project name> -components <component name> -instance <instance name>
```

### Short Form

```bash
nitor build-deploy -p <project name> -c <component name> -i <instance name>
```

## Options

| Option         | Short   | Description    | Values                                                                                                                                        |
| -------------- | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `--project`    | `-p`    | Project name   | `portal`, `gateway`, `phr`, `configService`, `healthRecords`, `centralAuth`, `mpi`, `phrAdminBackend`, `phrAdminClient`, `terminologyService` |
| `--components` | `-c`    | Component name | `client`, `administration`, `provider`, `rest-api`                                                                                            |
| `--instance`   | `-i`    | Instance name  | `dev`, `qa`, `pilot`                                                                                                                          |
| `--help`       | `-help` | Show help      | -                                                                                                                                             |

## Examples

### Build and Deploy Portal Client to Dev

```bash
nitor build-deploy -p portal -c client -i dev
```

### Build and Deploy Gateway Backend to QA

```bash
nitor build-deploy -project gateway -components rest-api -instance qa
```

### Build and Deploy Multiple Components

```bash
nitor build-deploy -p phr -c "client administration" -i pilot
```

## Workflow Process

The build-deploy command executes these steps:

### 1. Build Phase

- Validates project, component, and instance parameters
- Triggers build process for specified components
- Monitors build progress

### 2. Wait Period

- Waits for build to complete (approximately 4 minutes)
- Monitors build status
- Checks for build errors

### 3. Status Check

- Verifies build completion
- Checks if build passed or failed
- Determines if deployment should proceed

### 4. Deploy Phase (if build succeeds)

- Automatically deploys built components
- Pushes to specified instance
- Verifies deployment status

### 5. Result Reporting

- Reports final status
- Shows build and deployment results
- Provides error details if any

## Build Status Monitoring

The command monitors build with these statuses:

- **In Progress** - Build is currently running
- **Passed** - Build completed successfully
- **Failed** - Build encountered errors

## Deployment Conditions

Deployment proceeds only if:

- All components build successfully
- Build status is "passed" for all components
- No build errors occurred

If build fails:

- Deployment is skipped
- Error message is displayed
- Process exits with build failure status

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

## Advantages Over Separate Commands

### Time Saving

- Single command for both operations
- No manual intervention needed
- Automatic status monitoring

### Error Prevention

- Ensures build succeeds before deploying
- Prevents deploying broken builds
- Automatic validation

### Consistency

- Standardized workflow
- Reduces human error
- Ensures proper sequence

## When to Use Build-Deploy

### Good Use Cases

- **CI/CD Pipelines**

  - Automated deployment workflows
  - Continuous integration processes

- **Quick Iterations**

  - Rapid development cycles
  - Frequent updates

- **Tested Changes**
  - When confident in changes
  - After local testing

### When to Use Separate Commands

- **Testing Builds First**

  - When you want to verify build before deploying
  - For critical production changes

- **Delayed Deployment**

  - When deployment timing is important
  - Scheduled deployments

- **Multiple Environments**
  - Building once, deploying to multiple instances
  - Staged rollouts

## Timing

### Build Wait Time

The command waits approximately **4 minutes** (240 seconds) for build completion. This is:

- Sufficient for most builds
- Adjustable in the code if needed
- Includes buffer time for larger builds

### Total Process Time

Typical execution time:

- Build: 2-5 minutes
- Wait: 4 minutes
- Deploy: 1-3 minutes
- **Total: 7-12 minutes**

## Troubleshooting

### Build Fails

If build fails during build-deploy:

1. **Check build logs:**

   - Review error messages
   - Identify build issues

2. **Fix issues:**

   - Correct code errors
   - Update dependencies
   - Resolve conflicts

3. **Retry:**
   ```bash
   nitor build-deploy -p <project> -c <component> -i <instance>
   ```

### Deployment Skipped

If "Deploy skipped" message appears:

1. **Build failed:**

   - Check build error messages
   - Fix build issues
   - Rebuild

2. **Verify build status:**
   ```bash
   nitor build -p <project> -c <component> -i <instance>
   ```

### Timeout Issues

If build takes longer than expected:

1. **Check build progress:**

   - Monitor build system
   - Check for stuck processes

2. **Increase wait time:**
   - Modify wait duration in code
   - Or use separate build/deploy commands

### Connection Errors

If deployment fails due to connection:

1. **Verify network:**

   - Check internet connectivity
   - Verify VPN if required

2. **Check credentials:**
   - Ensure deployment credentials are valid
   - Verify permissions

## Best Practices

### Before Running

1. **Test Locally:**

   - Run tests on local machine
   - Verify code compiles

2. **Commit Changes:**

   - Ensure all changes are committed
   - Push to repository

3. **Check Instance:**
   - Verify target instance is correct
   - Confirm instance is available

### During Execution

1. **Monitor Progress:**

   - Watch build logs
   - Check for errors

2. **Don't Interrupt:**
   - Let process complete
   - Avoid canceling mid-build

### After Completion

1. **Verify Deployment:**

   - Test deployed application
   - Check functionality

2. **Monitor Logs:**
   - Watch application logs
   - Check for runtime errors

## Getting Help

To see all available options:

```bash
nitor build-deploy -help
```

## Related Commands

- `nitor build` - Build only
- `nitor deploy` - Deploy only
- `nitor review` - Review before deploying
