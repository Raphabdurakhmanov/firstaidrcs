// символ ☾ в шрифтах смотрит не в ту сторону, поэтому рисуем svg как на логотипе
export function Crescent({ size = "1em" }: { size?: string | number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden style={{ display: "inline-block", verticalAlign: "-0.12em" }}>
      <path fill="currentColor" d="M5.107 4.755A10 10 0 1 1 5.107 19.245A8 8 0 1 0 5.107 4.755Z" />
    </svg>
  );
}

export default function TopicIcon({ icon }: { icon: string }) {
  if (icon === "crescent" || icon === "☾" || icon === "☽") return <Crescent />;
  return <>{icon}</>;
}
