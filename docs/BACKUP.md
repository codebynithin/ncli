# Backup Command Guide

## Overview

The `backup` command creates MongoDB database backups for specified projects and components, ensuring data safety and recovery options.

## Usage

### Basic Syntax

```bash
nitor backup -project <project name> -components <component name>
```

### Short Form

```bash
nitor backup -p <project name> -c <component name>
```

## Options

| Option         | Short   | Description    | Required |
| -------------- | ------- | -------------- | -------- |
| `--project`    | `-p`    | Project name   | Yes      |
| `--components` | `-c`    | Component name | Optional |
| `--help`       | `-help` | Show help      | -        |

## Examples

### Backup Config Service

```bash
nitor backup -p configService
```

### Backup Medica Central Auth

```bash
nitor backup -project medicaCentralAuth
```

### Backup Medica Portal

```bash
nitor backup -p medicaPortal
```

### Backup PHR System

```bash
nitor backup -project phr
```

## Supported Projects

- **configService** - Configuration service database
- **medicaCentralAuth** - Medica central authentication database
- **medicaPortal** - Medica portal database
- **phr** - Personal Health Records database

## Backup Process

The backup command will:

1. **Connect to MongoDB**

   - Establishes connection to database server
   - Authenticates with credentials

2. **Identify Databases**

   - Determines which databases to backup
   - Based on project and component parameters

3. **Create Backup**

   - Exports database collections
   - Preserves data structure and relationships

4. **Store Backup**

   - Saves backup to designated location
   - Includes timestamp in filename

5. **Verify Backup**
   - Confirms backup completion
   - Reports backup status

## Backup Location

Backups are typically stored in:

- Project-specific backup directory
- Timestamped folders for version control
- Compressed format for space efficiency

## Backup Naming Convention

Backups follow this pattern:

```
<project>_<component>_<timestamp>.backup
```

**Examples:**

- `configService_20241115_171030.backup`
- `medicaPortal_20241115_171030.backup`
- `phr_20241115_171030.backup`

## When to Backup

### Regular Backups

- **Daily** - For production databases
- **Before Deployments** - Prior to major changes
- **Before Migrations** - Before schema updates
- **Weekly** - For development databases

### Critical Moments

- Before major feature releases
- Before data migrations
- Before system upgrades
- After significant data changes

## Best Practices

### Backup Strategy

1. **Schedule Regular Backups**

   - Automate daily backups
   - Use cron jobs or schedulers

2. **Test Backups**

   - Regularly verify backup integrity
   - Practice restoration procedures

3. **Multiple Locations**

   - Store backups in multiple locations
   - Use cloud storage for redundancy

4. **Retention Policy**
   - Keep daily backups for 7 days
   - Keep weekly backups for 1 month
   - Keep monthly backups for 1 year

### Security

1. **Encrypt Backups**

   - Use encryption for sensitive data
   - Secure backup storage locations

2. **Access Control**

   - Limit backup access to authorized users
   - Use strong authentication

3. **Audit Trail**
   - Log backup operations
   - Track who created backups

## Restoration

To restore from a backup:

1. **Locate Backup File**

   ```bash
   ls -la /path/to/backups/
   ```

2. **Verify Backup Integrity**

   - Check file size
   - Verify timestamp

3. **Restore Database**

   ```bash
   mongorestore --archive=<backup-file>
   ```

4. **Verify Restoration**
   - Check data integrity
   - Test application functionality

## Troubleshooting

### Backup Fails to Start

1. **Check MongoDB Connection:**

   - Verify MongoDB is running
   - Test connection credentials
   - Check network connectivity

2. **Verify Permissions:**

   - Ensure user has backup privileges
   - Check file system permissions

3. **Check Disk Space:**
   ```bash
   df -h
   ```
   - Ensure sufficient space for backup

### Incomplete Backup

If backup completes but seems incomplete:

1. **Check Logs:**

   - Review backup logs for errors
   - Look for timeout issues

2. **Verify Collections:**

   - List all collections
   - Compare with backup contents

3. **Retry Backup:**
   - Run backup again
   - Use verbose mode for details

### Connection Errors

If you encounter connection errors:

1. **Verify MongoDB Status:**

   ```bash
   systemctl status mongod
   ```

2. **Check Credentials:**

   - Verify username and password
   - Ensure user has proper roles

3. **Test Connection:**
   ```bash
   mongo --host <host> --port <port>
   ```

## Configuration

The backup command requires:

1. **MongoDB Connection Details:**

   - Host and port
   - Database name
   - Authentication credentials

2. **Backup Storage:**

   - Backup directory path
   - Sufficient disk space
   - Write permissions

3. **Environment Variables:**
   - MongoDB connection string
   - Backup configuration

## Automation

### Cron Job Example

```bash
# Daily backup at 2 AM
0 2 * * * nitor backup -p configService

# Weekly backup on Sunday at 3 AM
0 3 * * 0 nitor backup -p medicaPortal

# Monthly backup on 1st at 4 AM
0 4 1 * * nitor backup -p phr
```

### Backup Script

```bash
#!/bin/bash
# Backup all projects

projects=("configService" "medicaCentralAuth" "medicaPortal" "phr")

for project in "${projects[@]}"; do
    echo "Backing up $project..."
    nitor backup -p "$project"
done

echo "All backups completed!"
```

## Monitoring

### Backup Verification

1. **Check Backup Size:**

   ```bash
   ls -lh /path/to/backups/
   ```

2. **Verify Timestamp:**

   - Ensure backup is recent
   - Check for stale backups

3. **Test Restoration:**
   - Periodically test restore process
   - Verify data integrity

### Alerts

Set up alerts for:

- Backup failures
- Disk space issues
- Connection problems
- Unusual backup sizes

## Getting Help

To see all available options:

```bash
nitor backup -help
```

## Related Commands

- `nitor build` - Build before backing up
- `nitor deploy` - Deploy after backup verification
- MongoDB tools for manual backup/restore
