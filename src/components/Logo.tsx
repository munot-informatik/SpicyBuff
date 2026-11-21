/**
 * SpicyBuff mark: the Neurospicy chili (same drawing as neurospicy/public/logo.svg)
 * with a blue "buff" arrow beside it, like a stat boost in a video game.
 * The arrow is built from separate blocks: solid head on top, fading out toward the bottom.
 */
/** Shaft blocks from top to bottom, each one fainter. */
export const BUFF_BLOCKS = [
  { y: 28, h: 8, o: 0.72 },
  { y: 39, h: 8, o: 0.46 },
  { y: 50, h: 8, o: 0.22 },
];
export const BUFF_HEAD = { points: '53,24 66,9 79,24', o: 1 };
const VIEW = { x: 3, y: 2, w: 78, h: 60 };

export function LogoMark({ height = 32 }: { height?: number }) {
  return (
    <svg
      height={height}
      width={(height * VIEW.w) / VIEW.h}
      viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`}
      aria-hidden="true"
      focusable="false"
      className="logo-mark"
    >
      {/* Neurospicy chili */}
      <path
        d="M40 17c9 5 13 17 7 28C41 56 27 61 9 58c-1.600-.3-1.800-2.400-.3-3C21 50 27 43 29 33c1.200-6 3.500-12 11-16z"
        fill="#e5412d"
      />
      <path d="M41.500 24c3.500 4.500 4 10.500 1.500 16" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M30 20.500c3-5.500 11.500-7 16.500-1.500 1 1.100.3 2.700-1.100 2.900-2.300.3-3.800 1.300-5.200 3-1.200-1.800-2.800-2.600-5-2.400-1.700.2-3.300.9-4.500 2-.9-1-1.300-2.600-.7-4z"
        fill="#3f9d57"
      />
      <path d="M40 16c-.5-5 2-9 7.500-10.500" fill="none" stroke="#2f8046" strokeWidth="4.500" strokeLinecap="round" />
      {/* buff arrow: solid head, blocks fading toward the bottom */}
      <g fill="var(--buff)">
        {BUFF_BLOCKS.map((b) => (
          <rect key={b.y} x="60" y={b.y} width="12" height={b.h} rx="1" opacity={b.o} />
        ))}
        <polygon points={BUFF_HEAD.points} opacity={BUFF_HEAD.o} />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <span className="logo">
      <LogoMark />
      <span className="logo-word">SpicyBuff</span>
    </span>
  );
}
