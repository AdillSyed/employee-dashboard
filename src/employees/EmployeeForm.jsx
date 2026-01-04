import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { validateEmployee } from "../utils/validators";
import { useEmployees } from "./employeeContext";

const initialState = {
  name: "",
  gender: "",
  dob: "",
  state: "",
  isActive: true,
  image: null,
};

export default function EmployeeForm({ onClose, existingEmployee }) {
  const { addEmployee, updateEmployee } = useEmployees();
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (existingEmployee) {
      setValues(existingEmployee);
      setPreview(existingEmployee.image || null);
    }
  }, [existingEmployee]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    const reader = new FileReader();
    reader.onloadend = () => {
      setValues({ ...values, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateEmployee(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    existingEmployee ? updateEmployee(values) : addEmployee(values);
    onClose();
  };

  return (
    <Modal
      title={existingEmployee ? "Edit Employee" : "Add Employee"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-slate-600">Profile Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-20 w-20 rounded-full object-cover"
            />
          )}
        </div>

        <div>
          <input
            name="name"
            placeholder="Full Name"
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-100 px-3 py-2"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <select
            name="gender"
            value={values.gender}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-100 px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {errors.gender && (
            <p className="text-sm text-red-600">{errors.gender}</p>
          )}
        </div>

        <div>
          <input
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-100 px-3 py-2"
          />
          {errors.dob && (
            <p className="text-sm text-red-600">{errors.dob}</p>
          )}
        </div>

        <div>
          <input
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleChange}
            className="w-full rounded-md bg-slate-100 px-3 py-2"
          />
          {errors.state && (
            <p className="text-sm text-red-600">{errors.state}</p>
          )}
        </div>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isActive"
            checked={values.isActive}
            onChange={handleChange}
          />
          Active
        </label>

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm"
          >
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
