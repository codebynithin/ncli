# Refactor Command Guide

## Overview

The `refactor` command uses AI to enhance and improve text for better clarity, conciseness, and professional quality. It's perfect for refining documentation, commit messages, code comments, and other written content.

## Usage

### Basic Syntax

```bash
nitor refactor <text>
```

## Options

| Option   | Short   | Description |
| -------- | ------- | ----------- |
| `--help` | `-help` | Show help   |

## Examples

### Refactor a Commit Message

```bash
nitor refactor "added some stuff to fix the bug in login"
```

**Output:**

```
Fix: Resolve authentication issue in login functionality
```

### Refactor Documentation

```bash
nitor refactor "This function does stuff with the database and returns data"
```

**Output:**

```
Retrieves and returns data from the database
```

### Refactor Code Comment

```bash
nitor refactor "loop through array and do something with each item"
```

**Output:**

```
Iterate through array elements and process each item
```

### Refactor Multi-line Text

```bash
nitor refactor "The user authentication system needs to be updated because it's not working properly and users are complaining about login issues"
```

**Output:**

```
Update user authentication system to resolve login issues reported by users
```

## Use Cases

### Commit Messages

**Before:**

```bash
nitor refactor "fixed bug"
```

**After:**

```
Fix: Resolve critical bug in user authentication
```

### Pull Request Descriptions

**Before:**

```bash
nitor refactor "made changes to improve performance and fixed some bugs"
```

**After:**

```
Enhance performance and resolve multiple bug fixes
```

### Code Documentation

**Before:**

```bash
nitor refactor "this method gets user info from db"
```

**After:**

```
Retrieves user information from the database
```

### README Content

**Before:**

```bash
nitor refactor "this project is a tool that helps developers do stuff faster"
```

**After:**

```
A developer productivity tool designed to streamline workflow and accelerate development
```

### Issue Descriptions

**Before:**

```bash
nitor refactor "the app crashes when you click the button sometimes"
```

**After:**

```
Application experiences intermittent crashes when button is clicked
```

## What Gets Improved

### Clarity

- Removes ambiguity
- Simplifies complex sentences
- Uses precise language

### Conciseness

- Eliminates redundancy
- Removes filler words
- Keeps essential information

### Professionalism

- Uses appropriate tone
- Follows conventions
- Maintains consistency

### Grammar

- Corrects spelling errors
- Fixes punctuation
- Improves sentence structure

## Best Practices

### Input Guidelines

1. **Be Specific**

   - Include relevant context
   - Mention key details

2. **Keep It Reasonable**

   - Don't input extremely long text
   - Break down complex content

3. **Provide Context**
   - Mention the purpose (commit, docs, etc.)
   - Include technical terms if needed

### Output Usage

1. **Review the Output**

   - Ensure accuracy
   - Verify technical terms
   - Check context preservation

2. **Customize if Needed**
   - Adjust for your style
   - Add project-specific terms
   - Maintain consistency

## Examples by Category

### Git Commit Messages

```bash
# Feature
nitor refactor "added new login page"
# → "feat: Add user login page"

# Bug Fix
nitor refactor "fixed the error in payment"
# → "fix: Resolve payment processing error"

# Documentation
nitor refactor "updated readme file"
# → "docs: Update README documentation"
```

### Code Comments

```bash
# Function Description
nitor refactor "gets all users from database"
# → "Retrieves all user records from the database"

# Variable Purpose
nitor refactor "stores the user data"
# → "Contains user account information"

# TODO Comments
nitor refactor "need to fix this later"
# → "TODO: Refactor for improved performance"
```

### Documentation

```bash
# Installation Steps
nitor refactor "run npm install to install stuff"
# → "Execute npm install to install dependencies"

# Feature Description
nitor refactor "this feature lets users do things"
# → "Enables users to perform specific actions"
```

## Prerequisites

The refactor command requires:

- AI service configuration (Google Generative AI)
- Valid API key
- Internet connection

## Configuration

Ensure you have:

1. Google Generative AI API key configured
2. Proper environment variables set
3. Network access to AI service

## Troubleshooting

### No Output Generated

If refactor produces no output:

1. **Check API configuration:**

   - Verify API key is set
   - Ensure environment variables are loaded

2. **Verify input:**

   - Ensure text is not empty
   - Check for special characters

3. **Check connectivity:**
   - Verify internet connection
   - Test API service availability

### Unexpected Results

If output doesn't match expectations:

1. **Provide more context:**

   - Add relevant details
   - Specify the purpose

2. **Rephrase input:**

   - Use different wording
   - Break into smaller parts

3. **Review and adjust:**
   - Manually edit the output
   - Combine with your knowledge

### API Errors

If you encounter API errors:

1. **Check API key:**

   ```bash
   echo $GOOGLE_AI_API_KEY
   ```

2. **Verify quota:**

   - Check API usage limits
   - Ensure quota is not exceeded

3. **Test connectivity:**
   - Ping API endpoint
   - Check firewall settings

## Tips for Better Results

### Be Descriptive

**Instead of:**

```bash
nitor refactor "fixed it"
```

**Use:**

```bash
nitor refactor "fixed the login validation error that prevented users from signing in"
```

### Include Technical Terms

**Instead of:**

```bash
nitor refactor "updated the thing"
```

**Use:**

```bash
nitor refactor "updated the authentication middleware"
```

### Specify Purpose

**Instead of:**

```bash
nitor refactor "changed some code"
```

**Use:**

```bash
nitor refactor "refactored user service to improve performance"
```

## Getting Help

To see all available options:

```bash
nitor refactor -help
```

## Related Commands

- `nitor review` - AI code review
- `nitor create-branch` - Create branches with good descriptions
- Standard text editors for manual refinement
