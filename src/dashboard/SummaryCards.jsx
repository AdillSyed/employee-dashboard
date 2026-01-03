export default function SummaryCards({ total, active, inactive }) {
  const cardBase =
    "bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-1";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className={cardBase}>
        <span className="text-sm text-slate-500">Total Employees</span>
        <span className="text-3xl font-semibold text-slate-900">
          {total}
        </span>
      </div>

      <div className={cardBase}>
        <span className="text-sm text-slate-500">Active</span>
        <span className="text-3xl font-semibold text-green-600">
          {active}
        </span>
      </div>

      <div className={cardBase}>
        <span className="text-sm text-slate-500">Inactive</span>
        <span className="text-3xl font-semibold text-slate-400">
          {inactive}
        </span>
      </div>
    </div>
  );
}
