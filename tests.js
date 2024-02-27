process.env.NODE_ENV = "test";
process.env.PUBLIC_URL = "";

import pkg from "jest";
const { run } = pkg;
const argv = process.argv.slice(2);
argv.push("--coverage");

// Watch unless --no-watch or running in CI
if (argv.indexOf("--no-watch") == -1 && !process.env.CI) {
  argv.push("--watchAll");
}

run(argv);
