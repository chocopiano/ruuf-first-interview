//b is Base. h is height. x and y for the panel.
function maxRectanglesInTriangle(b, h, x, y) {
  function calculateTriangleWidth(b, h, y) {
    const result = b * (1 - y / h);
    return Math.round(result * 1e12) / 1e12;
  }

  let total = 0;
  const shortestSide = Math.min(x, y);
  const longestSide = Math.max(x, y);

  let rectangleHeight = h >= b ? longestSide : shortestSide;
  const rectangleWidth = h >= b ? shortestSide : longestSide;

  let currentAltitude = rectangleHeight;

  let currentWitdh = calculateTriangleWidth(b, h, currentAltitude);

  while (currentWitdh >= rectangleWidth && currentAltitude <= h) {
    total += Math.floor(currentWitdh / rectangleWidth);
    currentAltitude += rectangleHeight;
    currentWitdh = calculateTriangleWidth(b, h, currentAltitude);
  }

  return total;
}
