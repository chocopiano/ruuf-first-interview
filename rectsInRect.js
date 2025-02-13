// x and y for the roof. a and b for the panel
function maxRectanglesInRectangle(x, y, a, b) {
  function calculate(x, y, a, b) {
    const rectX = Math.floor(x / a);
    const rectY = Math.floor(y / b);
    return rectX * rectY;
  }

  const option1 = calculate(x, y, a, b);
  const option2 = calculate(x, y, b, a);

  let maxMixed = 0;

  for (let splitY = 0; splitY <= y; splitY++) {
    const horizontalSplitOption1 =
      calculate(x, splitY, a, b) + calculate(x, y - splitY, b, a);

    const horizontalSplitOption2 =
      calculate(x, splitY, b, a) + calculate(x, y - splitY, a, b);

    maxMixed = Math.max(
      maxMixed,
      horizontalSplitOption1,
      horizontalSplitOption2
    );
  }

  for (let splitX = 0; splitX <= x; splitX++) {
    const verticalSplitOption1 =
      calculate(splitX, y, a, b) + calculate(x - splitX, y, b, a);

    const verticalSplitOption2 =
      calculate(splitX, y, b, a) + calculate(x - splitX, y, a, b);

    maxMixed = Math.max(maxMixed, verticalSplitOption1, verticalSplitOption2);
  }

  return Math.max(option1, option2, maxMixed);
}

console.log(maxRectanglesInRectangle(10, 1, 2, 2));
