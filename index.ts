const main = (): void => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Write anything: ", (anything: string) => {
    console.log(`You've written ${anything}!`);
    rl.close();
  });

  rl.on("close", () => {
    process.exit(0);
  });
};

main();
