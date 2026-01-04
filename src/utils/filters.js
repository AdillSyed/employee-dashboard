export const filterEmployees = (
  employees,
  { search, gender, status }
) => {
  return employees
    .filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((emp) =>
      gender ? emp.gender === gender : true
    )
    .filter((emp) =>
      status === ""
        ? true
        : status === "active"
        ? emp.isActive
        : !emp.isActive
    );
};
