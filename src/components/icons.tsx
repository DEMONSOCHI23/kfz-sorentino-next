import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ShieldBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M12 3l7 3v5c0 4.6-2.9 8.4-7 10-4.1-1.6-7-5.4-7-10V6l7-3Z" />
      <path d="m8.5 12 2.2 2.2 4.8-5.1" />
    </svg>
  );
}

export function WrenchWheelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />
    </svg>
  );
}

export function RouteFlagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6 20V4" />
      <path d="M6 5c3.2-2 5.9 2 9 0 1-.6 2-.9 3-1v9c-1 .1-2 .4-3 1-3.1 2-5.8-2-9 0" />
    </svg>
  );
}

export function PhoneBadgeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M6.8 3.8a2 2 0 0 1 2.4-.3l2.1 1.3a2 2 0 0 1 .8 2.4l-.8 2a2 2 0 0 0 .4 2.1l1.3 1.3a2 2 0 0 0 2.1.4l2-.8a2 2 0 0 1 2.4.8l1.3 2.1a2 2 0 0 1-.3 2.4l-1.5 1.5c-.9.9-2.2 1.2-3.4.8-3.4-1-6.6-3.4-9.3-7.1C4.9 11 3.5 8 3 5.5a3.1 3.1 0 0 1 .8-2.9l1.5-1.5Z" />
    </svg>
  );
}

export function StarRowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 72 16" fill="none" {...props}>
      {[0, 14, 28, 42, 56].map((x) => (
        <path
          key={x}
          d={`M${x + 8} 1.5l1.8 3.7 4.1.6-3 3 0.7 4.2-3.6-1.9-3.6 1.9.7-4.2-3-3 4.1-.6L${x + 8} 1.5Z`}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
