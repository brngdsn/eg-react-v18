import React, { useState, useCallback, useEffect } from 'react';

// CompoundForm Component
const CompoundForm = ({ children, onSubmit }) => {
  
  // State
  const [formData, setFormData] = useState({
    textField: '',
    dropdown: '',
    checkboxField: false,
    radioField: '',
    dateField: '',
  });

  // Submit Handler
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  }, [formData, onSubmit]);

  // Change Handler
  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  // Local data caching
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [])

  useEffect(() => {
    setFormData((currentFormData) => {
      localStorage.setItem('formData', JSON.stringify(currentFormData));
      return currentFormData;
    })
  }, [formData]);

  // View
  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onChange: handleChange,
          value: formData[child.props.name],
          checked: formData[child.props.name],
        });
      })}
    </form>
  );

};

// Form fields
const TextField = React.memo(({ name, onChange, value }) => (
  <input type="text" name={name} onChange={onChange} value={value || ''} />
));

const SelectField = React.memo(({ name, options, onChange, value }) => (
  <select name={name} onChange={onChange} value={value || ''}>
    {options.map((option) => <option key={option} value={option}>{option}</option>)}
  </select>
));

const CheckboxField = React.memo(({ name, onChange, checked }) => (
  <input type="checkbox" name={name} onChange={onChange} checked={checked || false} />
));

const RadioField = React.memo(({ name, optionValues, onChange, value }) => (
  <div>
    {optionValues.map((option) => (
      <label key={option}>
        <input
          type="radio"
          name={name}
          value={option}
          onChange={onChange}
          checked={value === option}
        />
        {option}
      </label>
    ))}
  </div>
));

const DateField = React.memo(({ name, onChange, value }) => (
  <input type="date" name={name} onChange={onChange} value={value || ''} />
));

// Exporting each field as a static property
CompoundForm.TextField = TextField;
CompoundForm.SelectField = SelectField;
CompoundForm.CheckboxField = CheckboxField;
CompoundForm.RadioField = RadioField;
CompoundForm.DateField = DateField;

// Export CompoundForm
export default CompoundForm;
