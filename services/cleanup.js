const { execSync } = require('child_process');

const cleanup = async () => {
  try {
    console.log('Starting cleanup process...\n');

    // Get current branch
    const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
    console.log(`Current branch: ${currentBranch}`);

    // Checkout to master
    console.log('\nChecking out to master branch...');
    try {
      execSync('git checkout master', { encoding: 'utf-8', stdio: 'inherit' });
    } catch (error) {
      // Try main if master doesn't exist
      console.log('Master branch not found, trying main...');
      execSync('git checkout main', { encoding: 'utf-8', stdio: 'inherit' });
    }

    // Get all local branches except master/main
    console.log('\nFetching list of local branches...');
    const branches = execSync('git branch', { encoding: 'utf-8' })
      .split('\n')
      .map((branch) => branch.trim().replace('* ', ''))
      .filter((branch) => branch && branch !== 'master' && branch !== 'main');

    if (!branches.length) {
      console.log('\nNo branches to delete. Cleanup complete!');
      return;
    }

    console.log(`\nFound ${branches.length} branch(es) to delete:`);

    // Delete each branch
    console.log('\nDeleting branches...');
    let deletedCount = 0;
    let failedCount = 0;

    for (const branch of branches) {
      try {
        execSync(`git branch -D ${branch}`, { encoding: 'utf-8' });
        console.log(`  ✓ Deleted: ${branch}`);
        deletedCount++;
      } catch (error) {
        console.log(`  ✗ Failed to delete: ${branch}`);
        failedCount++;
      }
    }

    console.log(`\nCleanup complete!`);
    console.log(`  Deleted: ${deletedCount} branch(es)`);

    if (failedCount > 0) {
      console.log(`  Failed: ${failedCount} branch(es)`);
    }
  } catch (error) {
    console.error('Error during cleanup:', error.message);
    throw error;
  }
};

module.exports = { cleanup };
