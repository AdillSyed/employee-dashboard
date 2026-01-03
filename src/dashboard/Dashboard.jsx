import AppLayout from "../layout/AppLayout";
import SummaryCards from "./SummaryCards";
import { useEmployees } from "../employees/employeeContext";

export default function Dashboard() {
  const { employees } = useEmployees();

  const total = employees.length;
  const active = employees.filter((e) => e.isActive).length;
  const inactive = total - active;

  return (
    <AppLayout>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        Dashboard
      </h2>

      <SummaryCards
        total={total}
        active={active}
        inactive={inactive}
      />
    </AppLayout>
  );
}
