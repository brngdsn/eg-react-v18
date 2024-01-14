import logo from './logo.svg';
import './App.css';
import CompoundForm from './components/CompoundForm';

function App() {
  
  // Form validation
  const validateForm = (formData) => {
    let errors = {};
    
    // Text Field Validation
    if (!formData.textField.trim() || formData.textField.length < 3) {
      errors.textField = 'Text field must be at least 3 characters long'
    }
    
    // Dropdown Validation
    if (!formData.dropdown) {
      errors.dropdown = 'Please select an option from the dropdown';
    }

    // Checkbox Validation (if needed)
    if (!formData.checkboxField) {
      errors.checkboxField = 'Checkbox must be checked';
    }

    // Radio Field Validation
    if (!formData.radioField) {
      errors.radioField = 'Please select an option';
    }

    // Date Field Validation
    if (!formData.dateField || new Date(formData.dateField) > new Date()) {
      errors.dateField = 'Invalid date';
    }

    return errors;
  };

  // Form submit handler
  const handleSubmit = (formData) => {
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      alert(`Form is invalid: ${JSON.stringify(errors)}`);
    } else {
      alert('Form is valid');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>CompoundForm</code> with <code>optimizations</code>.
        </p>
        <CompoundForm onSubmit={handleSubmit}>
          <CompoundForm.TextField name="textField" />
          <CompoundForm.SelectField name="dropdown" options={['JavaScript', 'TypeSript']} />
          <CompoundForm.CheckboxField name="checkboxField" />
          <CompoundForm.RadioField name="radioField" optionValues={['ReactJS', 'VueJS']} />
          <CompoundForm.DateField name="dateField" />
          <button type="submit">Submit</button>
        </CompoundForm>
      </header>
    </div>
  );
}

export default App;
