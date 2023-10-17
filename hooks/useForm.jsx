import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // Initialize the form state with the provided initialForm or an empty object
  const [formState, setFormState] = useState(initialForm);

  // onChange function to update the form state when input values change
  const onChange = ({ target }) => {
    const { name, value } = target;
    // Update the form state by spreading the existing state and updating the specific field
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Function to reset all form fields to their initial values
  const cleanFields = () => {
    setFormState(initialForm);
  };

  // Return an object that includes formState, onChange function, and cleanFields function
  return {
    ...formState,   // All the form field values
    onChange,        // Function to update form fields
    cleanFields,     // Function to reset form fields to initial values
  };
};