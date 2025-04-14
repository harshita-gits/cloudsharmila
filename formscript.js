// Dynamically generate V1-V28 fields
const vFieldsContainer = document.getElementById('vFields');

for (let i = 1; i <= 28; i++) {
  const input = document.createElement('input');
  input.type = 'number';
  input.step = '0.01';
  input.id = `V${i}`;
  input.name = `V${i}`;
  input.placeholder = `V${i}`;
  input.required = true;
  vFieldsContainer.appendChild(input);
}

// Form Submission Handling
document.getElementById('fraudForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(this);

  // Log form data to console (for demonstration)
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }

  // You can send the form data to a server using fetch or XMLHttpRequest
  alert('Form submitted successfully!');
});