export const validateEmployee = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Full name is required";
  }

  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  if (!values.dob) {
    errors.dob = "Date of birth is required";
  }

  if (!values.state) {
    errors.state = "State is required";
  }

  return errors;
};
