console.log("Form");

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedData) {
  form.email.value = savedData.email || '';
  form.message.value = savedData.message || '';
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
}

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очищення
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
