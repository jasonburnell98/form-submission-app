import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
import Field from './Field';

// Define a mock onFormSubmit function
const mockOnFormSubmit = jest.fn();
const mockOnFieldChange = jest.fn();

test('Form renders submit correctly', () => {
  const { getByTestId } = render(<Form onFormSubmit={mockOnFormSubmit} />);
  const handleSubmit = getByTestId('handle-submit');
  
  fireEvent.click(handleSubmit);
  expect(getByTestId('handle-submit')).toBeInTheDocument();
});

const fieldData: any = {id:'0'}

test('Form renders onChange hand correctly', () => {
  const {  getByTestId } = render(<Field onChange={mockOnFieldChange} fieldData={fieldData} value={'test'} ></Field>);

  const handleChange = getByTestId('handle-Change-text');
  
  fireEvent.click(handleChange);
  expect(getByTestId('handle-Change-text')).toBeInTheDocument();

});

xtest('Form submission with valid data', () => {
  const { queryByTestId, getByText } = render(<Form onFormSubmit={mockOnFormSubmit} />);

  const firstNameInput: any = queryByTestId('firstName');
  const lastNameInput: any = queryByTestId('lastName');

  // Simulate user input
  fireEvent.change(firstNameInput, { target: { value: 'John' } });
  fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

  // Simulate form submission
  fireEvent.click(getByText('Submit'));

  // Assertions for successful form submission
  expect(mockOnFormSubmit).toHaveBeenCalledTimes(1); // Check if the function is called
  expect(mockOnFormSubmit).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    // Could add more fields here if needed
  });
});
