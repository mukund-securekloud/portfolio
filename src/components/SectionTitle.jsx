export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}