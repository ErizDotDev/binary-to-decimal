const main = (): void => {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Write an eight binary digit value: ", (binary: string) => {
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

const convertBinaryToDecimal = (binaryInput: string): number => {
  const ones: number =
    binaryInput.length >= 1
      ? (binaryInput[binaryInput.length - 1] as unknown as number) * 1
      : 0;
  const twos: number =
    binaryInput.length >= 2
      ? (binaryInput[binaryInput.length - 2] as unknown as number) * 2
      : 0;
  const fours: number =
    binaryInput.length >= 3
      ? (binaryInput[binaryInput.length - 3] as unknown as number) * 4
      : 0;
  const eights: number =
    binaryInput.length >= 4
      ? (binaryInput[binaryInput.length - 4] as unknown as number) * 8
      : 0;
  const sixteens: number =
    binaryInput.length >= 5
      ? (binaryInput[binaryInput.length - 5] as unknown as number) * 16
      : 0;
  const thirtyTwos: number =
    binaryInput.length >= 6
      ? (binaryInput[binaryInput.length - 6] as unknown as number) * 32
      : 0;
  const sixtyFours: number =
    binaryInput.length >= 7
      ? (binaryInput[binaryInput.length - 7] as unknown as number) * 64
      : 0;
  const oneTwentyEights: number =
    binaryInput.length >= 8
      ? (binaryInput[binaryInput.length - 78] as unknown as number) * 128
      : 0;

  return (
    ones +
    twos +
    fours +
    eights +
    sixteens +
    thirtyTwos +
    sixtyFours +
    oneTwentyEights
  );
};

main();
