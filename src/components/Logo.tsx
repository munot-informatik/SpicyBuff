/**
 * SpicyBuff mark: a chili with a blue "buff" arrow, like a stat boost in a video game.
 * The arrow points up and fades out toward the bottom.
 */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="logo-mark">
      <defs>
        <linearGradient id="sb-buff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--buff)" stopOpacity="1" />
          <stop offset="0.45" stopColor="var(--buff)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--buff)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* chili */}
      <path
        d="M11.2 10.2c-3.6 2.4-5.6 7.6-4.4 12.6.6 2.6 2 4.9 3.6 6.2.8.6 1.8.2 1.8-.8-.2-3.6.6-7.4 2.4-10.4 1.2-2 2.8-3.6 4.4-4.6-1.4-2.6-5.2-4.4-7.8-3z"
        fill="var(--chili)"
      />
      <path d="M14.2 10.6c-.2-2.4.8-4.6 3-5.8" fill="none" stroke="var(--stem)" strokeWidth="2" strokeLinecap="round" />
      <path d="M12.6 10.4c1.2-.9 3.4-1 5 .2" fill="none" stroke="var(--stem)" strokeWidth="2" strokeLinecap="round" />
      {/* buff arrow */}
      <path d="M25.5 2.5 31 9.5h-3.4V30h-4.2V9.5H20z" fill="url(#sb-buff)" />
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
