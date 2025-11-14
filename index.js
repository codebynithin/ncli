#!/usr/bin/env node
const { processArgs } = require('./services/process-commands.js');
const { setupAutocomplete } = require('./services/autocomplete.js');

// Setup autocomplete
const completion = setupAutocomplete();

// Handle setup commands
if (process.argv[2] === 'completion') {
  completion.setupShellInitFile();
  console.log('Autocomplete setup complete! Please restart your terminal or run:');
  console.log('  source ~/.bashrc  # for bash');
  console.log('  source ~/.zshrc   # for zsh');
  process.exit(0);
}

const initNpm = async () => {
  let [type, ...value] = (process.argv || []).splice(2);

  if (!type) {
    type = 'help';
  }

  processArgs(type, value?.join(' '));
};

initNpm();

module.exports = initNpm;
