(function () {
  const STRIPE_WIDTH = 18;
  const STRIPE_MARGIN = 6;
  const STRIPE_HEIGHT = 220;
  const ROTATION = 25;
  const VIEWBOX_SIZE = 100;

  const FILL_COLOR = "#3e464c";

  const STRIPE_COLORS = [
    "#e05062", // red
    "#44abb6", // green
    "#fdc446"  // yellow
  ];

  window.logoSvg = function ({ width = 60, height = 60 } = {}) {
    const totalStripeWidth =
      STRIPE_COLORS.length * STRIPE_WIDTH +
      (STRIPE_COLORS.length - 1) * STRIPE_MARGIN;

    // center + slight right bias
    const startX = (VIEWBOX_SIZE - totalStripeWidth) / 2 + 6;

    const stripes = STRIPE_COLORS.map((color, index) => {
      const x = startX + index * (STRIPE_WIDTH + STRIPE_MARGIN);
      return `
        <rect
          x="${x}"
          y="-45"
          width="${STRIPE_WIDTH}"
          height="${STRIPE_HEIGHT}"
          fill="${color}"
          transform="rotate(${ROTATION} 50 50)"
        />
      `;
    }).join("");

    return `
<svg
  width="${width}"
  height="${height}"
  viewBox="0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="marconium mark"
>
  <rect width="${VIEWBOX_SIZE}" height="${VIEWBOX_SIZE}" fill="${FILL_COLOR}" />
  ${stripes}
</svg>
`.trim();
  };
})();
