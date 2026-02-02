function TreeSVG({ berries = 5 }) {
  return (
<svg width="420" height="600" viewBox="0 0 140 200">
      {/* Trunk */}
      <rect x="60" y="110" width="20" height="60" fill="#704f4f" />

      {/* Leaves */}
      <circle cx="70" cy="70" r="45" fill="#86a788" />
      <circle cx="40" cy="80" r="35" fill="#86a788" />
      <circle cx="100" cy="80" r="35" fill="#86a788" />

      {/* Berries */}
      {[...Array(berries)].map((_, i) => (
        <circle
          key={i}
          cx={40 + (i * 15)}
          cy={80 + (i % 2) * 15}
          r="4"
          fill="#cf455c"
        />
      ))}
    </svg>
  );
}

export default TreeSVG;
