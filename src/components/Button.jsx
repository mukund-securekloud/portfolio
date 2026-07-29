export default function Button({
  children,
  href,
  primary = true,
}) {
  const styles = primary
    ? "bg-blue-600 hover:bg-blue-700 text-white"
    : "border border-slate-700 hover:border-blue-500 text-white";

  if (href) {
    return (
      <a
        href={href}
        className={`${styles} px-6 py-3 rounded-xl transition`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${styles} px-6 py-3 rounded-xl transition`}
    >
      {children}
    </button>
  );
}