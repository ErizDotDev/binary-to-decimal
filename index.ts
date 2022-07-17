const main = (): void => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Write an eight binary digit value: ", (binary: string) => {
    binary = cleanInput(binary);

    if (binary.length > 8) {
      console.log(
        "ERROR: You have exceeded the maximum number of characters allowed."
      );
      rl.close();
      return;
    }

    const decimalResult = convertBinaryToDecimal(binary);
    console.log(`Decimal value = ${decimalResult}!`);
    rl.close();
  });

  rl.on("close", () => {
    process.exit(0);
  });
};

const convertBinaryToDecimal = (binaryInput: string, totalSum = 0): number => {
  if (binaryInput.length === 0) {
    return totalSum;
  }

  const inputLength = binaryInput.length;
  const multiplier = Math.pow(2, inputLength - 1);

  totalSum += (binaryInput[0] as unknown as number) * multiplier;
  binaryInput = binaryInput.substring(1);

  return convertBinaryToDecimal(binaryInput, totalSum);
};

const cleanInput = (input: string): string => input.replace(" ", "");

main();
