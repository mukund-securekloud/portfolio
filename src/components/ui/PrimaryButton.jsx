export default function PrimaryButton({
  children,
  href,
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center
      bg-blue-600 hover:bg-blue-700
      px-6 py-3 rounded-xl
      transition duration-300
      font-semibold"
    >
      {children}
    </a>
  );
}