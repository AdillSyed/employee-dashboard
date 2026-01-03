export default function EmptyState({ title, description }) {
  return (
    <div className="text-center py-16 text-slate-500">
      <h3 className="text-lg font-medium text-slate-700">
        {title}
      </h3>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}
