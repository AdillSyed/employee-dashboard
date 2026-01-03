const STORAGE_KEY = "employees";

const seedEmployees = [
    {
      id: 1,
      name: "Arun Kumar",
      gender: "Male",
      dob: "1997-06-12",
      state: "Vijayawada",
      isActive: true,
    },
    {
      id: 2,
      name: "Namratha",
      gender: "Female",
      dob: "1999-08-08",
      state: "Vishakapatnam",
      isActive: false,
    },
    {
      id: 3,
      name: "Rahul Varma",
      gender: "Male",
      dob: "1998-11-21",
      state: "Kakinada",
      isActive: true,
    },
  ];

export const loadEmployees = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEmployees));
  return seedEmployees;
};

export const saveEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};